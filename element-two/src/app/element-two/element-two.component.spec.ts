import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTwoComponent } from './element-two.component';

describe('ElementTwoComponent', () => {
  let component: ElementTwoComponent;
  let fixture: ComponentFixture<ElementTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
