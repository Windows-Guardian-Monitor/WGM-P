import {CardContainer, ImageOne, MiniContent, TextContent, TitleContent} from "./style";
import star from "../../../../images/Star/star.png";
import handshake from "../../../../images/Star/handshake.png";
import heart from "../../../../images/Star/heart.png";

export default function CardContent({title, content, text, img}) {
    let contentImage = img

    if (contentImage === "star") {
        contentImage = star
    } else if (contentImage === "handshake") {
        contentImage = handshake
    } else if (contentImage === "heart") {
        contentImage = heart
    }

	return (
		<CardContainer image={img}>
			<TitleContent>{title}</TitleContent>
			<MiniContent>{content}</MiniContent>
			<TextContent>{text}</TextContent>
            <ImageOne image={img} src={contentImage} />
		</CardContainer>
	);
}
