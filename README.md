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

Ajout de liens

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

Sources :
- https://docs.fontawesome.com/web/use-with/react/
- https://docs.fontawesome.com/web/use-with/react/add-icons


### Ajout d'un footer avec les liens des réseaux sociaux et newletters :

#### Header
```js
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <img src={logo} alt="logo" style={{height:"60px"}} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/business"}>Notre Entreprise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/service"}>Nos Prestations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/blog"}>L'Actualité</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contact"}>Nous Contacter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
```

#### Footer
```js
import { Link } from "react-router-dom";
import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGem, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
return (
    <footer className="text-center text-lg-start bg-light text-muted mt-3">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
                <span>Suivez-nous sur les réseaux sociaux :</span>
            </div>
            <div className="d-flex justify-content-between col-3 col-sm-4 col-lg-2 col-xl-1">
                <Link to={"https://www.facebook.com/dsi.mediterranee"} className="text-reset">
                    <FontAwesomeIcon className="fs-3" icon={faFacebook}/>
                </Link>
                <Link to={"https://twitter.com/DsiMediterranee"} className="text-reset">
                    <FontAwesomeIcon className="fs-3" icon={faTwitter}/>
                </Link>
                <Link to={"https://fr.linkedin.com/company/dsi-m%C3%A9diterran%C3%A9e-entreprise-adapt%C3%A9e-et-solidaire"} className="text-reset">
                    <FontAwesomeIcon className="fs-3" icon={faLinkedin}/>
                </Link>
            </div>
        </section>
        <section className="d-none d-lg-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <form className="col-12">
                <div className="row d-flex justify-content-between">
                    <div className="col-auto  d-flex align-items-center">
                        <p className="mb-0">Inscrivez-vous à notre newsletter</p>
                    </div>
                    <div className="col-md-5 col-12">
                        <div className="form-floating mt-2">
                            <input type="email" id="floatingInput" placeholder="name@example.com" className="form-control" />
                            <label className="form-label" htmlFor="floatingInput">Adresse mail</label>
                        </div>
                        {/* <EmailInput /> */}
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <button type="submit" className="btn btn btn-outline-success">
                            S'abonner
                        </button>
                    </div>
                </div>
            </form>
        </section>

        <section>
            <div className="d-flex justify-content-center text-center text-lg-start mt-5 col-12">
                <div className="row col-12">
                    <div className="col-7 col-lg-3 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">
                            <FontAwesomeIcon icon={faGem}/> Simplon Paca
                        </h6>
                        <p>Notre entreprise</p>
                    </div>

                    <div className="col-5 col-lg-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Nos Produits</h6>
                        <p>
                            <Link href="#!" className="text-reset">Angular</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-reset">React</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-reset">Vue</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-reset">Laravel</Link>
                        </p>
                    </div>
                
                    <div className="col-5 col-lg-2 mx-auto mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Liens utiles</h6>
                        <p>
                            <Link href="#!" className="text-reset">Pricing</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-reset">Settings</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-reset">Orders</Link>
                        </p>
                        <p>
                            <Link href="#!" className="text-reset">Help</Link>
                        </p>
                    </div>
                    
                    <div className="col-7 col-lg-2 mx-auto mb-md-0 mb-4">
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <address>
                            <Link href="https://www.google.fr/maps/place/" className="text-reset link-underline link-underline-opacity-0"><FontAwesomeIcon icon={faHome}/> 80, Route des Lucioles<br/> 13013 Marseille,<br/> Provence-Alpes-Côte d’Azur, FR</Link>
                        </address>
                        <address>
                            <Link href="mailto:accueil@exemple.com" className="text-reset link-underline link-underline-opacity-0"><FontAwesomeIcon icon={faEnvelope}/> accueil@exemple.com</Link>
                        </address>
                        <address>
                            <Link href="tel:+13115552368" className="text-reset link-underline link-underline-opacity-0"><FontAwesomeIcon icon={faPhone}/> 06 79 79 79 79</Link>
                        </address>
                    </div>
                </div>
            </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
            © {new Date().getFullYear()} Copyright: &nbsp;
            <Link className="text-reset fw-bold" href="https://www.exemple.com/">exemple.com</Link>
        </div>
    </footer>
    );
};

export default Footer;
```

### Creation de nouvelles routes

On crée de nouvelles routes pour Blog, Business et Prestation.

src\App.js
```js
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
```

Ensuite on crée chacun des composants qu'on associe à la route ex: Blog

> [!TIP]
> Avec Visual Studio Code au lieu de créer un simple répertoire, cliquez sur nouveau fichier depuis l'explorateur de Visual Studio Code et saisissez `Blog/index.js` cela va créer le répertoire (Component) `Blog` et le fichier `index.js`.

Dans le fichier `index.js` saisissez le snippet `rsc` puis valider avec entrée pour crée le code du composant.

src\components\Blog\index.js
```js
import Wrapper from "../Wrapper";

const index = () => {
    return (
        <Wrapper>
            <h1 className="h3 text-primary">L'Actualité</h1>
        </Wrapper>
    );
};

export default index;
```

Puis on ajoute les liens dans la navbar du Header

src\components\Wrapper\Header.js
```js
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>
                    <img src={logo} alt="logo" style={{height:"60px"}} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to={"/business"}>Notre Entreprise</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/service"}>Nos Prestations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/blog"}>L'Actualité</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contact"}>Nous Contacter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
```

### Création d'un composant Equipe

Dans le composant `Business`, on veut un composant `Equipe` et qu'on appelle autant de fois qu'il est nécessaire le composant `Personnage`.
Le composant `Equipe` à un `State` qui prend en paramètre une liste de personnages et avec ça on va mapper pour appeler le composant `Personnage` autant de fois que nécessaire.

Le composant `Personnage` contient :
- Image
- Nom : Luffy
- Equipage : Chapeau de Paille

**Avec `props`**

src\components\Business\Personnage.js
```js
const Personnage = (props) => {
    {/*
    const nom = props.nom
    const img = props.img
    const equipe = props.equipe
    */}

    {/* En une ligne : */}
    const {nom, img, equipe} = props
    
    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={"Avis de recherche de " + nom} />
            <div className="card-body">
                <p className="card-title">Nom : {nom}</p>
                <p className="card-text">Equipage : {equipe}</p>
            </div>
        </div>

    );
};
```

**Avec le destructuring :** C'est celle qu'on utilisera car beaucoup plus courte à écrire.

src\components\Business\Personnage.js
```js
const Personnage = ({nom, img, equipe}) => {
    return (

        <div className="card" style={{ width: "18rem"}}>
            <img src={img} className="card-img-top" alt={"Avis de recherche de " + nom} />
            <div className="card-body">
                <p className="card-title">Nom : {nom}</p>
                <p className="card-text">Equipage : {equipe}</p>
            </div>
        </div>

    );
};

export default Personnage;
```

On teste mais l'image ne s'affiche pas, quand on fait un console log ça nous retourne un objet pour l'image

src\components\Business\Equipe.js
```js
import { useState } from "react";
import chopper from "../../assets/images/chopper.jpg";
import Personnage from "./Personnage";

const Equipe = () => {

    const [perso, setPerso] = useState([
        {nom: "Chopper", img: {chopper}, equipe: "Chapeau de paille"},
        {nom: "Monkey D Luffy", img: "", equipe: "Chapeau de paille"},
        {nom: "Nami", img: "", equipe: "Chapeau de paille"},
        {nom: "Nico Robin", img: "", equipe: "Chapeau de paille"},
        {nom: "Sanji", img: "", equipe: "Chapeau de paille"},
        {nom: "God Usop", img: "", equipe: "Chapeau de paille"},
        {nom: "Roronoa Zoro", img: "", equipe: "Chapeau de paille"}
    ])

    return (
        <div>
            <h2>Notre équipage :</h2>
            {/* <Personnage perso={perso[0]} /> */}
            <Personnage nom= {perso[0].nom} img={perso[0].img} equipe={perso[0].equipe} />

            {/*<div className="card" style={{ width: "18rem" }}>
                <img src={perso[0].img} className="card-img-top" alt={"Avis de recherche de " + perso[0].nom} />
                <div className="card-body">
                    <p className="card-title">Nom : {perso[0].nom}</p>
                    <p className="card-text">Equipage : {perso[0].equipe}</p>
                </div>
            </div>*/}
        </div>
    );
};

export default Equipe;
```

Dans le premier exemple, on a écrit `img: {chopper}`. Cela crée un objet avec une propriété chopper qui contient l'image, au lieu d'assigner directement l'image à la propriété `img`.

Donc on doit écrire `img: chopper` pour assigner directement l'image à la propriété `img`.

src\components\Business\Equipe.js
```js
import { useState } from "react";
import chopper from "../../assets/images/chopper.jpg";
import luffy from "../../assets/images/luffy.jpg";
import nami from "../../assets/images/nami.jpg";
import nico from "../../assets/images/nico.jpg";
import sanji from "../../assets/images/sanji.jpg";
import usopp from "../../assets/images/usopp.jpg";
import zoro from "../../assets/images/zoro.jpg";
import Personnage from "./Personnage";

const Equipe = () => {

    const [perso, setPerso] = useState([
        {nom: "Chopper", img: chopper, equipe: "Chapeau de paille"},
        {nom: "Monkey D Luffy", img: luffy, equipe: "Chapeau de paille"},
        {nom: "Nami", img: nami, equipe: "Chapeau de paille"},
        {nom: "Nico Robin", img: nico, equipe: "Chapeau de paille"},
        {nom: "Sanji", img: sanji, equipe: "Chapeau de paille"},
        {nom: "God Usopp", img: usopp, equipe: "Chapeau de paille"},
        {nom: "Roronoa Zoro", img: zoro, equipe: "Chapeau de paille"}
    ])

    return (
        <div>
            <h2>Notre équipage :</h2>
            <Personnage nom= {perso[0].nom} img={perso[0].img} equipe={perso[0].equipe} />
        </div>
    );
};

export default Equipe;
```

On souhaite créer un composant `Personnage` pour chaque objet du tableau `perso`.

- `perso.map((el, index) => ...)` : Pour chaque élément `el` (qui représente un objet dans le tableau `perso`) et son `index` (qui représente la position de l’élément dans le tableau), exécutez la fonction fléchée suivante.
- `<Personnage key={index} nom={el.nom} img={el.img} equipe={el.equipe} />` : Pour chaque objet dans le tableau `perso`, créez un composant `Personnage`. Les props `nom`, `img`, et `equipe` sont définies par les propriétés correspondantes de l’objet `el`. La prop `key` est définie par l’`index` de l’objet dans le tableau.
- `key={index}`: En React, chaque élément créé par une fonction `map()` doit avoir une prop `key` unique. C’est important pour que React puisse identifier correctement chaque élément lors de la mise à jour ou du rendu de la liste.

```js
import { useState } from "react";
import chopper from "../../assets/images/chopper.jpg";
import luffy from "../../assets/images/luffy.jpg";
import nami from "../../assets/images/nami.jpg";
import nico from "../../assets/images/nico.jpg";
import sanji from "../../assets/images/sanji.jpg";
import usopp from "../../assets/images/usopp.jpg";
import zoro from "../../assets/images/zoro.jpg";
import Personnage from "./Personnage";

const Equipe = () => {

    const [perso, setPerso] = useState([
        {nom: "Chopper", img: chopper, equipe: "Chapeau de paille"},
        {nom: "Monkey D Luffy", img: luffy, equipe: "Chapeau de paille"},
        {nom: "Nami", img: nami, equipe: "Chapeau de paille"},
        {nom: "Nico Robin", img: nico, equipe: "Chapeau de paille"},
        {nom: "Sanji", img: sanji, equipe: "Chapeau de paille"},
        {nom: "God Usopp", img: usopp, equipe: "Chapeau de paille"},
        {nom: "Roronoa Zoro", img: zoro, equipe: "Chapeau de paille"}
    ])

    return (
        <section className="container">
            <h2>Notre équipage :</h2>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between gap-2">
                {perso.map((el, index) => <Personnage key={index} nom={el.nom} img={el.img} equipe={el.equipe} />)}
            </div>
        </section>
    );
};

export default Equipe;
```

## Lifecycle (Cycle de vie)

![Lifecycle](./docs/images/react-hook-lifecycle.webp)

### Composant de type class

Un composant de type class la seule méthode obligatoire est la méthode render()
Dans la méthode render on ne va jamais changer le state

La méthode render va exécuter son propre constructeur.
La méthode render va exécuter son propre rendu.

Le `this` c'est le contexte veut dire qu'on est à l'intérieur de la class.

Etapes :
1. Mounting
2. Update
3. Unmount

src\components\Prestation\Lifecycle.js
```js
import { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Soso'
        }
    }

    render() {
        return (
            <div><MonComponent /></div>
        )
    }
}

export default Lifecycle;
```
Source :
- https://fr.legacy.reactjs.org/docs/react-component.html#render


On importe Lifecycle dans l'index

src\components\Prestation\index.js
```js
import Wrapper from "../Wrapper";
import Lifecycle from "./Lifecycle";

const index = () => {
    return (
        <Wrapper>
            <Lifecycle />
        </Wrapper>
    );
};

export default index;
```

**Etape 1 Mounting :**

src\components\Prestation\Lifecycle.js
```js
import { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Soso',
            step: 1
        }
        log
    }

    render() {
        return (
            <div>
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
            </div>
        )
    }
}

export default Lifecycle;

```

On console log pour savoir ou on se trouve dans notre code (contructeur, render ou return)

```js
import { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Soso',
            step: 1
        }
        console.log(`Etape ${this.state.step} : je suis dans le constructeur`);
    }
    
    render() {
        console.log(`Etape ${this.state.step} : je suis dans le render`);
        return (
            <div>
                {console.log(`Etape ${this.state.step} : je dans le return`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
            </div>
        )
    }
}

export default Lifecycle;
```

On va vérifier le `componentDidMount`
Ne s'execute qu'au moment du montage du composant

src\components\Prestation\Lifecycle.js
```js
import { Component } from 'react';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Soso',
            step: 1
        }
        console.log(`Etape ${this.state.step} : je suis dans le constructeur`);
    }
    
    componentDidMount() {
        console.log(`Etape ${this.state.step} : je suis dans la phase de montage`)
    }

    render() {
        console.log(`Etape ${this.state.step} : je suis dans le render`);
        return (
            <div>
                {console.log(`Etape ${this.state.step} : je dans le return`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
            </div>
        )
    }
}

export default Lifecycle;
```