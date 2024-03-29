import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  tasks : Task[] = [];

  ngOnInit() : void{
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task : Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks = this.tasks.filter(t => t.id !== task.id)));
    location.reload()
  }

  toggleReminder(task : Task){
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task : Task){
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
    location.reload()
  }
}
