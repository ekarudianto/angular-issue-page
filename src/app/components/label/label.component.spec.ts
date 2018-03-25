import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComponent } from './label.component';

describe('LabelComponent', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    component.name = 'new issue';
    component.color = 'fff';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct value of label name', () => {
    expect(component.name).toBe('new issue');
  });

  it('should have correct value of label color', () => {
    expect(component.color).toBe('fff');
  });
});
