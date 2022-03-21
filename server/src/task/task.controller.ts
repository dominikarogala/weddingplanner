import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { Task } from './task.model';
import { TaskService } from './task.service';

@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly _taskService: TaskService) {}

    @Post()
    async addNewTask(@Body('categoryId') categoryId: string, @Body('task') task: Task): Promise<string> {
        const generatedId = await this._taskService.addNewTask(categoryId, task);
        return generatedId;
    }

    @Post('category')
    async addNewCategory(@Body('categoryName') categoryName: string): Promise<string> {
        const generatedId = await this._taskService.addNewCategory(categoryName);
        return generatedId;
    }

    @Get()
    async getAllTasks() {
        const allTasks = await this._taskService.getAllTasks();
        return allTasks;
    }
}
