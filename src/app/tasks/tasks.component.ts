import { Component, Input, input, output } from '@angular/core';
import { type TaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input() name?: string;
  isAddingTask = false;
  private tasksService: TasksService;

  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }

    get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id: string){
    }

    onStartAddTask() {
      this.isAddingTask = true;
    }

    onCloseAddTask() {
      this.isAddingTask = false;
    }

    onAddTask(taskData: TaskData) {
      this.tasksService.addTask(taskData, this.userId);
      this.isAddingTask = false;
    }
}
