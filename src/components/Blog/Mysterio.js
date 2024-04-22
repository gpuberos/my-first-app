import MysterioPict from "../../assets/images/mysterio.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const Mysterio = ({ countHits, mysterioHits }) => {
    return (
        <div className="d-flex flex-column" style={{ width: "512px" }}>
            <div className="text-center">
                <img src={MysterioPict} alt="Mysterio" style={{ height: "512px" }} />
                <button onClick={countHits('mysterio')} className="btn btn-success">Mysterio Attack</button>
                <div class="mt-2 d-flex justify-content-around">
                    <span className="badge text-bg-warning">
                        <FontAwesomeIcon icon={faHandFist} /> {mysterioHits}
                    </span>
                    <span className="badge text-bg-success">
                        <FontAwesomeIcon icon={faGratipay} /> 100%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Mysterio;