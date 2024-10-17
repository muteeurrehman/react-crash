import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [count, _setCount] = useState(0);

	const increment = () => {
		if (count >= 20) {
			return;
		}
		_setCount(count + 1);
	};
	const decrement = () => {
		if (count <= 0) {
			return;
		}
		_setCount(count - 1);
	};

	useEffect(() => {}, []);

	return (
		<>
			<h1>Counter App (0 - 20)</h1>
			<button onClick={increment}>+</button>
			<span style={{ width: "50" }}>
				<strong>{count}</strong>
			</span>

			<button onClick={decrement}>-</button>
		</>
	);
}

export default App;
