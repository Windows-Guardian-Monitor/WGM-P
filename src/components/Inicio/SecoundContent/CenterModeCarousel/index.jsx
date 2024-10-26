import {Carrossel, IconCarrossel} from "./style";
import Slider from "react-slick";
import analise from "../../../../images/Carroussel/Analise.png";
import regra from "../../../../images/Carroussel/Regras.png";
import documento from "../../../../images/Carroussel/Documento.png";
import graph from "../../../../images/Carroussel/Graph.png";
import cadeado from "../../../../images/Carroussel/Cadeado.png";
import monitoramento from "../../../../images/Carroussel/Monitoramento.png";
import feedback from "../../../../images/Carroussel/Feedback.png";
import alerta from "../../../../images/Carroussel/Alerta.png";

export default function CenterModeCarousel() {
	const settings = {
		arrows: false,
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
				}
			}
		]
	};
	return (
		<Carrossel>
			<div className="slider-container">
				<Slider {...settings} swipeToSlide={true} style={{}}>
					<IconCarrossel href="">
						<img src={analise} />
						<span>Análise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={regra} />
						<span>Criação de Regras</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={documento} />
						<span>Relatórios</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={graph} />
						<span>Gráficos</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={cadeado} />
						<span>Bloqueios de Aplicações</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={monitoramento} />
						<span>Monitoramento</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={feedback} />
						<span>Feedback e Melhoria Contínua</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={alerta} />
						<span>Alertas</span>
					</IconCarrossel>
				</Slider>
			</div>
		</Carrossel>
	);
}
