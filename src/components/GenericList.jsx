import React, { useState } from "react";
import PropTypes from 'prop-types';
import GenericItem from "./GenericItem";

function GenericList({list, title="", className="", defaultClassName="genericList", 
                        itemTemplate=list.map(item => {return (<GenericItem key={item.id} id={item.id} icon={item.icon} text={item.text}/>);})}) {
    return <div className={defaultClassName + (className === "" ? "" : " " + className)}>
        {title === "" ? "" : <h1>{title}</h1>}
        {itemTemplate}
    </div>;
}

GenericList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.objectOf({
        icon: PropTypes.element,
        text: PropTypes.string,
        id: PropTypes.number
    })),
    title: PropTypes.string,
    className: PropTypes.string,
    defaultClassName: PropTypes.string,
    itemTemplate: PropTypes.element
};

export default GenericList;