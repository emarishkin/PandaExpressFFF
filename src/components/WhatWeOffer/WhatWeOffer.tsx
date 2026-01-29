import type { FC } from "react";
import { useState, useEffect } from "react";
import './WhatWeOffer.css';
import VectorL from '../../assets/images/VectorL.png';
import VectorR from '../../assets/images/VectorR.png';
import discountImg from '../../assets/images/discountImg.png';
import boxes from '../../assets/images/boxes.png';
import handshake from '../../assets/images/handshake.png';

export const WhatWeOffer: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    const offers = [
        {
            icon: discountImg,
            title: "Расчет цены в день подачи заявки",
            description: <><span>Мы полностью берём на себя</span> оплату поставок в Китае, таможенное оформление и сертификацию товаров.</>
        },
        {
            icon: boxes,
            title: "Оптовые объемы",
            description: <><span>Работаем с крупными партиями товаров</span> — поможем обеспечить ваш бизнес необходимыми объёмами продукции.</>
        },
        {
            icon: handshake,
            title: "Работа с поставщиком",
            description: <><span>Организуем доставку</span> от указанных вами контрагентов.</>
        },
        {
            icon: discountImg,
            title: "Поиск товара",
            description: <>Найдем <span>надёжных производителей</span> под ваши требования.</>
        },
        {
            icon: boxes,
            title: "Документация",
            description: <>Подготовим <span>все бумаги</span> для <span>таможенного оформления.</span></>
        },
        {
            icon: handshake,
            title: "Контроль сроков",
            description: <>Отслеживаем груз на <span>каждом этапе.</span></>
        }
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
    };

    const getCardWidth = () => {
        if (window.innerWidth <= 375) return 280;
        if (window.innerWidth <= 480) return 320;
        return 353;
    };

    const getGap = () => {
        if (window.innerWidth <= 375) return 12;
        if (window.innerWidth <= 480) return 15;
        return 20;
    };

    const getTransformValue = () => {
        if (isMobile) {
            const cardWidth = getCardWidth();
            const gap = getGap();
            return `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        } else {
            return `translateX(-${currentIndex * 703}px)`;
        }
    };

    return (
        <>
            <section className="what-we-offer-section">
                <div className="what-we-offer-header">
                    <h2 className="section-title"><span>ЧТО МЫ</span> ПРЕДЛАГАЕМ?</h2>
                </div>

                <div className="offers-carousel-container">
                    <div className="offers-carousel-wrapper">
                        <div 
                            className="offers-carousel" 
                            style={{ transform: getTransformValue() }}
                        >
                            {offers.map((offer, index) => (
                                <div key={index} className="offer-card">
                                    <img src={offer.icon} alt="Иконка" className="icon-image" />
                                    <h3 className="offer-title">{offer.title}</h3>
                                    <p className="offer-description">{offer.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="navigation-buttons">
                <button className="nav-button prev-button" onClick={prevSlide}>
                    <img src={VectorL} alt="Предыдущий" />
                </button>
                <button className="nav-button next-button" onClick={nextSlide}>
                    <img src={VectorR} alt="Следующий" />
                </button>
            </div>
        </>
    );
};