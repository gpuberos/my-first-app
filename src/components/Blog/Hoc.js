import Mysterio from "./Mysterio";
import Vision from "./Vision";

const Hoc = () => {
    
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