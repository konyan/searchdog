import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import React from "react";

interface SearchComponentProps {
	searchValue: string;
	onChangeListener: () => void;
	onRenderPosts: () => void;
}

const SearchComponent = ({
	searchValue,
	onChangeListener,
	onRenderPosts,
}: SearchComponentProps) => {
	return (
		<View
			style={{
				flexDirection: "column",
				alignItems: "flex-start",
				marginBottom: 16,
			}}
		>
			<TextInput
				placeholder="enter search keyword"
				value={searchValue}
				onChange={onChangeListener}
				autoFocus
				style={{
					width: "100%",
					borderColor: "#eaeaea",
					borderWidth: 2,
					padding: 8,
					marginBottom: 8,
				}}
			/>
			<TouchableOpacity
				onPress={onRenderPosts}
				style={{
					backgroundColor: "#bababa",
					paddingHorizontal: 18,
					paddingVertical: 12,
					borderRadius: 3,
				}}
			>
				<Text style={{ color: "blue", fontWeight: "bold" }}>Re Render</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
});

export default SearchComponent;
