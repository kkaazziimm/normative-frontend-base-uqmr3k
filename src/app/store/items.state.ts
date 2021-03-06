import { Injectable } from "@angular/core";
import { State, Action, StateContext } from "@ngxs/store";

export interface Item {
  section: string;
  co2: string;
  feeling: string;
}

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
    items: []
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
