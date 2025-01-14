import { Component, input, OnInit, output } from '@angular/core';
import { Task } from '../../../types/app.types';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent implements OnInit {
  task = input.required<Task>();
  onDeleteTask = output<Task>();
  onToggleReminder = output<Task>();
  onAddTask = output<Task>();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }

  onAdd(task: Task) {
    console.log(task);
    this.onAddTask.emit(task);
  }
}
