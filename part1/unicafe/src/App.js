import React, { useState } from "react";
import Statistics from "./components/statistics";
import Button from "./components/button";

const App = () => {
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
