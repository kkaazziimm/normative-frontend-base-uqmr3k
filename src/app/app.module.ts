import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from "./app.component";
import { AddItemComponent } from "./modules/add-item/add-item.component";
import { ListItemsComponent } from "./modules/list-items/list-items.component";

const appRoutes: Routes = [
  { path: "", component: ListItemsComponent },
  { path: "add-item", component: AddItemComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([]),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [AppComponent, ListItemsComponent, AddItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
