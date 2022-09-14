export type PostType = {
	id: number;
	userId: number;
	title: string;
	body: string;
	randon?: number;
};

export type InitialStateType = {
	posts: PostType[];
	searchPosts: PostType[];
	searchKeyword: string;
};

export enum Types {
	FETCH = "FETCH_POSTS",
	DUPLICATE = "DUPLICATE_POSTS",
	RENDER = "RENDER_POSTS",
	SEARCH = "SEARCH_POSTS",
	RERENDER = "RERENDER_POSTS",
}
