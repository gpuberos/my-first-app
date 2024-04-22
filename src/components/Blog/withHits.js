import { useState } from "react";

const withHits = (PersonageComponent) => {
    return (props) => {
        const [hits, setHits] = useState(0);
        const [life, setLife] = useState(100)

        const countHits = () => {
            setHits(hits + 1);
        };

        const reduceLife = () => {
            setLife(life - 10)
        };

        // Nous passons la fonction countHits et l'état hits au composant enveloppé
        return <PersonageComponent countHits={countHits} hits={hits} life={life} reduceLife={reduceLife} {...props} />;
    };
};

export default withHits;