import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEndpointItemComponent } from './api-endpoint-item.component';

describe('ApiEndpointItemComponent', () => {
  let component: ApiEndpointItemComponent;
  let fixture: ComponentFixture<ApiEndpointItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiEndpointItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiEndpointItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
