import React, { createContext, useReducer } from "react";
import { InitialStateType, PostType } from "./model";
import { postReducer, PostActions } from "./reducers";

const initialState = {
	posts: [],
	searchKeyword: "",
};

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: React.Dispatch<PostActions>;
}>({
	state: initialState,
	dispatch: () => null,
});

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
export { AppContext, AppProvider };
