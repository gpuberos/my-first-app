import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/contact" element={<Contact/>} />
			</Routes>
		</main>
	);
}

export default App;
