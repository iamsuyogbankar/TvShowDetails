import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOfShowComponent } from './details-of-show.component';

describe('DetailsOfShowComponent', () => {
  let component: DetailsOfShowComponent;
  let fixture: ComponentFixture<DetailsOfShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOfShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOfShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
