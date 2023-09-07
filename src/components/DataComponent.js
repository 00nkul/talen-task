import React from 'react'
import './DataComponent.css';

export default function DataComponent({ dataType, dataValue }) {
    return (
        <>
            {dataType === 'progress' && <Progress dataValue={dataValue} />}
            {dataType === 'number' && <Number dataValue={dataValue} />}
            {dataType === 'text' && <Text dataValue={dataValue} />}
            {dataType === 'tags' && <Tags dataValue={dataValue} />}
        </>
    )
}

function Progress({ dataValue }) {
    return (
        <div className="progress">
            <div className="progress__bar" style={{ width: `${dataValue}%` }}></div>
            <div className="progress__value">{dataValue}%</div>
        </div>
    )
}

function Number({ dataValue }) {
    return (
        <div className="number">
            <div className="number__value">{dataValue}</div>
        </div>
    )
}

function Text({ dataValue }) {
    return (
        <div className="text">
            <div className="text__value">{dataValue}</div>
        </div>
    )
}

function Tags({ dataValue }) {
    return (
        <div className="tags">
            {console.log(dataValue)}
            {dataValue.map((tag, index) => (
                <div key={index} className="tags__tag">{tag}</div>
            ))}
        </div>
    )
}