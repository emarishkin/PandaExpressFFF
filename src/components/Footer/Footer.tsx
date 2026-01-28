import type { FC } from "react";
import LogoFooterF from '../../assets/images/LogoFooterF.png'
import Telegram from  '../../assets/images/Telegram.png'
import Vk from '../../assets/images/Vk.png'
import YouTube from '../../assets/images/YouTube.png'
import '../Footer/Footer.css'

export const Footer:FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo-socials">
                    <img style={{width:188,height:60}} src={LogoFooterF} alt="Лого подвала" />
                    <div className="socials-block">
                        <p>Наши соцсети:</p>
                        <div className="socials-links">
                            <a href="#"><img src={Telegram} alt="Телеграм" /></a>
                            <a href="#"><img src={Vk} alt="ВК" /></a>
                            <a href="#"><img src={YouTube} alt="Ютуб" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <a style={{width:330}} href="#"><p>PandaExpress 2025</p></a>
                    <a href="#"><p>Все права защищены</p></a>
                    <a href="#"><p>Политика конфиденциальности</p></a>
                </div>
                <div className="footer-last">
                    <a href="#"><p>© 2024 ООО "ПАНДАЭКСПРЕСС"<br />
                                   ОГРН: 1027739123456<br />
                                   ИНН: 7701123456<br />
                                   КПП: 770101001<br />
                                   Юридический адрес: 101000, г.<br /> Москва, ул. Примерная, д. 1, офис 10</p></a>
                    <a href="#"><p>+7 (495) 123-45-67</p></a>
                    <a href="#"><p>info@panda-express.ru</p></a>
                </div>
            </div>
        </footer>
    )
}