import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideCarComponent } from './aside-car.component';

describe('AsideCarComponent', () => {
  let component: AsideCarComponent;
  let fixture: ComponentFixture<AsideCarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideCarComponent]
    });
    fixture = TestBed.createComponent(AsideCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
