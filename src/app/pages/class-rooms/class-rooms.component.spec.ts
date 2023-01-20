import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassRoomsComponent } from './class-rooms.component';

describe('ClassRoomsComponent', () => {
  let component: ClassRoomsComponent;
  let fixture: ComponentFixture<ClassRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassRoomsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
