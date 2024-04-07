import './Hero.css'
import Link from '../Links/Link'
import fire from '../../img/fire.gif'


const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero-titles">
					<h1>
						D3v.pRo
						<img className='fire1' src={fire} alt="" />
					</h1>
					<h2 className='center'>
						Creative full-stack development
					</h2>
					
				</div>
				<div className="hero-wrapper">
					<p>
						I'm a <span>full-stack developer</span> who loves crafting comprehensive digital solutions. <br /><br /> Let's build something amazing together!
					</p>
					<div className="hero-links">
						<Link href="#" text="Contact me" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
