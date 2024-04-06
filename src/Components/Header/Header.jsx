import { useState,useEffect } from 'react'
import './Header.css'
import menuImg from '../../img/menu.svg'
import home from '../../img/home.svg'
import up from '../../img/upwork.svg'
import theme from '../../img/dark.svg'
import usa from '../../img/usa.svg'
// import ua from '../../img/ua.svg'
import MenuButton from '../Buttons/MenuButton'

const Header = () => {
	const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 150
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
                    <a href="/" className="header-logo">
                        d3v.pro
						<span>|</span>
                    </a>
                </div>
            </div>
			<nav className="header-nav">
				<ul>
					<li className='hidden'>
						<MenuButton src={home} />
					</li>
					<li>
						<MenuButton src={usa} />
					</li>
					<li>
						<MenuButton src={theme} />
					</li>
					
					<li>
						<MenuButton src={up} />
					</li>
					<li>
						<MenuButton src={menuImg} />
					</li>
				</ul>
			</nav>
        </header>
    )
}

export default Header