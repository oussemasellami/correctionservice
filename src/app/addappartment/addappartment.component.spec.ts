import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappartmentComponent } from './addappartment.component';

describe('AddappartmentComponent', () => {
  let component: AddappartmentComponent;
  let fixture: ComponentFixture<AddappartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddappartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddappartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
