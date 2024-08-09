import {Link} from "react-router-dom";
import {useTypewriter, Cursor} from "react-simple-typewriter";
import {CardImage, ContainerWrite, DownloadButtom, TextoWrite} from "./style";
import grafico from "../../../images/grafico.png";

export default function StartContent() {
	const [text] = useTypewriter({
		words: [
			"Monitorar",
			"Proteger",
			"Analisar",
			"Bloquear",
			"Registrar",
			"Alertar",
			"te trazer Segurança"
		],
		loop: 1,
		typeSpeed: 70,
		deleteSpeed: 50,
		delaySpeed: 1400
	});

	return (
			<ContainerWrite>
				<TextoWrite>
					<h1>
						Nosso trabalho é <span>{text}</span>
						<span>
							<Cursor />
						</span>
					</h1>
					<p>
						Bem-vindo ao Windows Guardiam Monitor, a solução definitiva
						para gerenciar e proteger seu computador. Nosso software foi
						projetado para oferecer segurança de ponta ao seu sistema
						Windows, bloqueando aplicativos indesejados e garantindo que
						apenas usuários autorizados tenham acesso às funcionalidades
						que você define. Com Windows Guardiam Monitor, você tem o
						controle total sobre o que pode ser executado em seu PC.
					</p>
					<Link to="/Download">
						<DownloadButtom>
							<div>
								<span></span>
								Baixar
							</div>
						</DownloadButtom>
					</Link>
				</TextoWrite>
				<CardImage src={grafico} />
			</ContainerWrite>
	);
}
