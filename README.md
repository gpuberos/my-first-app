# My First App

Extension Chrome pour React :
- React Developer Tools : https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=fr

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
En utilisant le destructing on va afficher `children`

src\components\Wrapper\index.js
```js
import Header from "./Header";
import Footer from "./Footer";

const index = ({children}) => {
    return (
        <>
            <Header/>            
            {children}
            <Footer/>
        </>
    );
};

export default index;
```

```js
import Wrapper from "../Wrapper";

const index = () => {
    return (
        <Wrapper>
            <h1>Welcome to the homepage</h1>
        </Wrapper>
    );
};

export default index;
```

### Navigation

Ajout de liens :

Source :
- https://reactrouter.com/en/main/components/link

```js
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
```

On applique un style à la nav
```js
import { Link } from "react-router-dom";
import '../../assets/styles/header.css';

const Header = () => {
    return (
        <nav>
            <ul className="d-flex">
                <li className="nav-item"><Link to={"/"}>Home</Link></li>
                <li className="nav-item"><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Header;
```

src\assets\styles\header.css
```css
.d-flex {
    display: flex;
}

.nav-item {
    list-style: none;
    font-size: 1.25rem;
    margin-right: 1.25rem;
}

.nav-item a {
    color: rgb(0, 115, 255);
    text-decoration: none;
}
```

#### Import de bootstrap :

```shell
npm i bootstrap@5.3.3
```

src\index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

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

#### Import de Font Awesome

```shell
npm i --save @fortawesome/fontawesome-svg-core

npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

npm i --save @fortawesome/react-fontawesome@latest
```
Ou en une ligne de commande 
```shell
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome@latest

```

src\components\Wrapper\Header.js
```js
import { Link } from "react-router-dom";
import '../../assets/styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}><FontAwesomeIcon icon={faReact} /> My First App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to={"/"}><FontAwesomeIcon icon={faHome} /> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/contact"}><FontAwesomeIcon icon={faEnvelope} /> Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;


```

Source :
- https://docs.fontawesome.com/web/use-with/react/
- https://docs.fontawesome.com/web/use-with/react/add-icons