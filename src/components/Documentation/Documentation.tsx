import type { FC } from "react";
import './Documentation.css';
import tetradka from '../../assets/images/tetradka.png'

export const Documentation: FC = () => {
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

    return (
        <section className="documentation-section">
            <div className="documentation-container">
                <h2 className="documentation-title">ДОКУМЕНТАЦИЯ</h2>
                
                <div className="documents-grid">
                    {documents.map((doc, index) => (
                        <div key={index} className="document-card">
                            <img  style={{width:114,height:76,marginBottom:12}} src={tetradka} alt="тетрадка" />
                            <h3 className="document-title">{doc.title}</h3>
                            <p className="document-description">{doc.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};