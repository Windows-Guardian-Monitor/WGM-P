// index.jsx (NavBar)
import {Link} from "react-router-dom";
import {
	ContentList,
	Header,
	HeaderAnimation,
	IconList,
	Line,
	List,
	Logo,
	Switch
} from "./style";
import {useState} from "react";
import logoImage from "../../images/logoPlus.png";
import logoImageDark from "../../images/logoPlusDark.png";
import {useTheme} from "styled-components";

export default function NavBar({toggleTheme}) {
	const theme = useTheme();
	const isDarkMode = theme.title === "dark";

	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<HeaderAnimation
				isDarkMode={isDarkMode}
				isOpen={isOpen}
			></HeaderAnimation>
			<Header isOpen={isOpen}>
				<Logo src={isDarkMode ? logoImageDark : logoImage} />
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

					<Switch isDarkMode={isDarkMode} onClick={toggleTheme} />
				</List>
				<IconList  onClick={handleToggle} isOpen={isOpen}>
					<Line></Line>
					<Line></Line>
					<Line></Line>
				</IconList>
			</Header>
		</>
	);
}
