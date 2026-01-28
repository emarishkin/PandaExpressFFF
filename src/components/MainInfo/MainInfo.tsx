import type { FC } from "react";
import AirBus from '../../assets/images/AirBus.png'
import LogoPangaW from '../../assets/images/LogoPangaW.png'
import checkbox from '../../assets/images/checkbox.png'
import count1 from '../../assets/images/1.png'
import count2 from '../../assets/images/2.png'
import count3 from '../../assets/images/3.png'
import '../MainInfo/MainInfo.css'

export const MainInfo:FC = () => {
    return (
    <> 
        <section className="mainInfo-section">
            <div className="airbusImage">
                <img src={AirBus} alt="картинка самолета" />
            </div>

            <div className="bg-country">
                <div className="mainInfo-container">
                    <div className="logoPanda">
                        <img src={LogoPangaW} alt="Логотип панды" />
                    </div>

                    <div className="info-text">
                        <h1 className="info-text-title">
                            <span>Белая доставка оптовых партий:</span> от поиска товара до таможенного оформления
                        </h1>
                        <p className="info-text-description">
                            Возьмём на себя все этапы — вам останется только получить товар
                        </p>
                        <div className="main-click-button">
                            <button className="main-button">
                                <img src={checkbox} alt="галочка" />
                                Получить консультацию
                            </button>
                            <p className="click-button-description">
                                Расчет цены в день подачи заявки (от 50 кг)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="foot-block">
            <h3 className="foot-block-title">наши гарантии</h3>
            <div className="foot-block-description">
                {/* Старая структура для десктопа */}
                <p>
                    <span>Скорость</span><br />обработки заявки
                </p>
                <p>
                    <span>Индивидуальный</span>подход<br />и <span>минимизация</span> расходов
                </p>
                <p>
                    <span>Прозрачность</span><br />цены
                </p>
                
                {/* Новая структура для мобилок */}
                <div className="guarantee-item">
                    <img className="guarantee-number" src={count1} alt="1" />
                    <p>
                        <span>Скорость</span><br />обработки заявки
                    </p>
                </div>
                <div className="guarantee-item">
                    <img className="guarantee-number" src={count2} alt="2" />
                    <p>
                        <span>Индивидуальный</span>подход<br />и <span>минимизация</span> расходов
                    </p>
                </div>
                <div className="guarantee-item">
                    <img className="guarantee-number" src={count3} alt="3" />
                    <p>
                        <span>Прозрачность</span><br />цены
                    </p> 
                </div>
            </div>
            
            {/* Цифры для десктопа (абсолютное позиционирование) */}
            <img className="count1" src={count1} alt="1" />
            <img className="count2" src={count2} alt="2" />
            <img className="count3" src={count3} alt="3" />
        </div>
    </>
    )
}