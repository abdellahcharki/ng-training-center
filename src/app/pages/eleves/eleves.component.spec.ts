import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevesComponent } from './eleves.component';

describe('ElevesComponent', () => {
  let component: ElevesComponent;
  let fixture: ComponentFixture<ElevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
