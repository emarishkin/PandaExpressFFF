import type { FC } from "react";
import { useState, useEffect } from "react";
import './DeliveryTypes.css';
import auto from '../../assets/images/auto.svg';
import sea from '../../assets/images/sea.svg';
import train from '../../assets/images/train.svg';
import circleBg from '../../assets/images/circleBg.svg'; 
import VectorL from '../../assets/images/VectorL.svg';
import VectorR from '../../assets/images/VectorR.svg';

export const DeliveryTypes: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexMulti, setCurrentIndexMulti] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [cardWidth, setCardWidth] = useState(320);
    const [gap, setGap] = useState(20);
    
    const deliveryTypes = [
        {
            id: 1,
            title: "Авто",
            icon: auto,
        },
        {
            id: 2,
            title: "Море",
            icon: sea,
        },
        {
            id: 3,
            title: "Ж/д",
            icon: train,
        },
    ];

    const deliveryTypesMulti = [
        {
            id: 1,
            title: "Ж/д+авто",
            icon1: auto,
            icon2: train,
        },
        {
            id: 2,
            title: "Море+ж/д",
            icon1: train,
            icon2: sea
        },
        {
            id: 3,
            title: "Море+авто",
            icon1: auto,
            icon2: sea
        },
    ];

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            
            if (mobile) {
                const screenWidth = window.innerWidth;
                let width, gapValue;
                
                if (screenWidth <= 375) {
                    width = screenWidth - 20; 
                    gapValue = 10;
                } else if (screenWidth <= 480) {
                    width = screenWidth - 40; 
                    gapValue = 20;
                } else {
                    width = screenWidth - 40; 
                    gapValue = 20;
                }
                
                setCardWidth(width);
                setGap(gapValue);
            }
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % deliveryTypes.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + deliveryTypes.length) % deliveryTypes.length);
    };

    const nextSlideMulti = () => {
        setCurrentIndexMulti((prev) => (prev + 1) % deliveryTypesMulti.length);
    };

    const prevSlideMulti = () => {
        setCurrentIndexMulti((prev) => (prev - 1 + deliveryTypesMulti.length) % deliveryTypesMulti.length);
    };

    const getTransformValue = () => {
        if (isMobile) {
            return `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        }
        return 'translateX(0)';
    };

    const getTransformValueMulti = () => {
        if (isMobile) {
            return `translateX(-${currentIndexMulti * (cardWidth + gap)}px)`;
        }
        return 'translateX(0)';
    };

    return (
        <section className="delivery-types-section">
            <div className="delivery-types-container">
                <h2 className="delivery-title"><span>ВИДЫ</span> ДОСТАВОК</h2>
                
                <div className="delivery-grid">
                    {isMobile ? (
                        <div 
                            className="delivery-carousel"
                            style={{ transform: getTransformValue() }}
                        >
                            {deliveryTypes.map((type) => (
                                <div key={type.id} className="delivery-card">
                                    <div className="circle-bg">
                                        <img src={circleBg} alt="фон" className="circle-image" />
                                    </div>
                                    
                                    <div className="transport-icon">
                                        <img src={type.icon} alt={type.title} />
                                    </div>
                                    
                                    <div className="delivery-content">
                                        <h3 className="delivery-type-title">{type.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {deliveryTypes.map((type) => (
                                <div key={type.id} className="delivery-card">
                                    <div className="circle-bg">
                                        <img src={circleBg} alt="фон" className="circle-image" />
                                    </div>
                                    
                                    <div className="transport-icon">
                                        <img src={type.icon} alt={type.title} />
                                    </div>
                                    
                                    <div className="delivery-content">
                                        <h3 className="delivery-type-title">{type.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                
                {isMobile && (
                    <div className="delivery-navigation-buttons">
                        <button className="delivery-nav-button" onClick={prevSlide}>
                            <img src={VectorL} alt="Предыдущий" />
                        </button>
                        <button className="delivery-nav-button" onClick={nextSlide}>
                            <img src={VectorR} alt="Следующий" />
                        </button>
                    </div>
                )}
                 
                <div>
                    <p className="title2">Мультимодальные:</p>
                </div>
                             
                <div className="delivery-grid">
                    {isMobile ? (
                        <div 
                            className="delivery-carousel-multi"
                            style={{ transform: getTransformValueMulti() }}
                        >
                            {deliveryTypesMulti.map((type) => (
                                <div key={type.id} className="delivery-card">
                                    <div className="circle-bg">
                                        <img src={circleBg} alt="фон" className="circle-image" />
                                    </div>
        
                                    <div className="transport-icon2">
                                        <img src={type.icon1} alt={type.title} />
                                    </div>

                                    <div className="transport-icon3">
                                        <img src={type.icon2} alt={type.title} />
                                    </div>
                                    
                                    <div className="delivery-content">
                                        <h3 className="delivery-type-title">{type.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {deliveryTypesMulti.map((type) => (
                                <div key={type.id} className="delivery-card">
                                    <div className="circle-bg">
                                        <img src={circleBg} alt="фон" className="circle-image" />
                                    </div>
        
                                    <div className="transport-icon2">
                                        <img src={type.icon1} alt={type.title} />
                                    </div>

                                    <div className="transport-icon3">
                                        <img src={type.icon2} alt={type.title} />
                                    </div>
                                    
                                    <div className="delivery-content">
                                        <h3 className="delivery-type-title">{type.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>

                {isMobile && (
                    <div className="delivery-navigation-buttons-multi">
                        <button className="delivery-nav-button" onClick={prevSlideMulti}>
                            <img src={VectorL} alt="Предыдущий" />
                        </button>
                        <button className="delivery-nav-button" onClick={nextSlideMulti}>
                            <img src={VectorR} alt="Следующий" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};