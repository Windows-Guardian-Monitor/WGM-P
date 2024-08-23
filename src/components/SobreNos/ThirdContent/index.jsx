import StampCard from "./StampCard";
import {Container, ContentTitle, Third, Title} from "./style";
import htmlLogo from "../../../images/icons/html.png";
import cssLogo from "../../../images/icons/css.png";
import javascriptLogo from "../../../images/icons/javascript.png";
import styledcomponentsLogo from "../../../images/icons/styledcomponents.png";
import reactLogo from "../../../images/icons/react.png";
import cLogo from "../../../images/icons/csharp.png";

export default function ThirdContent() {
	return (
		<Third>
			<ContentTitle>
				<Title>O que usamos nesse projeto?</Title>
				<p>
					Para este projeto, utilizamos uma combinação de tecnologias que
					nos permitiu desenvolver uma solução completa e eficiente. Cada
					ferramenta foi escolhida para otimizar diferentes aspectos do
					desenvolvimento e garantir uma experiência de usuário rica e
					responsiva.
				</p>
			</ContentTitle>
			<Container>
				<StampCard>
					<img src={htmlLogo} />
					<h1>HTML</h1>
					<p>
						HTML é a linguagem padrão para criar páginas web. Ela define a
						estrutura do conteúdo usando tags.
					</p>
				</StampCard>

				<StampCard>
					<img src={cssLogo} />
					<h1>CSS</h1>
					<p>
						CSS é uma linguagem usada para estilizar páginas web. Ela
						controla a aparência e o layout dos elementos HTML.
					</p>
				</StampCard>

				<StampCard>
					<img src={javascriptLogo} />
					<h1>Javascript</h1>
					<p>
						JavaScript é uma linguagem de programação usada para criar
						interatividade em páginas web. Ela permite adicionar
						funcionalidades dinâmicas.
					</p>
				</StampCard>

				<StampCard>
					<img src={reactLogo} />
					<h1>React</h1>
					<p>
						React é uma biblioteca JavaScript para criar interfaces de
						usuário. Desenvolvido pelo Facebook, facilita a construção de
						componentes reutilizáveis.
					</p>
				</StampCard>

				<StampCard>
					<img src={styledcomponentsLogo} />
					<h1>Styled Components</h1>
					<p>
						Styled Components é uma biblioteca para React que permite
						estilizar componentes com CSS usando JavaScript.
					</p>
				</StampCard>

				<StampCard>
					<img src={cLogo} />
					<h1>C#</h1>
					<p>
						C# é uma linguagem de programação da Microsoft usada para
						criar aplicações na plataforma .NET. É conhecida por sua
						sintaxe clara e recursos poderosos.
					</p>
				</StampCard>
			</Container>
		</Third>
	);
}
