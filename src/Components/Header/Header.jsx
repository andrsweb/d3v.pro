import './Header.css'
import menuImg from '../../img/menu.svg'
import MenuButton from '../Buttons/MenuButton'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="/" className="header-logo">
                        d3v.pro
                    </a>
                    <nav className="header-nav">
                    <ul>
                        <li>
                            <a href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Projects
                            </a>
                        </li>
                        <li>
                            <MenuButton src={menuImg} />
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header