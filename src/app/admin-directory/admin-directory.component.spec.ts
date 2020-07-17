import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectoryComponent } from './admin-directory.component';

describe('AdminDirectoryComponent', () => {
  let component: AdminDirectoryComponent;
  let fixture: ComponentFixture<AdminDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
