import {Carrossel, IconCarrossel} from "./style";
import Slider from "react-slick";
import icone1 from "../../../../images/logo.png";

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
				<Slider {...settings} swipeToSlide={true} style={{gap: "0"}}>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
					<IconCarrossel href="">
						<img src={icone1} />
						<span>Analise</span>
					</IconCarrossel>
				</Slider>
			</div>
		</Carrossel>
	);
}
