import {Link} from "react-router-dom";
import {ConteinerFooter, ContentFooter} from "./style";


export default function Footer() {
	return (
		<ConteinerFooter>
			<ContentFooter>
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
				<Link to="/Download">Por que WGM?</Link>
				<Link to="/Download">Download</Link>
			</ContentFooter>
		</ConteinerFooter>
	);
}