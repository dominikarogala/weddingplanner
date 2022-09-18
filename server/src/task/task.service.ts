import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Category, Task } from './task.model';

@Injectable()
export class TaskService {
    constructor(@Inject('CATEGORY_MODEL') private readonly categoryModel: Model<Category>) {}

    async addNewCategory(categoryName: string) {
        const newCategory = new this.categoryModel({
            name: categoryName,
            tasks: [],
        });

        const result = await newCategory.save();
        return result._id;
    }

    async addNewTask(categoryId: string, newTask: Task): Promise<string> {
        const category = await this._findCategory(categoryId);
        const index: number = category.tasks.push(newTask);
        const result: Category = await category.save();

        return result.tasks[index - 1]._id;
    }

    async getAllTasks() {
        const allTasks = await this.categoryModel.find().exec();
        return allTasks.map((category: Category) => ({
            id: category._id,
            name: category.name,
            tasks: category.tasks.map(task => ({
                name: task.name,
                endDate: task.endDate,
                isFinished: task.isFinished,
                id: task._id,
                notes: task?.notes,
            })),
        }));
    }

    async deleteTask(categoryId: string, taskId: string) {
        try {
            const result = await this.categoryModel.updateOne({ _id: categoryId }, { $pull: { tasks: { _id: taskId } } }).exec();
            if (result.modifiedCount > 0) {
                return result;
            } else {
                throw new NotFoundException('Could not find a task or category.');
            }
        } catch (error) {
            throw new NotFoundException('Could not find a task or category.');
        }
    }

    async deleteCategory(categoryId: string) {
        try {
            const result = await this.categoryModel.deleteOne({ _id: categoryId });
            if (result.deletedCount > 0) {
                return result;
            } else {
                throw new NotFoundException('Could not find a category.');
            }
        } catch (error) {
            throw new NotFoundException('Could not find a category.');
        }
    }

    async editTask(categoryId: string, task: Task) {
        try {
            return await this.categoryModel.findOneAndUpdate(
                { 'tasks._id': task.id },
                {
                    'tasks.$.isFinished': task.isFinished,
                    'tasks.$.name': task.name,
                    'tasks.$.endDate': task.endDate,
                    'tasks.$.notes': task.notes,
                },
            );
        } catch (error) {
            console.log(error);
            throw new NotFoundException('Could not update a task.');
        }
    }

    async editCategory(categoryId: string, categoryName: string) {
        return await this.categoryModel.findOneAndUpdate({ _id: categoryId }, { name: categoryName });
    }

    private async _findCategory(categoryId: string): Promise<any> {
        let category;

        try {
            category = await this.categoryModel.findById(categoryId);
        } catch (error) {
            throw new NotFoundException('Could not find a category.');
        }

        return category;
    }
}
