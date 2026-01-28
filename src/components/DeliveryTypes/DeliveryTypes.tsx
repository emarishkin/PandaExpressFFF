import type { FC } from "react";
import './DeliveryTypes.css';
import auto from '../../assets/images/auto.png';
import sea from '../../assets/images/sea.png';
import train from '../../assets/images/train.png';
import circleBg from '../../assets/images/circleBg.png'; 

export const DeliveryTypes: FC = () => {
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

    return (
        <section className="delivery-types-section">
            <div className="delivery-types-container">
                <h2 className="delivery-title"><span>ВИДЫ</span> ДОСТАВОК</h2>
                
                <div className="delivery-grid">
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
                 
                <div>
                    <p className="title2">Мультимодальные:</p>
                </div>
                             
                <div className="delivery-grid">
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

            </div>
        </section>
    );
};