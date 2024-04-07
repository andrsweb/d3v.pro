import './Buttons.css'

const MenuButton = ({text}) => {
	return (
		<button className="button menu-button">
			<span>{text}</span>
		</button>
	)
}

export default MenuButton