import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngxs/store";
import { AddItem } from "../../store/items.state";
import { EditEmojiDialogComponent } from "./edit-emoji/edit-emoji.component";

interface Sector {
  value: string;
}

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.scss"]
})
export class AddItemComponent implements OnInit {
  selectedValue: string;
  itemForm: FormGroup;

  sectors: Sector[] = [
    { value: "IT" },
    { value: "Finance" },
    { value: "Medical" },
    { value: "Insurance" },
    { value: "Travel" }
  ];

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      sector: [""],
      co2: [""],
      feeling: [""]
    });
  }

  editEmoji() {
    const dialogRef = this.dialog.open(EditEmojiDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.itemForm.patchValue({ feeling: result.emoji.native });
      }
    });
  }

  submit() {
    this.store.dispatch(new AddItem(this.itemForm.value));
  }
}
