import './Buttons.css'

const MenuButton = ({src}) => {
	return (
		<button className="button menu-button">
			<img src={src} alt="Menu button" />
		</button>
	)
}

export default MenuButton