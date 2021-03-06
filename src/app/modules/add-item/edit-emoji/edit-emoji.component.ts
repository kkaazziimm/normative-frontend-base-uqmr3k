import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "edit-emoji-dialog",
  templateUrl: "edit-emoji.component.html",
  styleUrls: ["./edit-emoji.component.scss"]
})
export class EditEmojiDialogComponent {
  currentEmoji: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditEmojiDialogComponent>
  ) {}

  selectEmoji(event) {
    this.currentEmoji = event;
  }

  cancel() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.currentEmoji);
  }
}
