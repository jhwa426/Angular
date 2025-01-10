import { Component, OnInit, output } from '@angular/core';
import { Task } from '../../../types/app.types';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent implements OnInit {
  onAddTask = output<Task>();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
    console.log(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
