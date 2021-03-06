import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { AddItemComponent } from "./modules/add-item/add-item.component";
import { ListItemsComponent } from "./modules/list-items/list-items.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataService } from "./services/data.service";
import { ItemsState } from "./store/items.state";
import { MatDialogModule } from "@angular/material/dialog";
import { EditEmojiDialogComponent } from "./modules/add-item/edit-emoji/edit-emoji.component";
import { PickerModule } from "@ctrl/ngx-emoji-mart";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([ItemsState]),
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    PickerModule
  ],
  entryComponents: [EditEmojiDialogComponent],
  declarations: [
    AppComponent,
    ListItemsComponent,
    AddItemComponent,
    EditEmojiDialogComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
