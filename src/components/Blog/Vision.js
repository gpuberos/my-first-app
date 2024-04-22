import VisionPict from "../../assets/images/vision.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import withHits from './withHits';

const Vision = ({ countHits, hits, life, name, reduceLife }) => {
    
    const handleClick = () => {
        reduceLife()
        countHits()
    }

    return (
        <div className="d-flex flex-column" style={{ width: "512px" }}>
            <div className="text-center">
                <img src={VisionPict} alt="Vision" style={{ height: "512px" }} />
                <button onClick={handleClick} className="btn btn-success">{name} Attack</button>
                <div class="mt-2 d-flex justify-content-around">
                    <span className="badge text-bg-warning">
                        <FontAwesomeIcon icon={faHandFist} /> {hits}
                    </span>
                    <span className="badge text-bg-success">
                        <FontAwesomeIcon icon={faGratipay} /> {life}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default withHits(Vision);