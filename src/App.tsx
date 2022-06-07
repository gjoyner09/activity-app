import "./App.css";
import Inputs from "./components/Inputs";
import Output from "./components/Output";
import React, { useState } from "react";

function App() {
	const [activity, setActivity] = useState(undefined);
	function changeActivity(newActivity: any) {
		setActivity(newActivity);
	}

	return (
		<div className="bg-sky-100">
			<Inputs changeActivity={changeActivity} />
			<Output activity={activity} />
		</div>
	);
}

export default App;
