import React, { useState } from "react";
import PropTypes from 'prop-types';

function GenericItem({id, icon, text, specializedBeforeIcon=null, specializedAfterIcon=null, specializedAfterText=null,}) {
    return <div className="genericItem">
        {specializedBeforeIcon}
        {icon}
        {specializedAfterIcon}
        <span className="genericItemtext">{text}</span>
        {specializedAfterText}
    </div>
}

GenericItem.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    id: PropTypes.number,
    specializedBeforeIcon: PropTypes.element,
    specializedAfterIcon: PropTypes.element,
    specializedAfterText: PropTypes.element
}

export default GenericItem;