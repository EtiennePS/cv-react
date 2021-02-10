import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import GenericItem from "./GenericItem";

function HistoryItem({id, icon, text, beginDate, endDate, defaultClassName="historyItem", specializedAfterText}) {
    function formatDate(d) {
        const to2Number = (i) => i < 10 ? "0" + i : i;
        return to2Number(d.getDate())  + "/" + to2Number(d.getMonth()+1) + "/" + d.getFullYear();
    }

    const begin = useMemo(() => formatDate(beginDate), [beginDate]);
    const end = useMemo(() => formatDate(endDate), [endDate]);

    return <GenericItem id={id} icon={icon == null ? "fa-calendar" : icon} text={text} defaultClassName={defaultClassName} specializedAfterText={specializedAfterText} specializedAfterIcon={
            <span className="historyItemDate">{begin} - {end}</span>
        } />
}

HistoryItem.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    id: PropTypes.number,
    beginDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    defaultClassName: PropTypes.string,
    specializedAfterText: PropTypes.element
}

export default HistoryItem;