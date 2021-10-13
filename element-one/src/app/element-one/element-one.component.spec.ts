import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementOneComponent } from './element-one.component';

describe('ElementOneComponent', () => {
  let component: ElementOneComponent;
  let fixture: ComponentFixture<ElementOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
