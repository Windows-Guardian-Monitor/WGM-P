import {Link} from "react-router-dom";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {CardImage, ContainerWrite, TextoWrite} from "./style";

export default function Inicio() {
	const [text] = useTypewriter({
		words: [
			"Verificar",
			"Escanear",
			"Analisar",
			"Bloquear",
			"Mostrar",
			"Enviar",
			"te trazer Segurança"
		],
		loop: 1,
		typeSpeed: 70,
		deleteSpeed: 50,
		delaySpeed: 1300
	});

	return (
		<>
			<ContainerWrite>
				<TextoWrite>
					<span>Nosso trabalho é </span>
					<span>{text}</span>
					<span>
						<Cursor />
					</span>
				</TextoWrite>
				<CardImage>
				</CardImage>
			</ContainerWrite>
			<Link to="/Download">Download</Link>
		</>
	);
}
