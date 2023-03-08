import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsultationComponent } from './card-consultation.component';

describe('CardConsultationComponent', () => {
  let component: CardConsultationComponent;
  let fixture: ComponentFixture<CardConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
