import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "edit-emoji-dialog",
  templateUrl: "edit-emoji.component.html"
})
export class EditEmojiDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  selectEmoji(event) {
    console.log(event);
  }

  cancel() {}

  submit() {}
}
