import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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
        return result.id;
    }

    async addNewTask(categoryId: string, newTask: Task): Promise<string> {
        const category = await this._findCategory(categoryId);

        category.tasks.push(newTask);
        category.save();

        return;
    }

    async getAllTasks() {
        const allTasks = await this.categoryModel.find().exec();
        return allTasks.map((task: Category) => ({
            id: task._id,
            name: task.name,
            tasks: task.tasks,
        }));
    }

    private async _findCategory(categoryId: string): Promise<Category> {
        let category;

        try {
            category = await this.categoryModel.findById(categoryId);
        } catch (error) {
            throw new NotFoundException('Could not find a category.');
        }

        return category;
    }
}
