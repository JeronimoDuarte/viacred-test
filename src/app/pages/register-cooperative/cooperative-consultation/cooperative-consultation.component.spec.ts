import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeConsultationComponent } from './cooperative-consultation.component';

describe('CooperativeConsultationComponent', () => {
  let component: CooperativeConsultationComponent;
  let fixture: ComponentFixture<CooperativeConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CooperativeConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
