import './Link.css'

const Link = ({href, src}) => {
	return (
		<a href={href} className="link" target='_blanc'>
			<img src={src} alt="" />
		</a>
	)
}

export default Link