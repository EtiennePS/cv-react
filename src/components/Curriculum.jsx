import React, { useState } from "react";
import GenericList from "./GenericList";
import HistoryList from "./HistoryList";
import "./Curriculum.css";
import photo from '../images/avatar_hat.jpg';

function Curriculum() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [mainInfo, setMainInfo] = useState({firstname: "", lastname: "", title: "", urlPhoto: ""});

    const [educations, setEducations] = useState([
        {id: 1, text:"Mastère Expert Développement Web à Bordeaux Ynov Campus.", beginDate: new Date(2020,8,14), endDate: new Date(2020,5,1)}, 
        {id: 2, text:"LP Développement en applications web et innovation numérique à l'IUT de Bordeaux Montaigne.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1), url: "http://google.com", title: "google"},
        {id: 3, text:"Prépa Informatique (Bootcamp) Spécialisation 'Expert Développement Web' à Bordeaux Ynov Campus.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)},
        {id: 4,  text:"BTS Services Informatiques aux Organisations option Solution Application Logiciel et Métier.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)},
        {id: 5,  text:"Baccalauréat ES option Maths mention « assez-bien »", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}
    ]);
    
    const [experiences, setExperiences] = useState([
        {id: 1,  text:"Alternance à Planning Médicale situé à Saint-Jean-d'Illac. Maintenance, évolution et test d'un projet php, gérant et générant des planning pour le milieux médicale.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}, 
        {id: 2,  text:"Stage à Buisness Web Agence à Dijon de 7 semaine, Conception de solution applicative avec le Framework Laravel.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)},
        {id: 3,  text:"Stage aux Éditions Asyelle à Bergerac de 5 semaine. Gestion d'un serveur et rénovation d'une solution applicative en PHP.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)},
        {id: 4,  text:"Assistance et dépannage informatiques à 3E informatique situé à Bordeaux. Gestion de la clientèle, facturation clients.", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}
    ]);
    const [contacts, setContacts] = useState([
        {id: 1, icon:"fa-briefcase", text:"Étudiant Développeur"}, 
        {id: 2, icon:"fa-home", text:"Bordeaux"}, 
        {id: 3, icon:"fa-envelope", text:"jeanfrancois.picheritsteinbrucker@ynov.com"}, 
        {id: 4, icon:"fa-phone", text:"07 69 13 94 76"}
    ]);

    const [knowledges, setKnowledges] = useState([
        {id: 1, icon:"", text:"Développement et maintenace applicative (language ci-contre)."}, 
        {id: 2, icon:"", text:"Conception et adaptation d'une base de données."},
        {id: 3, icon:"", text:"Manipuler les données via SQL ou un Framework ORM."},
        {id: 4, icon:"", text:"Mise en place de test unitaires et fonctionnels."},
        {id: 5, icon:"", text:"Bon relationnel avec les clients et sens du contact."}
    ]);

    const [languages, setLanguages] = useState([
        {id: 1, icon:"", text:"HTML/CSS (BOOTSTRAP)"}, 
        {id: 2, icon:"", text:"PHP (Symphony, Doctrine, Laravel, Eloquent)"},
        {id: 3, icon:"", text:"JS/TS (Vue.JS, Angular, React, jQuerry)"},
        {id: 4, icon:"", text:"Java (JEE, Maven, Spring, Hibernate)"},
        {id: 5, icon:"", text:"SQL (MariaDB/MySQL)"}
    ]);

    const [hobbies, setHobbies] = useState([
        {id: 1, icon:"", text:"Montage vidéo, développement de projets personnels."}, 
        {id: 2, icon:"", text:"Découverte d'activités sportives variées, natation, équitation, bricolage, élevage (chevaux)."}
    ]);


    return <div className="curriculum">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className="content margin-top" id="parentContainer" >
                        <div className="row-padding">
                            <div className="third">
                                <div class="white text-grey card-4">
                                    
                                    <div className="display-container mainInfo">
                                        <img id="profile" src={photo} />
                                        <div className="display-bottomleft basic-container text-white">
                                            <h3 className="student-name">Jean-François <br/> Picherit-Steinbrucker</h3>
                                        </div>
                                    </div>

                                    <div class="basic-container" id="bookmark">
                                        <GenericList list={contacts} className="contacts"/>                       
                                        <hr/>
                                        <GenericList list={knowledges} title="Compétences" icon="fa-asterisk" className="knowledges"/>
                                        <hr/>
                                        <GenericList list={languages} title="Maîtrise Langages/Framework" className="languages" icon="fa-code"/>
                                    </div>
                                </div>
                            </div>
                            <div class="twothird">
                                <div class="basic-container card white margin-bottom">
                                    <HistoryList list={educations} title="Formations" icon="fa-certificate" className="educations"/>
                                </div>
                                <div class="basic-container card white margin-bottom">
                                    <HistoryList list={experiences} title="Expériences Professionnelles" className="experiences" icon="fa-suitcase" />
                                </div>
                                <div class="basic-container card white margin-bottom">
                                    <GenericList list={hobbies} title="Activités extra-scolaires / centres d'intérêts" icon="fa-angellist" className="hobbies"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="basic-container teal centralized margin-top">
                        <p>Find me on social media.</p>
                        <i class="fa fa-github hover-opacity"></i>
                        <a href="https://fr.linkedin.com/in/jean-fran%C3%A7ois-picherit-steinbrucker-523a4116a" target="_blank"><i class="fa fa-linkedin hover-opacity"></i></a>
                        <p>Powered by <a href="#" target="_blank">.css</a></p>
                    </footer>
                </div>

                
        

}

export default Curriculum;