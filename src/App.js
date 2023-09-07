import {useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Section from './components/Section';

function App() {
    const [dark, setDark] = useState(false);

    const handleClick = () => {
        setDark(!dark);
    }
    return (
        <div className={`container ${dark ? 'dark-theme':''} `} >
            <button className="theme-switch-btn" id="theme-switch" onClick={handleClick}>{dark ? "Dark":'Light'}</button>
            <Banner isDarkTheme={dark}/>
            <Section isDarkTheme={dark}/>

        </div>
    );
}

export default App;