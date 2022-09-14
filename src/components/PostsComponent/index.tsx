import { View, Text, FlatList } from "react-native";
import React from "react";
import { PostType } from "../../context/model";

type PostsComponentProps = {
	posts: PostType[];
	fetchMoreData: () => void;
};

const PostsComponent = ({ posts, fetchMoreData }: PostsComponentProps) => {
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
			<View>
				<Text>
					{post.id}:{post.body}
					<Text style={{ fontWeight: "bold", flex: 1 }}>{post.randon}</Text>
				</Text>
			</View>
		);
	};
	return (
		<FlatList
			contentContainerStyle={{ flexGrow: 1 }}
			data={posts}
			renderItem={renderItem}
			keyExtractor={(post, index) => index?.toString()}
			onEndReachedThreshold={0.4}
			onEndReached={fetchMoreData}
			ListFooterComponent={renderFooter}
		/>
	);
};

export default PostsComponent;
