import type { FC } from "react";
import './WhyWhite.css'

export const WhyWhite:FC = () => {
    return(
        <section className="whyWhite-section">
            <div className="whyWhite-container">
                <h1 className="whyWhite-title"><span>ПОЧЕМУ</span> БЕЛАЯ ДОСТАВКА?</h1>
                <ul className="whyWhite-list">
                    <li className="whyWhite-item">Белая доставка из Китая подразумевает <span>легальный ввоз товара</span> с оформлением <span>таможенной декларации и полной уплатой предусмотренных платежей</span> (включая таможенную пошлину и НДС), что гарантирует <span>правомерность оборота продукции на территории РФ.</span></li>
                    <li className="whyWhite-item"><span>Отсутствие</span> рисков конфискации</li>
                    <li className="whyWhite-item"><span>Прозрачность</span> расчётов</li>
                </ul>
            </div>
        </section>
    )
}