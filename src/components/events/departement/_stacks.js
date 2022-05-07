export default function Stacks(props) {
	const { pers } = props;

	const checkStackStyle = stack => {
		switch (stack) {
			case 'PHP':
				return 'rgba(30, 143, 255, 0.466)';
			case 'Symfony':
				return 'rgba(20, 20, 20, 0.562)';
			case 'Laravel':
				return 'rgba(255, 102, 0, 0.555)';
			case 'MySQL':
				return 'rgba(195, 0, 255, 0.5)';
			case 'Flutter':
				return ' rgba(0, 162, 255, 0.5)';
			case 'Docker':
				return 'rgba(0, 225, 255, 0.637)';
			case 'AWS':
				return 'rgb(139, 127, 10)';
			case 'Javascript':
				return 'rgba(255, 217, 0, 0.548)';
			case 'NodeJS':
				return 'rgba(172, 255, 47, 0.616)';
			case 'MongoDB':
				return 'rgba(51, 168, 36, 0.685)';
			case 'React':
				return 'rgba(0, 162, 255, 0.712)';
			case 'Angular':
				return 'rgba(255, 68, 0, 0.568)';
			case 'Git':
				return 'rgba(255, 102, 0, 0.808)';
			default:
				return 'rgba(238, 238, 238, 0.247)'; // default style
		}
	};

	return (
		<p>
			{' '}
			<strong>stacks:</strong>{' '}
			{pers.stacks.map(stack => (
				<span
					className="stack-item"
					style={{ backgroundColor: checkStackStyle(stack) }}
				>
					{stack}
				</span>
			))}
		</p>
	);
}
