import {Container, ContentImage, ContentTitle, Text, Title} from "./style";
import computador from "../../../images/computador.png";
import vassoura from "../../../images/vassoura.png";

export default function StartContent() {
	return (
		<Container>
			<ContentTitle>
				<Title>Redescubra a Confiança na Sua Tecnologia</Title>
				<Text>
					Nosso compromisso é proporcionar um controle total e eficaz sobre
					a tecnologia que você utiliza. Em um cenário digital onde a
					segurança e a eficiência são fundamentais, nossa missão é
					monitorar os computadores de maneira precisa e criar logs
					detalhados de acessos aos programas. Oferecemos uma solução que
					permite aos usuários escolher quais programas desejam bloquear,
					garantindo um ambiente digital seguro e otimizado. Ao fornecer
					essas ferramentas de monitoramento e controle, asseguramos que
					seus dispositivos estejam sempre em conformidade com suas
					preferências e necessidades, promovendo um uso mais seguro e
					produtivo da tecnologia.
				</Text>
			</ContentTitle>
			<ContentImage>
				<img src={computador} />
				<img src={vassoura} />
			</ContentImage>
		</Container>
	);
}
