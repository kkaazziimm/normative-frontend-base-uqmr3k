import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { Router } from "@angular/router";
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
    private router: Router,
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
      console.log(`Dialog result: ${result}`);
    });
  }

  submit() {
    this.store.dispatch(
      new AddItem({
        section: "222",
        co2: "co222",
        feeling: "sad222"
      })
    );
    this.router.navigate(["/"]);
  }
}
