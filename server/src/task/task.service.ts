import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';

import { Category, Task } from './task.model';

@Injectable()
export class TaskService {
    constructor(@Inject('CATEGORY_MODEL') private readonly categoryModel: Model<Category>) {}

    async addNewCategory(categoryName: string) {
        console.log(categoryName);
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
        return allTasks.map((task: Category) => ({
            id: task._id,
            name: task.name,
            tasks: task.tasks,
        }));
    }

    async deleteTask(categoryId: string, taskId: string) {
        try {
            return await this.categoryModel.updateOne({ _id: categoryId }, { $pull: { tasks: { _id: taskId } } }).exec();
        } catch (error) {
            throw new NotFoundException('Could not find a task or category.');
        }
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
