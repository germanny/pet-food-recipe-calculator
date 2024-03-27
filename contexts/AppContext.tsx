import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  ReactElement,
} from "react";
import { AppStateReducer } from "@/store/AppStore";
import { IngredientsList } from "@/types/Ingredients";
import {
  AppContextType,
  AppStateProviderProps,
  Dispatch,
  State,
  UseAppStateType,
} from "@/types/State";
import { ActionTypes } from "@/types/Actions";
import { withDevTools } from "@/contexts/withDevTools";

const AppStateContext = createContext<AppContextType | undefined>(null);

function useAppState(): UseAppStateType {
  if (AppStateContext === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  const [state, dispatch]: [State, Dispatch] = useContext(AppStateContext);

  return {
    state,
    setIngredientsList(ingredientsList: IngredientsList) {
      dispatch({ type: ActionTypes.SET_INGREDIENTS_LIST, ingredientsList });
    },
  };
}

function AppStateProvider({
  initialValue,
  ...props
}: AppStateProviderProps): ReactElement {
  const [state, baseDispatch]: [State, Dispatch] = useReducer(
    AppStateReducer,
    initialValue
  );

  // @todo - should this only be on in lower environments?
  const { dispatch } = withDevTools(baseDispatch, AppStateReducer);

  const value: AppContextType = useMemo(() => [state, dispatch], [state]);

  return <AppStateContext.Provider value={value} {...props} />;
}

export { useAppState, AppStateProvider };
