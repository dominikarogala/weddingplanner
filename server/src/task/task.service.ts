import { Inject, Injectable } from '@nestjs/common';
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

    addNewTask(newTask: Task) {}
}
