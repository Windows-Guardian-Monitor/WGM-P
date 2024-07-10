import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Inicio from "./components/Inicio";
import SobreNos from "./components/SobreNos";
import Download from "./components/Download";
import {Main} from "./app";

export default function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Main>
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/Sobre-Nos" element={<SobreNos />} />
					<Route path="/Download" element={<Download />} />
				</Routes>
			</Main>
		</BrowserRouter>
	);
}
