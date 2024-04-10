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