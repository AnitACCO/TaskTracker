import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit', () => {
    let spy = spyOn(component['btnClick'],"emit").and.stub();
    component.onClick();
    expect(spy).toHaveBeenCalled();
  })

  it('should set color', () => {
    component.color = 'blue';
    fixture.detectChanges();
    expect(component.color).toBe('blue');
  });

  it('should set text', () => {
    component.text = 'hello';
    fixture.detectChanges();
    expect(component.text).toBe('hello');
  });

});
