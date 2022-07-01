import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoInputAddItensComponent } from './to-do-input-add-itens.component';

describe('ToDoInputAddItensComponent', () => {
  let component: ToDoInputAddItensComponent;
  let fixture: ComponentFixture<ToDoInputAddItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoInputAddItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoInputAddItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
