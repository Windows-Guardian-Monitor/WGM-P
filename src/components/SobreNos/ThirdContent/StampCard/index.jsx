import { useTheme } from "styled-components";
import {
	About,
	Container,
	ContainerStamp,
	StampImage,
	TextContent,
	Title
} from "./style";
import React from "react";

export default function StampCard({children, href, target, color}) {
	const theme = useTheme();
	const isDarkMode = theme.title === "dark";

	let imgElement = null;
	let titleElement = null;
	let textElement = null;

	React.Children.forEach(children, child => {
		if (child.type === "img") {
			imgElement = child;
		} else if (child.type === "h1") {
			titleElement = child;
		} else if (child.type === "p") {
			textElement = child;
		}
	});

	return (
		<a href={href} target={target}>
			<Container isDarkMode={isDarkMode}>
				<ContainerStamp>
					<StampImage>{imgElement}</StampImage>
				</ContainerStamp>
				<About>
					<Title isDarkMode={isDarkMode} color={color}>{titleElement}</Title>
					<TextContent>{textElement}</TextContent>
				</About>
			</Container>
		</a>
	);
}
