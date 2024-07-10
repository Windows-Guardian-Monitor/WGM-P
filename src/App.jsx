import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer";
import { BrowserRouter } from "react-router-dom";
export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<MainContainer />
		</BrowserRouter>
	);
}
