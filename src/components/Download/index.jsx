import {Container, DownloadP} from "./style";

import wgmw from "../../images/wgm+windows.png";

export default function Download() {
	return (
		<Container>
			<h1>Arquivo de Download</h1>
			<p>
				Recomendamos que configure o Windows Guardian Monitor, para que
				cubra as principais necessidades de segurança. No entanto, ajustes
				manuais podem ser feitos para atender a requisitos específicos.
			</p>
			<p>
				As atualizações do Windows Guardian Monitor são lançadas
				regularmente e acompanhadas de notificações detalhadas para manter
				os usuários informados.
			</p>
			<div>
				<h3>Instalação</h3>
				<span></span>
				<p>Proteja seu sistema agora com o Windows Guardian Monitor, clique para baixar.</p>
			</div>
			<DownloadP>
				<a target="_blank" href="https://www.google.com">
					<div>
						<img src={wgmw} />
						<ul>
							<h3>Instalador</h3>
							<li>- Para Windows</li>
							<li>- Versão Completa</li>
							<li>- Configurável</li>
							<li>- v1.0</li>
						</ul>
					</div>
					<span>Baixe agora</span>
				</a>
			</DownloadP>
		</Container>
	);
}
