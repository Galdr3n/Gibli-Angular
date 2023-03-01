import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisokComponent } from './spisok.component';

describe('SpisokComponent', () => {
  let component: SpisokComponent;
  let fixture: ComponentFixture<SpisokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpisokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpisokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
