import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitosoComponent } from './exitoso.component';

describe('ExitosoComponent', () => {
  let component: ExitosoComponent;
  let fixture: ComponentFixture<ExitosoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitosoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
