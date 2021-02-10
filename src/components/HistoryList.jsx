import React, { useState } from "react";
import PropTypes from 'prop-types';
import GenericList from "./GenericList";
import HistoryItem from "./HistoryItem";
import Icon from './Icon';

function HistoryList({list, title="", className="", icon="fa-certificate"}) {
    
    return <GenericList list={list} title={title} className={className} defaultClassName={"historyList"} icon={icon} itemTemplate= {
        list.map((item, index, list) => {
            const hr = index !== list.length - 1 ? <hr/> : "";
            const downloadIcon = 
                (item.url == null || item.title == null) ? "" : 
                <div>
                    <a href={item.url}>
                        <Icon iconName="fa-download" title={item.title}/>
                    </a>
                </div>
            ;

            return (
                <HistoryItem key={item.id} id={item.id} icon={item.icon} text={item.text} beginDate={item.beginDate} endDate={item.endDate} specializedAfterText={[downloadIcon, hr]}
                />
            );
        })  
    }/>
}

HistoryList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf({
        icon: PropTypes.element,
        text: PropTypes.string,
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string
    })),
    title: PropTypes.string,
    className: PropTypes.string
};

export default HistoryList;