import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "edit-emoji-dialog",
  templateUrl: "edit-emoji-dialog.html"
})
export class EditEmojiDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
