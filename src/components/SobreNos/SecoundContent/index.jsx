import CardContent from "./Card";
import {Conect} from "./style";

export default function SecoundContent() {
	return (
		<Conect>
			<CardContent
				title={"Conectando com o Cliente"}
				content={"Entendimento"}
				text={
					"Em um mercado onde a identificação com marcas é essencial, nossa prioridade é estabelecer uma conexão genuína com o cliente. Mais do que vender, buscamos entender profundamente suas necessidades e criar uma relação de confiança mútua, onde cada interação fortalece o vínculo entre o cliente e nosso negócio."
				}
				img={"handshake"}
			/>
			<CardContent
				title={"Superando Expectativas"}
				content={"Expectativa superadas"}
				text={
					"Cada contato com o cliente é uma chance de ir além. Ao compreender suas expectativas, nos esforçamos para superá-las em cada detalhe, garantindo que a experiência com nossa marca seja sempre positiva e memorável, gerando satisfação e fidelidade duradoura."
				}
				img={"star"}
			/>
			<CardContent
				title={"Construindo uma Comunidade"}
				content={"Cada cliente é especial"}
				text={
					"Ao compartilhar nossas crenças e valores de forma autêntica, criamos uma comunidade em torno do nosso negócio. Cada cliente se sente parte desse universo, gerando uma conexão emocional forte e duradoura que transforma consumidores em defensores da marca."
				}
				img={"heart"}
			/>
		</Conect>
	);
}
