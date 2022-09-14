import {
	SafeAreaView,
	StyleSheet,
	Image,
	Dimensions,
	View,
	Text,
	ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import SearchComponent from "../components/SearchComponent";
import PostsComponent from "../components/PostsComponent";
import { AppContext } from "../context/context";
import { PostType, Types } from "../context/model";

const postCount = 10;

const HomeScreen = () => {
	const { state, dispatch } = useContext(AppContext);
	const [render, setRender] = useState(false);
	const [showPosts, SetShowPosts] = useState<PostType[]>([]);
	const [pageCount, setPageCount] = useState(1);

	useEffect(() => {
		if (render) {
			if (state.searchKeyword) {
				const searchPosts = getSearchResults(state.posts);
				SetShowPosts(searchPosts);
			} else if (state.posts) {
				const first100Posts = state.posts.slice(0, pageCount * postCount);
				SetShowPosts(first100Posts);
			}
		}
	}, [render, state]);

	useEffect(() => {
		getFetchPosts();
	}, []);

	const getFetchPosts = async () => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type: Types.FETCH,
					payload: data,
				});
				dispatch({
					type: Types.DUPLICATE,
					payload: {
						count: 30,
					},
				});

				dispatch({
					type: Types.RENDER,
					payload: {},
				});
				setRender(true);
			});
	};

	const fetchPost = () => {
		const new100Posts = state.posts.slice(
			pageCount * postCount,
			(pageCount + 1) * postCount
		);
		SetShowPosts([...showPosts, ...new100Posts]);
		setPageCount(pageCount + 1);
	};

	const getSearchResults = (posts: PostType[]) => {
		return posts.filter(
			(post) =>
				post.randon.toString().includes(state.searchKeyword) ||
				post.body
					.toLowerCase()
					.includes(state.searchKeyword.toLocaleLowerCase())
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ padding: 8 }}>
				{render ? (
					<PostsComponent posts={showPosts} fetchMoreData={fetchPost} />
				) : (
					<Text>Loading....</Text>
				)}
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
