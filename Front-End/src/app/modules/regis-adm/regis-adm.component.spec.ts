import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisAdmComponent } from './regis-adm.component';

describe('RegisAdmComponent', () => {
  let component: RegisAdmComponent;
  let fixture: ComponentFixture<RegisAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisAdmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
