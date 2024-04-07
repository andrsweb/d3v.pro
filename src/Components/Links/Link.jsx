import './Link.css'

const Link = ({href, text}) => {
	return (
		<a href={href} className="link" target='_blanc'>
			<span>{text}</span>
		</a>
	)
}

export default Link