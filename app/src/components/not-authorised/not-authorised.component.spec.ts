import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorisedComponent } from './not-authorised.component';

describe('NotAuthorisedComponent', () => {
  let component: NotAuthorisedComponent;
  let fixture: ComponentFixture<NotAuthorisedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotAuthorisedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotAuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
