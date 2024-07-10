import {Route, Routes} from "react-router-dom";
import Inicio from "../Inicio";
import SobreNos from "../SobreNos";
import Download from "../Download";
import {Main} from "./style";

export default function MainContainer() {
	return (
		<Main>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/Sobre-Nos" element={<SobreNos />} />
				<Route path="/Download" element={<Download />} />
			</Routes>
		</Main>
	);
}
