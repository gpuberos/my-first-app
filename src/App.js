import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Business from "./components/Business";
import Prestation from "./components/Prestation";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/business" element={<Business/>} />
				<Route path="/service" element={<Prestation/>} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
	);
}

export default App;
