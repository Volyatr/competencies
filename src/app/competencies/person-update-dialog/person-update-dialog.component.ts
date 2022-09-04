import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogData} from "../../model/dialog-data";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-person-update-dialog',
  templateUrl: './person-update-dialog.component.html',
  styleUrls: ['./person-update-dialog.component.scss']
})
export class PersonUpdateDialogComponent {
  form: FormGroup = this.fb.group({
    firstName: [''],
    lastName: ['']
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {
  }

  cancel() {

  }

  save() {

  }
}
