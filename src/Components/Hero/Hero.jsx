import './Hero.css'
import Link from '../Links/Link'
import video from '../../video/intro.mp4'
import mac from '../../img/mac.png'
import li from '../../img/li.svg'
import x from '../../img/x.svg'
import git from '../../img/git.svg'
import wars from '../../img/wars.svg'
import off from '../../img/off.svg'


const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<h1>Creative full-stack developer</h1>
				<div className="hero-wrapper">
					<div className="hero-info">
						<p>
							🖐️Hi there! <br /> <br />
								I'm a <span>full-stack developer</span> who loves crafting comprehensive digital solutions. <br /><br /> Let's build something amazing together!
						</p>
						<div className="hero-links">
							<Link href="#" src={git} />
							<Link href="#" src={li} />
							<Link href="#" src={x} />
							<Link href="#" src={wars} />
						</div>
					</div>
					<div className="hero-video">
						<div className="hero-img">
							<img src={mac} alt="" />
							<button className='power'>
								<img className='' src={off} alt="" />
							</button>
							<video playsInline autoPlay muted loop>
								<source src={video} type="video/mp4" />
							</video>
						</div>
					</div>				
				</div>
			</div>
		</div>
	)
}

export default Hero
