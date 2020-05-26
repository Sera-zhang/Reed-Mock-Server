import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEditModalComponent } from './config-edit-modal.component';

describe('ConfigEditModalComponent', () => {
  let component: ConfigEditModalComponent;
  let fixture: ComponentFixture<ConfigEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
