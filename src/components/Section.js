import React, { useEffect, useState } from 'react'
import './Section.css';
import data from '../data.json';
import Cards from './Cards/Cards';

export default function Section({ isDarkTheme }) {
    const [section, setSection] = useState("1");
    const sectinos = data.sectionArray;
    // const cards = data.cardArray;
    const [cards, setCards] = useState([]);


    useEffect(() => {
        const temp = data.cardArray.filter(card => card.parent_sec_no === parseInt(section));
        setCards(temp);
        console.log(temp);
    }, [section]);


    return (
        <>
            <div className="section">
                <div className="section__header">
                    <h3>Section</h3>
                    <select name="section" className={` ${isDarkTheme?"select-dark":''} `} onChange={(e) => setSection(e.target.value)}>
                        {sectinos.map((section, index) => (
                            <option key={index} value={section.sec_no}>{section.title}</option>
                        ))}
                    </select>
                </div>
                <div className="section__body">
                    <Cards cards={cards} isDarkTheme={isDarkTheme}/>
                </div>
            </div>
        </>
    )
}