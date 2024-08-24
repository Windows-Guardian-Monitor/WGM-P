import {CardContainer, ImageOne, MiniContent, TextContent, TitleContent} from "./style";
import star from "../../../../images/Star/star.png";
import starDark from "../../../../images/Star/starDark.png";
import handshake from "../../../../images/Star/handshake.png";
import handshakeDark from "../../../../images/Star/handshakeDark.png";
import heart from "../../../../images/Star/heart.png";
import heartDark from "../../../../images/Star/heartDark.png";
import { useTheme } from "styled-components";

export default function CardContent({title, content, text, img}) {
	const theme = useTheme();
	const isDarkMode = theme.title === "dark";

    let contentImage = img

    if (contentImage === "star") {
		contentImage = isDarkMode ? starDark : star;
    } else if (contentImage === "handshake") {
		contentImage = isDarkMode ? handshakeDark : handshake;
    } else if (contentImage === "heart") {
		contentImage = isDarkMode ? heartDark : heart;
    }

	return (
		<CardContainer isDarkMode={isDarkMode} image={img}>
			<TitleContent>{title}</TitleContent>
			<MiniContent>{content}</MiniContent>
			<TextContent>{text}</TextContent>
            <ImageOne image={img} src={contentImage} />
		</CardContainer>
	);
}

{/* 
    <Logo src={isDarkMode ? logoImageDark : logoImage} />
*/}