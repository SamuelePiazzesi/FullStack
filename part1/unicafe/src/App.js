import React, { useState } from "react";
import Statistics from "./components/statistics";
import Button from "./components/button";

const App = () => {
	const anecdotes = [
		"If it hurts, do it more often",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
	];

	const [selected, setSelected] = useState(0);

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const sum = good + neutral + bad;

	const calculateAverage = () => {
		return (good - bad) / sum;
	};

	const calculatePercentage = () => {
		return (good / sum) * 100;
	};

	const buttonsData = [
		{
			title: "Good",
			onClick: () => setGood((prevGood) => prevGood + 1),
		},
		{
			title: "Neutral",
			onClick: () => setNeutral((prevNeutral) => prevNeutral + 1),
		},
		{
			title: "Bad",
			onClick: () => setBad((prevBad) => prevBad + 1),
		},
	];

	const data = [
		{
			text: "Good",
			value: good,
		},
		{
			text: "Neutral",
			value: neutral,
		},
		{
			text: "Bad",
			value: bad,
		},
		{
			text: "Total",
			value: sum,
		},
		{
			text: "Average",
			value: calculateAverage(),
		},
		{
			text: "Percentage",
			value: `${calculatePercentage()} %`,
		},
	];

	return (
		<>
			<div>{anecdotes[selected]}</div>
			<button
				onClick={() =>
					setSelected(Math.floor(Math.random() * anecdotes.length))
				}
			>
				next andedoct
			</button>

			<h1>Give feedback</h1>

			<div>
				{buttonsData.map((buttonData, idx) => (
					<Button
						key={idx}
						title={buttonData.title}
						handleClick={buttonData.onClick}
					/>
				))}
			</div>

			<div>
				<Statistics data={sum > 0 ? data : undefined} />
			</div>
		</>
	);
};

export default App;
