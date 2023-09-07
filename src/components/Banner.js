import React, { useEffect, useState } from 'react';
import data from './../data.json';
import BannerCard from './Cards/BannerCard';
import './Banner.css';
export default function Banner({ isDarkTheme }) {

    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        // funcition to change banner every 5 seconds
        const interval = setInterval(() => {
            if (currentBannerIndex === data.bannerArray.length - 1) {
                setCurrentBannerIndex(0);
            } else {
                setCurrentBannerIndex(currentBannerIndex + 1);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currentBannerIndex]);

    return (
        <div className="banner-card-body">
            {
                data.bannerArray.map((item, index) => {
                    const isActive = index === currentBannerIndex;
                    return (
                        <div key={index}
                            className={isActive ? "banner-active" : "banner-inactive"}
                        >
                            <BannerCard data={item} isDarkTheme={isDarkTheme} />
                        </div>
                    )
                })
            }
        </div>
    )
}