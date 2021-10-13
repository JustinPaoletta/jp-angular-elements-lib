import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementThreeComponent } from './element-three.component';

describe('ElementThreeComponent', () => {
  let component: ElementThreeComponent;
  let fixture: ComponentFixture<ElementThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
