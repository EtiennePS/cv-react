import React, { useState } from "react";
import PropTypes from 'prop-types';
import GenericList from "./GenericList";
import HistoryItem from "./HistoryItem";

function HistoryList({list, title="", className=""}) {
    
    return <GenericList list={list} title={title} className={className} defaultClassName={"historyList"} itemTemplate= {
        list.map(item => {
            return (<HistoryItem key={item.id} id={item.id} icon={item.icon} text={item.text} beginDate={item.beginDate} endDate={item.endDate}/>);
        })  
    }/>
}

HistoryList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf({
        icon: PropTypes.element,
        text: PropTypes.string,
        id: PropTypes.number
    })),
    title: PropTypes.string,
    className: PropTypes.string
};

export default HistoryList;