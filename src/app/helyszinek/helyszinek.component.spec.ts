import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelyszinekComponent } from './helyszinek.component';

describe('HelyszinekComponent', () => {
  let component: HelyszinekComponent;
  let fixture: ComponentFixture<HelyszinekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelyszinekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelyszinekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
