import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { AddItemComponent } from "./modules/add-item/add-item.component";
import { ListItemsComponent } from "./modules/list-items/list-items.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { DataService } from "./services/data.service";
import { ItemsState } from "./store/items.state";

const appRoutes: Routes = [
  { path: "", component: ListItemsComponent },
  { path: "add-item", component: AddItemComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([ItemsState]),
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule
  ],
  declarations: [AppComponent, ListItemsComponent, AddItemComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
