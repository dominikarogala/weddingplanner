import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from 'src/app/shared/constants';
import { ITaskCategory, ITask, ITaskDTO } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class TaskService {
    constructor(private _http: HttpClient) {}

    getTasks(): Observable<ITaskCategory[]> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.get<ITaskCategory[]>(url);
    }

    addNewTask(taskDTO: ITaskDTO): Observable<string> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.post<string>(url, {
            categoryId: taskDTO.categoryId,
            task: taskDTO.task,
        });
    }

    addNewCategory(categoryName: string): Observable<string> {
        const url = environment.baseUrl + ApiUrls.taskCategory;
        return this._http.post<string>(url, { categoryName });
    }

    deleteTask(categoryId: string, taskId: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.delete(url, { params: { categoryId, taskId } });
    }

    deleteCategory(categoryId: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.taskCategory;
        return this._http.delete(url, { params: { categoryId } });
    }

    //TODO: TASK DTO model?
    editTask(categoryId: string, task: ITask): Observable<any> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.put(url, { categoryId, task });
    }

    editCategory(categoryId: string, categoryName: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.taskCategory;
        return this._http.put(url, { categoryId, categoryName });
    }
}
