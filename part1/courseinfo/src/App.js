import Header from "./components/header";
import Content from "./components/content";
import Total from "./components/total";

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{ name: "Fundamentals of React", exercises: 10 },
		{ name: "Using props to pass data", exercises: 7 },
		{ name: "State of a component", exercises: 14 },
	];

	return (
		<div>
			<Header title={course} />
			<Content parts={parts} />
			<Total parts={parts} />
		</div>
	);
};

export default App;
