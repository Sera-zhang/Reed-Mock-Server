import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpointEditModalComponent } from './endpoint-edit-modal.component';

describe('EndpointEditModalComponent', () => {
  let component: EndpointEditModalComponent;
  let fixture: ComponentFixture<EndpointEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndpointEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndpointEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
