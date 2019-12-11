import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormComponent } from './template-driven-form.component';

describe('TemplateDrivenFormComponent', () => {
  let component: TemplateDrivenFormComponent;
  let fixture: ComponentFixture<TemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
