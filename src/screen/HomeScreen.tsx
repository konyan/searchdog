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

const { width } = Dimensions.get("screen");

const HomeScreen = () => {
	const { state, dispatch } = useContext(AppContext);
	const [render, setRender] = useState(false);
	const [showPosts, SetShowPosts] = useState<PostType[]>();

	useEffect(() => {
		if (render && state.posts) {
			const first100Posts = state.posts.splice(0, 10);
			console.log("FIR", first100Posts);
			SetShowPosts(first100Posts);
		}
	}, [render]);

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
		console.log("HELLO");
		const new100Posts = state.posts.splice(showPosts.length, 10);
		SetShowPosts([...showPosts, ...new100Posts]);
	};

	console.log("REND", render);
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../../assets/doggo_walk.gif")}
				style={{ width, height: 240 }}
			/>
			<View style={{ padding: 8 }}>
				<SearchComponent />
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
