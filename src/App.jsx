import { useState } from 'react';


//Components///
import Header from '../Componets/Header.jsx';
import GameBox from '../Componets/GameBox.jsx';

import './App.css';

function App() {
  
	const [count, setCount] = useState(0);

	return (
		<div>
		<Header count={count}/>
    <GameBox setCount={setCount}/>
		</div>
	);
}

export default App;
