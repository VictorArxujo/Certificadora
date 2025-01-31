import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuasDoComponent } from './suas-do.component';

describe('SuasDoComponent', () => {
  let component: SuasDoComponent;
  let fixture: ComponentFixture<SuasDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuasDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuasDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
