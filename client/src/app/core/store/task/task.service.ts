import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiUrls } from 'src/app/shared/constants';
import { ICategory, ITask, ITaskDTO } from 'src/app/shared/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class TaskService {
    constructor(private _http: HttpClient) {}

    getTasks(): Observable<ICategory[]> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.get<ICategory[]>(url);
    }

    addNewTask(taskDTO: ITaskDTO): Observable<string> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.post<string>(url, {
            categoryId: taskDTO.categoryId,
            task: taskDTO.task,
        });
    }

    addNewCategory(categoryName: string): Observable<string> {
        const url = environment.baseUrl + ApiUrls.category;
        return this._http.post<string>(url, { categoryName });
    }

    deleteTask(categoryId: string, taskId: string): Observable<any> {
        const url = environment.baseUrl + ApiUrls.task;
        return this._http.delete(url, { body: { categoryId, taskId } });
    }
}
