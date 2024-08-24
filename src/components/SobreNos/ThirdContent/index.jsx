import React from "react";
import {useTheme} from "styled-components";
import StampCard from "./StampCard";
import {Container, ContentTitle, Third, Title} from "./style";
import htmlLogo from "../../../images/icons/html.png";
import cssLogo from "../../../images/icons/css.png";
import javascriptLogo from "../../../images/icons/javascript.png";
import styledcomponentsLogo from "../../../images/icons/styledcomponents.png";
import reactLogo from "../../../images/icons/react.png";
import cLogo from "../../../images/icons/csharp.png";
import vsLogo from "../../../images/icons/vs.png";
import vscodeLogo from "../../../images/icons/vscode.png";
import mysqlLogo from "../../../images/icons/mysql.png";
import gitLogo from "../../../images/icons/git.png";
import githubLogo from "../../../images/icons/github.png";
import githubDarkLogo from "../../../images/icons/github-dark.png";
import blazorLogo from "../../../images/icons/blazor.png";

export default function ThirdContent() {
	const theme = useTheme();
	const isDarkMode = theme.title === "dark";
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
				<StampCard
					href={"https://visualstudio.microsoft.com/pt-br/downloads/"}
					target={"_blank"}
					color={"#5C2D91"}
				>
					<img src={vsLogo} />
					<h1>Visual Studio</h1>
					<p>
						Uma IDE completa para desenvolvimento de aplicações e sites,
						com suporte a C# e ferramentas integradas.
					</p>
				</StampCard>

				<StampCard
					href={"https://code.visualstudio.com/download"}
					target={"_blank"}
					color={"#007ACC"}
				>
					<img src={vscodeLogo} />
					<h1>Visual Studio Code</h1>
					<p>
						Um editor de código leve e versátil, com suporte nativo
						diversas linguagens. Escolhido pela praticidade, com recursos
						como autocomplete, terminal integrado.
					</p>
				</StampCard>

				<StampCard
					href={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
					target={"_blank"}
					color={"#E34F26"}
				>
					<img src={htmlLogo} />
					<h1>HTML</h1>
					<p>
						HTML é a linguagem padrão para criar páginas web. Ela define a
						estrutura do conteúdo usando tags.
					</p>
				</StampCard>

				<StampCard
					href={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
					target={"_blank"}
					color={"#1572B6"}
				>
					<img src={cssLogo} />
					<h1>CSS</h1>
					<p>
						CSS é uma linguagem usada para estilizar páginas web. Ela
						controla a aparência e o layout dos elementos HTML.
					</p>
				</StampCard>

				<StampCard
					href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
					target={"_blank"}
					color={"#F7DF1E"}
				>
					<img src={javascriptLogo} />
					<h1>Javascript</h1>
					<p>
						JavaScript é uma linguagem de programação usada para criar
						interatividade em páginas web. Ela permite adicionar
						funcionalidades dinâmicas.
					</p>
				</StampCard>

				<StampCard
					href={"https://react.dev/"}
					target={"_blank"}
					color={"#61DAFB"}
				>
					<img src={reactLogo} />
					<h1>React</h1>
					<p>
						React é uma biblioteca JavaScript para criar interfaces de
						usuário. Desenvolvido pelo Facebook, facilita a construção de
						componentes reutilizáveis.
					</p>
				</StampCard>

				<StampCard
					href={"https://styled-components.com/"}
					target={"_blank"}
					color={"#DB7093"}
				>
					<img src={styledcomponentsLogo} />
					<h1>Styled Components</h1>
					<p>
						Styled Components é uma biblioteca para React que permite
						estilizar componentes com CSS usando JavaScript.
					</p>
				</StampCard>

				<StampCard
					href={"https://learn.microsoft.com/en-us/dotnet/csharp/"}
					target={"_blank"}
					color={"#7138c0"}
				>
					<img src={cLogo} />
					<h1>C#</h1>
					<p>
						C# é uma linguagem de programação da Microsoft usada para
						criar aplicações na plataforma .NET. É conhecida por sua
						sintaxe clara e recursos poderosos.
					</p>
				</StampCard>

				<StampCard
					href={"https://www.mysql.com/"}
					target={"_blank"}
					color={"#00758F"}
				>
					<img src={mysqlLogo} />
					<h1>MySQL</h1>
					<p>
						É um SGBD de código aberto, o serviço disponibiliza o uso do
						SQL, possibilitando que operações de leitura, escrita, deleção
						e atualização de dados.
					</p>
				</StampCard>

				<StampCard
					href={"https://git-scm.com/"}
					target={"_blank"}
					color={"#F05032"}
				>
					<img src={gitLogo} />
					<h1>Git</h1>
					<p>
						Git é um sistema de controle de versão distribuído que ajuda a
						gerenciar e rastrear mudanças em arquivos de código-fonte ao
						longo do tempo.
					</p>
				</StampCard>

				<StampCard
					href={"https://github.com/"}
					target={"_blank"}
					color={isDarkMode ? "#9c9c9c" : "#181717"}
				>
					<img src={isDarkMode ? githubDarkLogo : githubLogo} />
					<h1>Github</h1>
					<p>
						GitHub é uma plataforma baseada em nuvem que hospeda
						repositórios Git e facilita a colaboração em projetos de
						software.
					</p>
				</StampCard>

				<StampCard
					href={
						"https://learn.microsoft.com/en-us/aspnet/core/blazor/?view=aspnetcore-8.0"
					}
					target={"_blank"}
					color={"#773cbb"}
				>
					<img src={blazorLogo} />
					<h1>Blazor</h1>
					<p>
						Blazor é um framework da Microsoft para construir aplicações
						web interativas usando C#.
					</p>
				</StampCard>
			</Container>
		</Third>
	);
}
