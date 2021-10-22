import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdrateComponent } from './prodrate.component';

describe('ProdrateComponent', () => {
  let component: ProdrateComponent;
  let fixture: ComponentFixture<ProdrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
