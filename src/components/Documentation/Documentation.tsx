import type { FC } from "react";
import { useState, useEffect } from "react";
import './Documentation.css';
import tetradka from '../../assets/images/tetradka.png';
import VectorL from '../../assets/images/VectorL.png';
import VectorR from '../../assets/images/VectorR.png';

export const Documentation: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    
    const documents = [
        {
            title: "Отказное письмо",
            description: "Официальный документ, удостоверяющий отсутствие необходимости в обязательной сертификации или декларировании конкретного товара."
        },
        {
            title: "Честный знак",
            description: "Это электронный «паспорт» товара. Он позволяет отследить путь товара от завода до магазина и защищает рынок от подделок."
        },
        {
            title: "Сертификат",
            description: "Документ, удостоверяющий соответствие изделия требованиям государственных стандартов (ГОСТ) или технических условий (ТУ)."
        },
        {
            title: "Декларация соответствия",
            description: "Документ, подтверждающий изготовление изделия в соответствии с требованиями ГОСТ или ТУ. От сертификата она отличается перечнем охватываемых товарных групп и порядком оформления."
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
        setCurrentIndex((prev) => (prev + 1) % documents.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + documents.length) % documents.length);
    };

    const getTransformValue = () => {
    if (isMobile) {
        // Получаем актуальную ширину карточки и gap
        const cardWidth = document.querySelector('.document-card')?.clientWidth || 320;
        const gap = 20; // Должно совпадать с gap в CSS
        return `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }
    return 'translateX(0)';
    };

    return (
        <section className="documentation-section">
            <div className="documentation-container">
                <h2 className="documentation-title">ДОКУМЕНТАЦИЯ</h2>
                
                <div className="documents-grid">
                    {isMobile ? (
                        <div 
                            className="documents-carousel"
                            style={{ transform: getTransformValue() }}
                        >
                            {documents.map((doc, index) => (
                                <div key={index} className="document-card">
                                    <img src={tetradka} alt="тетрадка" />
                                    <h3 className="document-title">{doc.title}</h3>
                                    <p className="document-description">{doc.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            {documents.map((doc, index) => (
                                <div key={index} className="document-card">
                                    <img src={tetradka} alt="тетрадка" />
                                    <h3 className="document-title">{doc.title}</h3>
                                    <p className="document-description">{doc.description}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
                
                {isMobile && (
                    <div className="doc-navigation-buttons">
                        <button className="doc-nav-button" onClick={prevSlide}>
                            <img src={VectorL} alt="Предыдущий" />
                        </button>
                        <button className="doc-nav-button" onClick={nextSlide}>
                            <img src={VectorR} alt="Следующий" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};