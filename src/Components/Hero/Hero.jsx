import './Hero.css'
import video from '../../video/intro.mp4'

const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero-video">
					<video playsInline autoPlay muted loop>
						<source src={video} type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
	)
}

export default Hero
