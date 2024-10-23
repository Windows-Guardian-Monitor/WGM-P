import {Link} from "react-router-dom";
import CenterModeCarousel from "./CenterModeCarousel";
import {SecondContent, TextContent, VejaContent} from "./style";

export default function SecoundContent() {
	return (
		<SecondContent>
			<TextContent>
				<h2>Recursos do Windows Guardian Monitor</h2>
				<p>
					O Windows Guardian Monitor oferece uma solução
					completa para monitorar e gerenciar o consumo de software em
					sistemas. Com ferramentas que rastreiam a utilização de
					programas, é possível identificar quais aplicativos estão sendo
					mais utilizados e em quais horários. Além disso, a funcionalidade
					de bloqueio permite restringir o acesso a aplicativos
					indesejados, promovendo um ambiente de trabalho mais produtivo.
					Essa abordagem ajuda organizações a otimizar recursos, aumentar a
					segurança e garantir que as diretrizes de uso de software sejam
					seguidas de maneira eficaz.
				</p>

				<Link to="/Download">
					<VejaContent>
						<span>Baixe agora</span>
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
