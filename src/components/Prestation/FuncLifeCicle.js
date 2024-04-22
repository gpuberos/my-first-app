import { useEffect, useRef, useState } from "react";

const FuncLifeCicle = () => {

    const [name, setName] = useState('');

    useEffect(() => {
        console.log('name : ', name);
    }, [name])

    const refName = useRef();

    const handleChanged = () => {
        setName(refName.current.value);

    }

    return (
        <div>
            <h2>{name}</h2>
            <input
                ref={refName}
                onChange={handleChanged}
                type="text"
                name="name"
            />
        </div>
    );
};

export default FuncLifeCicle;