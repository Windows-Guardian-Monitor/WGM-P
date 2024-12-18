import {Link} from "react-router-dom";
import {
	ContainerContent,
	ConteinerFooter,
	ContentFooter,
	Logo,
	LogoContent
} from "./style";
import { useTheme } from "styled-components";
import logoImageDark from "../../images/logoPlusDark.png";

export default function Footer() {
	const theme = useTheme();
	const isDarkMode = theme.title === "dark";

	return (
		<ConteinerFooter>
			<ContentFooter>
				<ContainerContent>
					<h1>Contato</h1>
					<a
						target="_blank"
						href="https://github.com/orgs/Windows-Guardian-Monitor/repositories"
					>
						Repositório Github
					</a>
					<a
						target="_blank"
						href="https://github.com/orgs/Windows-Guardian-Monitor/people"
					>
						Desenvolvedores
					</a>
				</ContainerContent>
				<ContainerContent>
					<h1>Páginas</h1>
					<Link to="/">Página inicial</Link>
					<Link to="/Sobre-Nos">Por que WGM?</Link>
					<Link to="/Download">Download</Link>
					<Link to="/Termos-de-Uso">Termos de Uso</Link>
				</ContainerContent>
			</ContentFooter>
			<LogoContent>
				<Logo src={logoImageDark} />
				<p>&copy; 2024 Windows Guardian Monitor. Todos os direitos reservados.</p>
			</LogoContent>
		</ConteinerFooter>
	);
}
