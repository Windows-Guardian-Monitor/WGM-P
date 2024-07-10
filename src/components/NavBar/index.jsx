import {Link} from "react-router-dom";
import {ContentList, Header, IconList, List} from "./style";
import {useState} from "react";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Header isOpen={isOpen}>
			<IconList onClick={handleToggle} />
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
