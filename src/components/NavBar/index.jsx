import {Link} from "react-router-dom";
import {ContentList, Header, List} from "./style";

export default function NavBar() {
	return (
		<Header>
			<List>
				<ContentList>
					<Link to="/">Início</Link>
				</ContentList>
				<ContentList>
					<Link to="/Sobre-Nos">Sobre nós</Link>
				</ContentList>
				<ContentList>
					<Link to="/Download">Download</Link>
				</ContentList>
			</List>
		</Header>
	);
}
