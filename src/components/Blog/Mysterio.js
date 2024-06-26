import MysterioPict from "../../assets/images/mysterio.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandFist, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import withHits from './withHits';

const Mysterio = ({ hits, life, name, attack, isDead }) => {

    const handleClick = () => {
        if (!isDead) {
            attack('Vision')
            
        }
    }

    return (
        <div className="d-flex flex-column" style={{ width: "512px" }}>
            <div className="text-center">
                <img src={MysterioPict} alt="Mysterio" style={{ height: "512px" }} />
                <button onClick={handleClick} className="btn btn-success">{name} Attack</button>
                <div className="mt-2 d-flex justify-content-around">
                    <span className="badge text-bg-warning">
                        <FontAwesomeIcon icon={faHandFist} /> {hits}
                    </span>
                    <span className={`badge ${isDead ? 'text-bg-danger' : 'text-bg-success'}`}>
                        <FontAwesomeIcon icon={isDead ? faSkullCrossbones : faGratipay} /> {isDead ? 'Dead' : `${life['Mysterio']}%`}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default withHits(Mysterio);