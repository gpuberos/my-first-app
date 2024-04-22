import VisionPict from "../../assets/images/vision.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";

const Vision = ({countHits, visionHits}) => {
    return (
        <div className="d-flex flex-column" style={{ width: "512px" }}>
            <div className="text-center">
                <img src={VisionPict} alt="Vision" style={{ height: "512px" }} />
                <button onClick={countHits('vision')} lassName="btn btn-success">Vision Attack</button>
                <div class="mt-2 d-flex justify-content-around">
                    <span className="badge text-bg-warning">
                        <FontAwesomeIcon icon={faHandFist} /> {visionHits}
                    </span>
                    <span className="badge text-bg-success">
                        <FontAwesomeIcon icon={faGratipay} /> 100%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Vision;