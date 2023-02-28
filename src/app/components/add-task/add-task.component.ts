import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Tasks';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text : string = '' ;
  day : string  = '';
  reminder : boolean = false;
  showAddTask : boolean = false;
  Subscription : Subscription | undefined;

  constructor(private uiService : UiService) {
    this.Subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  onSubmit(){
    if(!this.text){
      alert('Please Add Task!');
      return;
    }
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    };

    this.onAddTask.emit(newTask)
    this.text = ''
    this.day = ''
    this.reminder = false
  }

}
