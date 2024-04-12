import { Component } from 'react'

class ChildComponent extends Component {
    constructor(props) {
        super(props)
        console.log(`Etape 1 : je suis dans le Constructor enfant (4)`);
    }
    componentDidMount() {
        console.log(`Etape 1 : je suis dans le DidMount enfant (7)`);
    }
    render() {
        console.log(`Etape 1 : je suis dans le Render enfant (5)`);
        return (
            <div>
                {console.log(`Etape 1 : je suis dans le return React updates DOM enfant (6)`)}
                ChildComponent
            </div>

        )
    }
}

export default ChildComponent
