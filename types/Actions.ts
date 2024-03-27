import { IngredientsList } from "@/types/Ingredients";

export enum ActionTypes {
  SET_INGREDIENTS_LIST = "SET_INGREDIENTS_LIST",
}

export interface SetIngredientsListAction {
  type: ActionTypes.SET_INGREDIENTS_LIST;
  ingredientsList: IngredientsList;
}

export type Action = SetIngredientsListAction; // | SetActiveTierListAction;
