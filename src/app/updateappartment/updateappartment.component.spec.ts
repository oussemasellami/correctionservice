import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappartmentComponent } from './updateappartment.component';

describe('UpdateappartmentComponent', () => {
  let component: UpdateappartmentComponent;
  let fixture: ComponentFixture<UpdateappartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateappartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateappartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
