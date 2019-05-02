import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowDisplayComponent } from './tvshow-display.component';

describe('TvshowDisplayComponent', () => {
  let component: TvshowDisplayComponent;
  let fixture: ComponentFixture<TvshowDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvshowDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
