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
