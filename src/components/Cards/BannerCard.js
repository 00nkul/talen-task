import React from 'react';
import './BannerCard.css';

export default function BannerCard({ data , isDarkTheme}) {

    return (
        <>
            <div className={`card ${isDarkTheme?"dark-card":''}`}>
                <div className="card-body">
                    <h5 className="card-title">{data.text}</h5>
                    {
                        data.button ?
                            data.btn_typ === "redirect" ?
                                <a href={data.link}>
                                    <button className={`btn ${isDarkTheme?'btn-dark':'btn-light'}`}>{data.btn_name}</button>
                                </a>
                                :
                                <button className="btn btn-secondary">{data.btn_name}</button>
                            :
                            null
                    }
                </div>
            </div>
        </>
    )
}