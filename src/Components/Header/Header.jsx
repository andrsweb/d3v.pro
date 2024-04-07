import { useState,useEffect } from 'react'
import './Header.css'
import MenuButton from '../Buttons/MenuButton'
import up from '../../img/up.png'
import menu from '../../img/menu.svg'

const Header = () => {
	const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
		<header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="header-wrapper">
					<nav className="header-nav">
						<ul>
							<li>
								<MenuButton text="EN"/>
							</li>
							<li>
								<MenuButton text="UP"/>
							</li>
							<li>
								<MenuButton text="MENU"/>
							</li>
						</ul>
					</nav>
                </div>
            </div>
			
        </header>
    )
}

export default Header