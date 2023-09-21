import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUpdateComponent } from './feature-update.component';

describe('FeatureUpdateComponent', () => {
  let component: FeatureUpdateComponent;
  let fixture: ComponentFixture<FeatureUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureUpdateComponent]
    });
    fixture = TestBed.createComponent(FeatureUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
