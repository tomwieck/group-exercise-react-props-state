interface ChuckJokeProps {
	joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({joke}) => {

	return (
		<p>{joke}</p>
	)
}

export default ChuckJoke;