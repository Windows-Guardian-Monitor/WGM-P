import {Link} from "react-router-dom";
import {
	ContentList,
	Header,
	HeaderAnimation,
	IconList,
	Line,
	List,
	Logo
} from "./style";
import {useState} from "react";
import logoImage from "../../images/logoPlus.png";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<HeaderAnimation isOpen={isOpen}></HeaderAnimation>
			<Header isOpen={isOpen}>
				<Logo src={logoImage} />
				<List>
					<ContentList>
						<Link onClick={handleToggle} to="/">
							Início
						</Link>
					</ContentList>
					<ContentList>
						<Link onClick={handleToggle} to="/Sobre-Nos">
							Sobre
						</Link>
					</ContentList>
					<ContentList>
						<Link onClick={handleToggle} to="/Download">
							Download
						</Link>
					</ContentList>
				</List>
				<IconList onClick={handleToggle} isOpen={isOpen}>
					<Line></Line>
					<Line></Line>
					<Line></Line>
				</IconList>
			</Header>
		</>
	);
}
