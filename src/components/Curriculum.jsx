import React, { useState, useEffect } from "react";
import MainInfo from "./MainInfo";
import GenericList from "./GenericList";
import HistoryList from "./HistoryList";
import LevelList from "./LevelList";
import Loading from "./Loading";
import "./Curriculum.css";
import userService from "../services/UserService";

function Curriculum() {
    //const [isAdmin, setIsAdmin] = useState(false);
    const [mainInfo, setMainInfo] = useState({});
    const [educations, setEducations] = useState([]);
    const [experiences, setExperiences] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [knowledges, setKnowledges] = useState([]);
    const [languages, setLanguages] = useState([])
    const [hobbies, setHobbies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        userService.getUser(
            1,
            (data) => {
                console.log(data);
                setMainInfo(data.mainInfo);
                setEducations(data.educations);
                setExperiences(data.experiences);
                setContacts(data.contacts);
                setKnowledges(data.knowledges);
                setLanguages(data.languages);
                setHobbies(data.hobbies);
            },
            () => alert("AAAAAHHHH!"),
            () => setIsLoading(false)
        );
    }, []);

    return <div className="curriculum">
        { isLoading ? <Loading/> : "" }
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="content margin-top" id="parentContainer" >
            <div className="row-padding">
                <div className="third">
                    <div className="white text-grey card-4">
                        <MainInfo firstName={mainInfo.firstname} lastName={mainInfo.lastname} urlPhoto={mainInfo.urlPhoto}/>
                        <div className="basic-container" id="bookmark">
                            <GenericList list={contacts} className="contacts"/>                       
                            <hr/>
                            <GenericList list={knowledges} title="Compétences" icon="fa-asterisk" className="knowledges"/>
                            <hr/>
                            <LevelList list={languages} title="Maîtrise Langages/Framework" className="languages" icon="fa-code"/>
                        </div>
                    </div>
                </div>
                <div className="twothird">
                    <div className="basic-container card white margin-bottom">
                        <HistoryList list={educations} title="Formations" icon="fa-certificate" className="educations"/>
                    </div>
                    <div className="basic-container card white margin-bottom">
                        <HistoryList list={experiences} title="Expériences Professionnelles" className="experiences" icon="fa-suitcase" />
                    </div>
                    <div className="basic-container card white margin-bottom">
                        <GenericList list={hobbies} title="Activités extra-scolaires / centres d'intérêts" icon="fa-angellist" className="hobbies"/>
                    </div>
                </div>
            </div>
        </div>
        <footer className="basic-container teal centralized margin-top">
            <p>Find me on social media.</p>
            <i className="fa fa-github hover-opacity"></i>
            <a href="https://fr.linkedin.com/in/jean-fran%C3%A7ois-picherit-steinbrucker-523a4116a" target="_blank"><i className="fa fa-linkedin hover-opacity"></i></a>
            <p>Powered by <a href="#" target="_blank">.css</a></p>
        </footer>
    </div>
}

export default Curriculum;