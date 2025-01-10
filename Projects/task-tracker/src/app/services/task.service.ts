import { Injectable } from '@angular/core';
import { Task } from '../../types/app.types';
import { TASKS } from '../../mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // Get Task
  getTasks(): Observable<Task[]> {
    const task = of(TASKS);
    return task;
  }

  // Delete Task
  deleteTask(task: Task): Observable<Task[]> {
    const updatedTasks = TASKS.filter((t) => t.id !== task.id);
    return of(updatedTasks);
  }

  // Update Task Reminder
  updateTaskRemider(task: Task): Observable<Task[]> {
    const updatedTasks = TASKS.map((t) =>
      t.id === task.id
        ? {
            ...t,
            reminder: !t.reminder,
          }
        : t
    );
    return of(updatedTasks);
  }

  //Add Task
  addTask(task: Task): Observable<Task[]> {
    const newTask = {
      id: TASKS.length + 1,
      ...task,
    };
    // TASKS.push(task);
    return of(TASKS);
  }
}
