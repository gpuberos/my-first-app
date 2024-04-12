import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Business from "./components/Business";
import Service from "./components/Service";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/business" element={<Business/>} />
				<Route path="/service" element={<Service/>} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
	);
}

export default App;
