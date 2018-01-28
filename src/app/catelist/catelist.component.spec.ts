import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatelistComponent } from './catelist.component';

describe('CatelistComponent', () => {
  let component: CatelistComponent;
  let fixture: ComponentFixture<CatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
