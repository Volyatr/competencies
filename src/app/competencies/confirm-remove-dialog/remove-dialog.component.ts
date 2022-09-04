import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PersonUpdateDialogComponent} from "../person-update-dialog/person-update-dialog.component";

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<PersonUpdateDialogComponent>,
  ) {
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

  confirm(): void {
    this.dialogRef.close(true);
  }
}
