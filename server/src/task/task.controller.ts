import { Body, Controller, Delete, Get, HttpCode, Post, Put, Query, Res, UseGuards } from '@nestjs/common';

import type { Response } from 'express';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PdfPrinterService } from 'src/shared/services/pdf-printer/pdf-printer.service';
import { Task } from './task.model';
import { TaskService } from './task.service';

@UseGuards(JwtAuthGuard)
@Controller('task')
export class TaskController {
    constructor(private readonly _taskService: TaskService, private readonly _pdfPrinterService: PdfPrinterService) {}

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

    @Delete()
    @HttpCode(204)
    async deleteTask(@Query('categoryId') categoryId: string, @Query('taskId') taskId: string) {
        return await this._taskService.deleteTask(categoryId, taskId);
    }

    @Delete('category')
    @HttpCode(204)
    async deleteCategory(@Query('categoryId') categoryId: string) {
        return await this._taskService.deleteCategory(categoryId);
    }

    @Put()
    @HttpCode(204)
    async updateTask(@Body('categoryId') categoryId: string, @Body('task') task: Task) {
        return await this._taskService.editTask(categoryId, task);
    }

    @Put('category')
    @HttpCode(204)
    async updateCategory(@Body('categoryId') categoryId: string, @Body('categoryName') categoryName: string) {
        return await this._taskService.editCategory(categoryId, categoryName);
    }

    @Get('pdf')
    async getPDF(@Res() res: Response): Promise<void> {
        const doc = await this._pdfPrinterService.generatePDF();
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="test.json"',
        });
        doc.pipe(res);
    }
}
