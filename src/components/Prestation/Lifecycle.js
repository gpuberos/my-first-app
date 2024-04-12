import { Component } from 'react';
import ChildComponent from './ChildComponent';

class Lifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Soso',
            step: 1
        }
        console.log(`Etape ${this.state.step} : je suis dans le Constructor (1)`);

    }
    
    componentDidMount() {
        console.log(`Etape ${this.state.step} : je suis dans la phase de DidMount (8)`)
        this.setState({
            name: this.props.name,
            step: this.state.step + 1
        })
        console.log(`Etape ${this.state.step} : je suis dans le setState du DidMount`)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`Etape ${this.state.step} : je suis dans le DidUpdate`)
        console.log(prevState);
        console.log(this.state);
    }

    render() {
        console.log(`Etape ${this.state.step} : je suis dans le Render (2)`);
        return (
            <div>
                {console.log(`Etape ${this.state.step} : je suis dans le return React updates DOM (3)`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom : {this.state.name}</p>
                {/* <ChildComponent/> */}
            </div>
        )
    }
}

export default Lifecycle;
