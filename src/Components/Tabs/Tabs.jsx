import { useState } from 'react'
import './Tabs.css'
import front from '../../img/fr.jpg'
import back from '../../img/bc.jpg'
import full from '../../img/fs.jpg'
import ecom from '../../img/ecom.jpg'
import web from '../../img/webapp.jpg'

const Tabs = () => {
	const [activeTab, setActiveTab] = useState(1)

    const handleTabClick = (tabId) => {
        setActiveTab(tabId)
    }

	return (
		<div className='tabs'>
			<div className="tabs-wrapper">
				<div className="tabs-buttons">
					<button className={`button tab-button ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>
							Web Application Development
					</button>
					<button className={`button tab-button ${activeTab === 2 ? 'active' : ''}`} onClick={() => handleTabClick(2)}>
						eCommerce Store Development
					</button>
					<button className={`button tab-button ${activeTab === 3 ? 'active' : ''}`} onClick={() => handleTabClick(3)}>
						Custom Full-Stack Development
					</button>
					<button className={`button tab-button ${activeTab === 4 ? 'active' : ''}`} onClick={() => handleTabClick(4)}>
						Custom Front-End Development
					</button>
					<button className={`button tab-button ${activeTab === 5 ? 'active' : ''}`} onClick={() => handleTabClick(5)}>
						Custom Back-End Development
					</button>
				</div>
				<div className="tabs-contents">
					<div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
						<p>
							Full stack development is the end-to-end development of applications. It includes both the front end and back end development of web apps. The front end is usually accessed by an app visitor, and the back end forms the core of the application where all the business logic is applied. Whether you need a MERN or MEAN Full Stack web application, we can provide a precise solution for your needs to streamline your business operations with an online experience your users will love.
						</p>
						<div className="tab-content-img">
							<img src={web} alt="" />
							<div className="tab-content-hidden">
								<div className='view'>
									Watch example ⬈
								</div>
							</div>
						</div>
					</div>
					<div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
						<p>
							Our Full Stack developers work with eCommerce clients of all shapes and sizes and know how to master the power of MEAN/MERN to create an online store that is highly-functioning and loved by shoppers. We build a robust and secure online marketplace with our eCommerce Development services to ensure better performance, scalability and sales. Our developers love what they do and will go out of their way to understand your business requirements, your brand and your customers.
						</p>
						<div className="tab-content-img">
							<img src={ecom} alt="" />
							<div className="tab-content-hidden">
								<div className='view'>
									Watch example ⬈
								</div>
							</div>
						</div>
					</div>
					<div className={`tab-content ${activeTab === 3 ? 'active' : ''}`}>
						<p>
							With our Full Stack Development services, we seamlessly integrate frontend and backend technologies to create a cohesive and highly-functional online store that resonates with shoppers. From crafting captivating user interfaces to implementing powerful backend functionalities, we ensure every aspect of your eCommerce platform is optimized for success.
						</p>
						<div className="tab-content-img">
							<img src={full} alt="" />
							<div className="tab-content-hidden">
								<div className='view'>
									Watch example ⬈
								</div>
							</div>
						</div>
					</div>
					<div className={`tab-content ${activeTab === 4 ? 'active' : ''}`}>
						<p>
							Our Frontend developers specialize in crafting captivating user experiences for eCommerce clients of varying scopes and scales. Proficient in harnessing the capabilities of modern frontend technologies such as React.js and Angular.js, we empower your online store with seamless functionality and aesthetics that resonate with shoppers.
						</p>
						<div className="tab-content-img">
							<img src={front} alt="" />
							<div className="tab-content-hidden">
								<div className='view'>
									Watch example ⬈
								</div>
							</div>
						</div>
					</div>
					<div className={`tab-content ${activeTab === 5 ? 'active' : ''}`}>
						<p>
							Our Full Stack developers work with eCommerce clients of all shapes and sizes and know how to master the power of MEAN/MERN to create an online store that is highly-functioning and loved by shoppers. We build a robust and secure online marketplace with our eCommerce Development services to ensure better performance, scalability and sales. Our developers love what they do and will go out of their way to understand your business requirements, your brand and your customers.
						</p>
						<div className="tab-content-img">
							<img src={back} alt="" />
							<div className="tab-content-hidden">
								<div className='view'>
									Watch example ⬈
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Tabs