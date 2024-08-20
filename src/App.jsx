import NavBar from "./components/NavBar"
import MainContainer from "./components/MainContainer";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<MainContainer />
			<Footer />
		</BrowserRouter>
	);
}
