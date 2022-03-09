import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Task } from './task.model';
import { TaskService } from './task.service';
@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly _taskService: TaskService) {}

    @Post('category')
    async addCategory(@Body('category') categoryName: string): Promise<string> {
        const generatedId = await this._taskService.addNewCategory(categoryName);
        return generatedId;
    }

    @Post()
    async addTask(@Body() task: Task) {
        const generatedId = await this._taskService.addNewTask(task);
        return { id: generatedId };
    }
}
