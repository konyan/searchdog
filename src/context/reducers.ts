import { InitialStateType, PostType, Types } from "./model";
import randomNumber from "../helpers/randonNumber";

type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

type PostPayload = {
	[Types.SEARCH]: {
		keyword: string;
	};
	[Types.DUPLICATE]: {
		count: number;
	};
	[Types.RENDER]: {};
	[Types.FETCH]: {};
	[Types.RERENDER]: {};
};

export type PostActions = ActionMap<PostPayload>[keyof ActionMap<PostPayload>];

export const postReducer = (state: InitialStateType, action: PostActions) => {
	switch (action.type) {
		case Types.FETCH:
			return { ...state, posts: action.payload };

		case Types.DUPLICATE:
			let updatePosts = state.posts;
			for (let i = 1; i < action.payload.count; i++) {
				updatePosts = updatePosts.concat(state.posts);
			}
			return { ...state, posts: updatePosts };

		case Types.RENDER:
			const randonPosts = state.posts.map((post: PostType) => {
				const random = randomNumber();
				return { ...post, randon: random };
			});
			return { ...state, posts: randonPosts };

		case Types.SEARCH:
			const value = action.payload.keyword;

			return { ...state, searchKeyword: value };

		case Types.RERENDER:
			const rerenderPosts = state.posts.map((post: PostType) => {
				const random = randomNumber();
				return { ...post, randon: random };
			});
			console.log("UPDAT", rerenderPosts[0].randon);
			return { searchKeyword: "", posts: rerenderPosts };

		default:
			return state;
	}
};
