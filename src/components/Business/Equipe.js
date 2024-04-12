import { useState } from "react";
import chopper from "../../assets/images/chopper.jpg";
import luffy from "../../assets/images/luffy.jpg";
import nami from "../../assets/images/nami.jpg";
import nico from "../../assets/images/nico.jpg";
import sanji from "../../assets/images/sanji.jpg";
import usopp from "../../assets/images/usopp.jpg";
import zoro from "../../assets/images/zoro.jpg";
import Personnage from "./Personnage";

const Equipe = () => {

    const [perso, setPerso] = useState([
        {nom: "Chopper", img: chopper, equipe: "Chapeau de paille"},
        {nom: "Monkey D Luffy", img: luffy, equipe: "Chapeau de paille"},
        {nom: "Nami", img: nami, equipe: "Chapeau de paille"},
        {nom: "Nico Robin", img: nico, equipe: "Chapeau de paille"},
        {nom: "Sanji", img: sanji, equipe: "Chapeau de paille"},
        {nom: "God Usopp", img: usopp, equipe: "Chapeau de paille"},
        {nom: "Roronoa Zoro", img: zoro, equipe: "Chapeau de paille"}
    ])

    return (
        <section className="container">
            <h2>Notre équipage :</h2>
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between gap-2">
                {perso.map((el, index) => <Personnage key={index} nom={el.nom} img={el.img} equipe={el.equipe} />)}
            </div>
        </section>
    );
};

export default Equipe;