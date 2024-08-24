import {Link} from "react-router-dom";
import {ContainerContent, ConteinerFooter, ContentFooter} from "./style";

export default function Footer() {
	return (
		<ConteinerFooter>
			<ContentFooter>
				<ContainerContent>
					<h1>Contato</h1>
					<a
						target="_blank"
						href="https://github.com/orgs/Windows-Guardian-Monitor/repositories"
					>
						Repositório Git
					</a>
					<a
						target="_blank"
						href="https://github.com/orgs/Windows-Guardian-Monitor/people"
					>
						Desenvolvedores
					</a>
					<a href="mailto:msthaiiscomercial@gmail.com">
						msthaiiscomercial@gmail.com
					</a>
				</ContainerContent>
				<ContainerContent>
					<h1>Páginas</h1>
					<Link to="/">Página inicial</Link>
					<Link to="/Sobre-Nos">Por que WGM?</Link>
					<Link to="/Download">Download</Link>
				</ContainerContent>
			</ContentFooter>
		</ConteinerFooter>
	);
}
