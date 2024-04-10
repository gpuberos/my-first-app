# My First App

## On créer un nouveau projet React

```shell
npx create-react-app my-first-app
npm install react-router-dom
```

On créer les dossiers suivants :

src\components
src\assets
|__ src\assets\images
|__ src\assets\styles

src\App.js
```js
function App() {
	return (
		<div className="App">

		</div>
	);
}

export default App;

```

Pour ajouter une image :
```js
import bunny from "./assets/images/bunny.webp";

function App() {
	return (
		<div className="App">
			<img src={bunny}/>
		</div>
	);
}

export default App;
```

On import App.css :
```js
import bunny from "./assets/images/bunny.webp";
import './App.css';

function App() {
	return (
		<div className="App">
			<img src={bunny} className="App-logo" alt="bunny" width="416" height="480"/>
		</div>
	);
}

export default App;
```
## Création d'un routeur

Source :
- https://reactrouter.com/fr/main/start/tutorial#adding-a-router

On wrap `App` dans `Router`.

src\index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

src\App.js
```js
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			
		</div>
	);
}

export default App;
```

On met le chemin et l'element
```js
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home/>} />
			</Routes>
		</main>
	);
}

export default App;
```

On créer : 
- `src\components\Home\index.js`
- `src\components\Contact\index.js`

On tape `rsc` dans src\components\Home\index.js
```js
import React from 'react';

const index = () => {
    return (
        <div>
            
        </div>
    );
};

export default index;
```

Le répertoire doit avoir une lettre majuscule car il représente le composant.

Puis on importe les répertoires.

src\App.js
```js
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
	);
}

export default App;
```
On crée : 

- src\components\Wrapper\index.js
- src\components\Wrapper\Header.js
- src\components\Wrapper\Footer.js

On supprime import react qui n'est plus nécessaire depuis la version 18 de React.

src\components\Wrapper\Header.js
```js
const Header = () => {
    return (
        <div>
            
        </div>
    );
};

export default Header;
```