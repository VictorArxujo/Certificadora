import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisDoComponent } from './regis-do.component';

describe('RegisDoComponent', () => {
  let component: RegisDoComponent;
  let fixture: ComponentFixture<RegisDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisDoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
