import Footer from "../Footer/index.jsx";
import SecoundContent from "./SecoundContent";
import StartContent from "./StartContent";
import ThirthContent from "./ThirthContent";
import { InicioContent } from "./style.js";

export default function Inicio() {
	return (
		<InicioContent>
			<StartContent />
			<SecoundContent />
			<ThirthContent />
			<Footer></Footer>
		</InicioContent>
	);
}
