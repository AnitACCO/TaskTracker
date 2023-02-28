import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  title : string = 'Task Tracker';
  showAddTask : boolean =  false;
  Subscription : Subscription | undefined;
  constructor(private uiService : UiService, private router : Router) {
    this.Subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit() : void {}

  toggleAddTask(){
    this.uiService.toggleAddTAsk();
  }

  hasRoute(route : string){
    return this.router.url === route;
  }
}
