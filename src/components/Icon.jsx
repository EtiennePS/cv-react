import React, { useState } from "react";
import PropTypes from 'prop-types';

function Icon({iconName, title=null}) {
        return <i className={"fa fa-fw " + iconName} title={title}></i>
}

Icon.propTypes = {
    iconName : PropTypes.string,
    title: PropTypes.string
}

export default Icon;