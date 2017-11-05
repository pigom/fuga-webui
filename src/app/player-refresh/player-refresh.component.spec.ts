import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRefreshComponent } from './player-refresh.component';

describe('PlayerRefreshComponent', () => {
  let component: PlayerRefreshComponent;
  let fixture: ComponentFixture<PlayerRefreshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRefreshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
