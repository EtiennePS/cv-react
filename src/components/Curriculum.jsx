import React, { useState } from "react";
import GenericList from "./GenericList";
import HistoryList from "./HistoryList";

function Curriculum() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [mainInfo, setMainInfo] = useState({firstname: "", lastname: "", title: "", urlPhoto: ""});
    const [educations, setEducations] = useState([{id: 1, icon:"♪", text:"BTS SIO Lycée privé Dijon", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}, 
                                                    {id: 2, icon:"♪", text:"Licence DAWIN IUT Bordeaux", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}]);
    const [experiences, setExperiences] = useState([{id: 1, icon:"♫", text:"Stage PHP Dijon", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}, 
                                                    {id: 2, icon:"♫", text:"Alternance Planning Medical PHP St Jean D'Illiac", beginDate: new Date(2020,5,1), endDate: new Date(2020,5,1)}]);
    const [contacts, setContacts] = useState([{id: 1, icon:"♪", text:"06 61 73 87 90"}, {id: 2, icon:"♫", text:"etienne.picherit@gmail.com"}]);
    const [knowledges, setKnowledges] = useState([{id: 1, icon:"♪", text:"Gérer des bases de données"}, {id: 2, icon:"♪", text:"Tests fonctionnels"}]);
    const [languages, setLanguages] = useState([{id: 1, icon:"♪", text:"ASP.NET, Xamarin"}, {id: 2, icon:"♪", text:"Vue.js, Angular, React"}]);
    const [hobbies, setHobbies] = useState([{id: 1, icon:"♫", text:"Elevage (chat,chevaux...)"}, {id: 2, icon:"♫", text:"Bricolage"}]);

    return <div className="curriculum">
        <GenericList list={contacts} title="Contacts" className="contacts"/>
        <HistoryList list={educations} title="Formations" className="educations"/>
        <HistoryList list={experiences} title="Expériences Professionnelles" className="experiences"/>
        <GenericList list={knowledges} title="Compétences" className="knowledges"/>
        <GenericList list={languages} title="Langages" className="languages"/>
        <GenericList list={hobbies} title="Loisirs" className="hobbies"/>
    </div>
}

export default Curriculum;