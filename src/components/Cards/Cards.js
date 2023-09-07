import React, { useEffect, useState } from 'react'
import './Card.css';
import DataComponent from '../DataComponent';
export default function Cards({ cards, isDarkTheme }) {
    const [displayCards, setDisplayCards] = useState([]);

    useEffect(() => {
        setDisplayCards(cards.slice(0, 3));
    }, [cards]);

    const handleClick = () => {
        setDisplayCards(cards);
    }

    return (
        <>
            <button onClick={handleClick} className="c_card-btn">See All</button>
            <div className="card-container">
                {
                    displayCards.map((card, index) => (
                        <div key={index} className={`c_card ${isDarkTheme && 'dark-theme-shadow'}`}>
                            <div className="c_card__header">
                                <h3>{card.card_title}</h3>
                            </div>
                            <div className="c_card__body">
                                {card.data && <DataComponent dataType={card.data_type} dataValue={card.data_value} />}
                                {card.link && <a href={card.redirect}>{card.link_name}</a>}
                                {card.note && <div className='c_card_note'>{card.note}</div>}
                                {card.button && <button className='c_card-btn'>{card.button_name}</button>}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}