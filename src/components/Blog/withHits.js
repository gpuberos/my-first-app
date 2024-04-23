import { createContext, useState } from "react";

const lifeContext = createContext()

const withHits = (PersonageComponent) => {

    return (props) => {
        const [hits, setHits] = useState(0);
        const [life, setLife] = useState({ Mysterio: 100, Vision: 100 });
        const [isDead, setIsDead] = useState(false);

        const attack = (name) => {
            if (!isDead) {
                setHits(prevHits => {
                    const newHits = prevHits + 1;
                    setLife(prevLife => {
                        const newLife = { ...prevLife };
                        if (newLife[name] - 10 <= 0) {
                            newLife[name] = 0;
                            setIsDead(true);
                        } else {
                            newLife[name] -= 10;
                        }
                        console.log(`Hits: ${newHits}`);
                        console.log(`Life: ${JSON.stringify(newLife)}`);
                        return newLife;
                    });
                    return newHits;
                });
            }
        };



        // const attack = (name) => {
        //     if (!isDead) {
        //         setHits(hits + 1);
        //         setLife(prevLife => {
        //             const newLife = { ...prevLife };
        //             if (newLife[name] - 10 <= 0) {
        //                 newLife[name] = 0;
        //                 setIsDead(true);
        //             } else {
        //                 newLife[name] -= 10;
        //             }   
        //             console.log(`Hits: ${hits + 1}`);
        //             console.log(`Life: ${JSON.stringify(newLife)}`);
        //             return newLife;
        //         });
        //     }
        // };

        return (<PersonageComponent
            hits={hits}
            life={life}
            attack={attack}
            isDead={isDead}
            {...props} />);
    };
};

export default withHits;