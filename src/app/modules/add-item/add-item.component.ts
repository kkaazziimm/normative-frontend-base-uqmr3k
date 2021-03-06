import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngxs/store";
import { AddItem } from "../../store/items.state";
import { NonNegative } from "./custom-validator.directive";
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
      sector: ["", Validators.required],
      co2: [0, Validators.required],
      feeling: ["😐", Validators.required]
    });

    this.itemForm.setValidators(NonNegative);
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
    if (this.itemForm.valid) {
      this.store.dispatch(new AddItem(this.itemForm.value));
    }
  }
}
