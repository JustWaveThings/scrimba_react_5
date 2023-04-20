export default function Joke(props) {
	return (
		<div className="joke">
			<h3 className="setup">{props.setup}</h3>
			<h4 className="punchline">{props.punchline}</h4>
		</div>
	);
}
