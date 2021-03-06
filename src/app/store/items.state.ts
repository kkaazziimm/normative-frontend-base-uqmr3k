import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";
import { Item } from "../models/item.model";

export class AddItem {
  static readonly type = "AddItem";
  constructor(public payload: Item) {}
}

export interface ItemStateModel {
  items: Item[];
}

@State<ItemStateModel>({
  name: "items",
  defaults: {
    items: [
      {
        section: "halil",
        co2: "co",
        feeling: "sad"
      }
    ]
  }
})
@Injectable()
export class ItemsState {
  @Action(AddItem)
  feedZebra(ctx: StateContext<ItemStateModel>, action: AddItem) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      items: [...state.items, action.payload]
    });
  }
}
