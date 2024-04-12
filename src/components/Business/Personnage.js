const Personnage = ({ nom, img, equipe }) => {
    return (

        <div className="card" style={{ width: "18rem"}}>
            <img src={img} className="card-img-top" alt={"Avis de recherche de " + nom} />
            <div className="card-body">
                <p className="card-title">Nom : {nom}</p>
                <p className="card-text">Equipage : {equipe}</p>
            </div>
        </div>

    );
};

export default Personnage;