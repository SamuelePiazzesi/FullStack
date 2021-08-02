import React, { useState } from "react";

const App = () => {
	const defaultAnecdotes = [
		{ copy: "If it hurts, do it more often", value: 0 },
		{
			copy: "Adding manpower to a late software project makes it later!",
			value: 0,
		},
		{
			copy: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
			value: 0,
		},
		{
			copy: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
			value: 0,
		},
		{ copy: "Premature optimization is the root of all evil.", value: 0 },
		{
			copy: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
			value: 0,
		},
		{
			copy: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
			value: 0,
		},
	];

	const [anecdotes, setAnedoctes] = useState(defaultAnecdotes);
	const [selected, setSelected] = useState(0);

	const vote = () => {
		let changedAnecdotes = [...anecdotes];

		changedAnecdotes[selected].value += 1;

		setAnedoctes(changedAnecdotes);
	};

	const getMostVotedAnecdote = () => {
		let sortedAnecdotes = [...anecdotes]
			.sort((a, b) => parseFloat(a.value) - parseFloat(b.value))
			.reverse();

		return sortedAnecdotes[0];
	};

	return (
		<>
			<div>
				<h1>Anecdotes of the day</h1>
				<p>{anecdotes[selected].copy}</p>
				<p>Has {anecdotes[selected].value} votes </p>
			</div>
			<button onClick={vote}>Vote </button>
			<button
				onClick={() =>
					setSelected(Math.floor(Math.random() * anecdotes.length))
				}
			>
				next anecdote
			</button>

			<div>
				<h1>Anecdotes with most votes</h1>
				<p>{getMostVotedAnecdote().copy}</p>
				<p>Has {getMostVotedAnecdote().value} votes </p>
			</div>
		</>
	);
};
export default App;
