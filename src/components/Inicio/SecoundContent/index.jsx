import {Link} from "react-router-dom";
import CenterModeCarousel from "./CenterModeCarousel";
import {SecondContent, TextContent, VejaContent} from "./style";

export default function SecoundContent() {
	return (
		<SecondContent>
			<TextContent>
				<h2>Itens q vai ter no programa</h2>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Consequatur corrupti neque praesentium ut dolores deserunt omnis.
					Corrupti consequuntur, eveniet neque eius in officiis illum
					consectetur fugit. Facere, minus quod. Quos?
				</p>

				<Link to="/Download">
					<VejaContent>
						<span>Veja algo</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="13px"
							viewBox="0 -960 960 960"
							width="13px"
							fill="#1171FF"
						>
							<path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
						</svg>
					</VejaContent>
				</Link>
			</TextContent>
			<CenterModeCarousel />
		</SecondContent>
	);
}
