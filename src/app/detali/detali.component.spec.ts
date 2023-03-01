import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliComponent } from './detali.component';

describe('DetaliComponent', () => {
  let component: DetaliComponent;
  let fixture: ComponentFixture<DetaliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
