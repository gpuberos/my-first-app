import { useState } from "react";
import Mysterio from "./Mysterio";
import Vision from "./Vision";

const Hoc = () => {

    const [mysterioHits, setMysterioHits] = useState(0)
    const [visionHits, setVisionHits] = useState(0)
    // const [hits, setHits] = useState(0)

    const countHits = (params) => {
        console.log(params);
        if (params === 'mysterio') {
            setMysterioHits(mysterioHits + 1)
        } else if(params === 'vision') {
            setVisionHits(visionHits + 1)
        }
    }

    return (
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 my-3 d-flex justify-content-center">
                    <Mysterio countHits={countHits} mysterioHits={mysterioHits} />
                    <Vision countHits={countHits} visionHits={visionHits} />
                </div>
            </div>
        </div>
    );
};

export default Hoc;