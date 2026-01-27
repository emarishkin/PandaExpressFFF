import type { FC } from "react";
import checkboxWhite from '../../assets/images/checkboxWhite.png'
import znak from '../../assets/images/znak.png'
import './ButtonPanda.css'


export const ButtonPanda:FC = () => {
    return (
        <div className="button-container">
            <div className="znak-and-weigth">
                <img style={{width:21,height:21}} src={znak} alt="знак" />
                <p>Расчет цены в день подачи заявки (от 50 кг)</p>
            </div>
            <button className="button-panda">
                <img style={{width:16,height:16}} src={checkboxWhite} alt="белая галочка" />
                Получить консультацию
            </button>
        </div>
    )
}