import {useState} from "react";
import {
	Close,
	Container,
	ContainerFather,
	ContainerTransparent,
	Description,
	H4Colores,
	Text
} from "./style";

export default function TextContent({titulo, texto, destaque1, destaque2}) {
	const [isWindow, setIsWindow] = useState(false);

	const toggleWindow = () => {
		setIsWindow(!isWindow);
	};

	return (
		<ContainerFather>
			<ContainerTransparent onClick={toggleWindow} isWindow={isWindow} />

			<Container isWindow={isWindow}>
				<div>
					<Close onClick={toggleWindow} isWindow={isWindow}>
						<div>
							<span></span>
							<span></span>
						</div>
					</Close>
					<H4Colores>{titulo}</H4Colores>
					<Text isWindow={isWindow}>{texto}</Text>
				</div>
				<Description isWindow={isWindow}>
					<span>{destaque1 || <p>Destaque1</p>}</span>
					<span>{destaque2 || <p>Destaque2</p>}</span>
				</Description>
			</Container>
		</ContainerFather>
	);
}