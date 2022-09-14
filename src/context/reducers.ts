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
				return { ...post, randon: randomNumber };
			});
			return { ...state, posts: randonPosts };

		default:
			return state;
	}
};