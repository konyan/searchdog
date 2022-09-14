import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React from "react";
import { PostType } from "../../context/model";
import SearchComponent from "../SearchComponent";

const { width } = Dimensions.get("screen");

type PostsComponentProps = {
	posts: PostType[];
	fetchMoreData: () => void;
};

const PostsComponent = ({ posts, fetchMoreData }: PostsComponentProps) => {
	const renderHeader = () => {
		return (
			<View>
				<Image
					source={require("../../../assets/doggo_walk.gif")}
					style={{ width, height: 240 }}
				/>
				<SearchComponent />
			</View>
		);
	};
	const renderFooter = () => {
		return (
			<Text
				style={{ textAlign: "center", marginVertical: 8, fontWeight: "bold" }}
			>
				Loading....
			</Text>
		);
	};
	const renderItem = ({ item: post }) => {
		return (
			<View
				style={{
					borderBottomWidth: 1,
					borderBottomColor: "#bababa",
					paddingVertical: 4,
				}}
			>
				<Text>
					{post.id}:{post.body}
					<Text style={{ fontWeight: "bold", flex: 1 }}>{post.randon}</Text>
				</Text>
			</View>
		);
	};
	return (
		<FlatList
			showsVerticalScrollIndicator={false}
			data={posts}
			renderItem={renderItem}
			keyExtractor={(post, index) => index?.toString()}
			onEndReachedThreshold={0.2}
			onEndReached={fetchMoreData}
			ListHeaderComponent={renderHeader}
			ListFooterComponent={renderFooter}
		/>
	);
};

export default PostsComponent;
