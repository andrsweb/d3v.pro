import './About.css'
import Tabs from '../Tabs/Tabs'

const About = () => {
	return (
		<section className='about'>
			<div className="container">
				<h1 className='white'>
					Full-Stack Prowess
				</h1>
				<div className="about-wrapper">
					<p className='white'>
						I have accumulated unparalleled expertise in both front-end and back-end technologies. Elevate your website's capabilities and functionality with my comprehensive full-stack development services, all under one roof. From seamless user experiences to robust back-end architecture, we provide tailored solutions that empower your online presence to thrive in today's competitive digital landscape. Let me unleash the full potential of your digital platform and drive unprecedented growth for your business.
					</p>
					<div className="about-exp">
						<div>
							experience
						</div>
						<span>8</span>
						<div>
							years
						</div>
					</div>
				</div>
				<Tabs />
			</div>
		</section>
	)
}

export default About