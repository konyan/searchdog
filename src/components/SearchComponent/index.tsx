import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../context/context";
import { Types } from "../../context/model";

const SearchComponent = () => {
	const { state, dispatch } = useContext(AppContext);

	const onChangeListener = (value) => {
		dispatch({
			type: Types.SEARCH,
			payload: {
				keyword: value,
			},
		});
	};

	const onRenderPosts = () => {
		console.log("HELL");
	};

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
				value={state.searchKeyword}
				onChangeText={onChangeListener}
				autoFocus
				style={{
					width: "100%",
					borderColor: "#eaeaea",
					borderWidth: 2,
					padding: 8,
					marginVertical: 8,
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
