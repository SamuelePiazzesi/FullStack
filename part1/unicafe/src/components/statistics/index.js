import React from "react";
import StatisticsLine from "./line";

const Statistics = ({ data }) => {
	return (
		<>
			<h1>Statistics</h1>

			{data !== undefined ? (
				<table>
					<tbody>
						{data.map((stat, idx) => (
							<StatisticsLine text={stat.text} value={stat.value} key={idx} />
						))}
					</tbody>
				</table>
			) : (
				<p>No feedback given</p>
			)}
		</>
	);
};

export default Statistics;
