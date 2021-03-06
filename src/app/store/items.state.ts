import { State, Action, StateContext } from "@ngxs/store";

export class Add {
  static readonly type = "Add";
}

export interface ItemStateModel {
  section: string;
  co2: string;
  feeling: string;
}

@State<ItemStateModel[]>({
  name: "items",
  defaults: [
    {
      section: "s1",
      co2: "co2",
      feeling: "sad"
    }
  ]
})
export class ItemsState {
  @Action(Add)
  add({ getState, setState }: StateContext<ItemStateModel>, { payload }: any) {
    // add({ getState, setState }) {
    const state = getState();
    console.log(state);
    setState({
      section: "s1",
      co2: "co2",
      feeling: "sad"
    });
  }
}
