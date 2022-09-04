import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonUpdateDialogComponent } from './person-update-dialog.component';

describe('PersonUpdateDialogComponent', () => {
  let component: PersonUpdateDialogComponent;
  let fixture: ComponentFixture<PersonUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonUpdateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
