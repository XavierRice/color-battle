import { useState } from 'react';

import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<header>
				<h1>Color Battle</h1>
			</header>
		</div>
	);
}

export default App;
