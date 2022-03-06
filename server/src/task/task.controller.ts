import { Body, Controller, Post } from '@nestjs/common';
import { ITask } from './task.model';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    constructor(private readonly _taskService: TaskService) {}

    @Post()
    async addTask(@Body() task: ITask) {
        const generatedId = await this._taskService.addNewTask(task);
        return { id: generatedId };
    }
}
