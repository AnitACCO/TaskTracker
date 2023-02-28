import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task } from 'src/app/Tasks';

import { TaskItemComponent } from './task-item.component';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should emit', () => {
    let task : Task = {
      id : 4,
      text: "string",
      day: "string",
      reminder: false
    }

    console.log(task)
    let spy = spyOn(component['onToggleReminder'],"emit").and.stub();
    component.onToggle(task);

    expect(spy).toHaveBeenCalled();
  })

});
