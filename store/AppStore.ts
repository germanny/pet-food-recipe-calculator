import { Action, ActionTypes } from "@/types/Actions";
import { State } from "@/types/State";

export function AppStateReducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.SET_INGREDIENTS_LIST:
      return { ...state, ingredientsList: action.ingredientsList };

    default:
      return state;
  }
}
