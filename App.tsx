import { AppProvider } from "./src/context/context";
import HomeScreen from "./src/screen/HomeScreen";

export default function App() {
	return (
		<AppProvider>
			<HomeScreen />
		</AppProvider>
	);
}
