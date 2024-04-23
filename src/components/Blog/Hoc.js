// import { useState } from "react";
import Mysterio from "./Mysterio";
import Vision from "./Vision";

const Hoc = () => {

    // const [visionLife, setVisionLife] = useState(100)
    // const [mysterioLife, setMysterioLife] = useState(100)

    // const reduceLife = (param) => {
    //     if (param === "mysterio") {
    //         setVisionLife(visionLife - 10)
    //     } else if (param === "vision") {
    //         setMysterioLife(mysterioLife - 10)
    //     }
    // }
    
    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 my-3 d-flex justify-content-center">
                    <Mysterio name={'Mysterio'} />
                    <Vision name={'Vision'} />
                </div>
            </div>
        </div>
    );
};

export default Hoc;