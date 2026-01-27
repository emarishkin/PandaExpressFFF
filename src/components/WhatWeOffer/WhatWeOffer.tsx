import type { FC } from "react";
import { useState } from "react";
import './WhatWeOffer.css';
import VectorL from '../../assets/images/VectorL.png';
import VectorR from '../../assets/images/VectorR.png';
import discountImg from '../../assets/images/discountImg.png';
import boxes from '../../assets/images/boxes.png';
import handshake from '../../assets/images/handshake.png';


export const WhatWeOffer: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const offers = [
        {
            icon: discountImg,
            title: "Расчет цены в день подачи заявки",
            description: <p><span>Мы полностью берём на себя</span> оплату поставок в Китае, таможенное оформление и сертификацию товаров.</p>
        },
        {
            icon: boxes,
            title: "Оптовые объемы",
            description: <p><span>Работаем с крупными партиями товаров</span> — поможем обеспечить ваш бизнес необходимыми объёмами продукции.</p>
        },
        {
            icon: handshake,
            title: "Работа с поставщиком",
            description: <p><span>Организуем доставку</span> от указанных вами контрагентов.</p>
        },
        {
            icon: discountImg,
            title: "Поиск товара",
            description: <p>Найдем<span> надёжных производителей</span> под ваши требования.</p>
        },
        {
            icon: boxes,
            title: "Документация",
            description: <p>Подготовим<span> все бумаги</span> для<span>таможенного оформления.</span></p>
        },
        {
            icon: handshake,
            title: "Контроль сроков",
            description: <p>Отслеживаем груз на<span> каждом этапе.</span></p>
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % offers.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + offers.length) % offers.length);
    };

    return (
    <>
        <section className="what-we-offer-section">
            <div className="what-we-offer-header">
                <h2 className="section-title"><span>ЧТО МЫ</span> ПРЕДЛАГАЕМ</h2>
            </div>

            <div className="offers-carousel-container">
                <div className="offers-carousel-wrapper">
                    <div 
                        className="offers-carousel" 
                        style={{ transform: `translateX(-${currentIndex * 683}px)` }}
                    >
                        {offers.map((offer, index) => (
                            <div key={index} className="offer-card">
                                <div className="offer-icon"><img src={offer.icon} alt="Иконка" className="icon-image" /></div>
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