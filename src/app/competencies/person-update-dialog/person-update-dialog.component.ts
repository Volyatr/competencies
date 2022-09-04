import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../../model/dialog-data";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Person} from "../../model/person";

@Component({
  selector: 'app-person-update-dialog',
  templateUrl: './person-update-dialog.component.html',
  styleUrls: ['./person-update-dialog.component.scss']
})
export class PersonUpdateDialogComponent {
  form: FormGroup = this.fb.group({
    firstName: [this.data.person?.firstName, Validators.required],
    lastName: [this.data.person?.lastName, Validators.required]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<PersonUpdateDialogComponent>,
    private fb: FormBuilder
  ) {
  }

  validate(event: KeyboardEvent): void {
    if(this.form.invalid && event.key === 'Enter') {
      event.preventDefault();
    }
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  save(): void {
    const newPerson: Person = {
      id: null,
      firstName: this.form.value['firstName'],
      lastName: this.form.value['lastName']
    };

    this.dialogRef.close(newPerson);
  }
}
