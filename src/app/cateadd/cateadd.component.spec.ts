import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateaddComponent } from './cateadd.component';

describe('CateaddComponent', () => {
  let component: CateaddComponent;
  let fixture: ComponentFixture<CateaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
