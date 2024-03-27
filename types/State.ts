import { Action } from "@/types/Actions";
import { IngredientsList } from "@/types/Ingredients";

export type State = {
  ingredientsList?: IngredientsList;
  version?: string;
};

export type UseAppStateType = {
  state: State;
  setIngredientsList: (ingredientsList: IngredientsList) => void;
};

export type Dispatch = (action: Action) => void;
export type Reducer = (state: State, action: Action) => State;

export type AppContextType = [State, Dispatch];

export type AppStateProviderProps = {
  initialValue: State;
  children: React.ReactNode;
};
