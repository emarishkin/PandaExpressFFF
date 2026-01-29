import { type FC, useState, useEffect, useRef } from 'react';
import './Modal.css';
import Krestik from '../../assets/images/Krestik.svg'
import CheckIcon from '../../assets/images/checkmark.svg'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        social: 'telegram',
        callMe: true
    });

    const [sliderPosition, setSliderPosition] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let position = 0;
        if (formData.social === 'whatsapp') {
            position = 1;
        } else if (formData.social === 'vk') {
            position = 2;
        }
        
        if (toggleRef.current) {
            const toggleWidth = toggleRef.current.offsetWidth;
            const optionWidth = toggleWidth / 3;
            setSliderPosition(position * optionWidth);
        }
    }, [formData.social]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSocialChange = (social: string) => {
        setFormData(prev => ({
            ...prev,
            social
        }));
    };

    const handleCheckboxClick = () => {
        setFormData(prev => ({
            ...prev,
            callMe: !prev.callMe
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            console.log('Данные формы:', formData);
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert('Заявка успешно отправлена! С вами свяжутся в ближайшее время.');
            onClose();
            
            setFormData({
                name: '',
                phone: '',
                social: 'telegram',
                callMe: true
            });
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Произошла ошибка при отправке. Попробуйте еще раз.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}><img style={{width:22,height:22}} src={Krestik} alt="Крестик" /></button>
                
                <div className="modal-header">
                    <h2 className="modal-title">Получение консультации</h2>
                    <p className="modal-description">
                        Укажите необходимые данные.
                        После их заполнения наш менеджер свяжется с Вами в ближайшее время:
                    </p>
                </div>

                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-input"
                            placeholder="Имя"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            className="form-input"
                            placeholder="Номер телефона"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div className="social-group">
                        <label className="social-label">Выберите соц.сеть для связи:</label>
                        <div className="social-toggle" ref={toggleRef}>
                            <div 
                                className="social-slider" 
                                style={{ 
                                    transform: `translateX(${sliderPosition}px)`,
                                    transition: 'transform 0.3s ease'
                                }}
                            />
                            <div className="social-option">
                                <input
                                    type="radio"
                                    id="telegram"
                                    name="social"
                                    value="telegram"
                                    checked={formData.social === 'telegram'}
                                    onChange={(e) => handleSocialChange(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <label htmlFor="telegram">Телеграм</label>
                            </div>
                            <div className="social-option">
                                <input
                                    type="radio"
                                    id="whatsapp"
                                    name="social"
                                    value="whatsapp"
                                    checked={formData.social === 'whatsapp'}
                                    onChange={(e) => handleSocialChange(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <label htmlFor="whatsapp">WhatsApp</label>
                            </div>
                            <div className="social-option">
                                <input
                                    type="radio"
                                    id="vk"
                                    name="social"
                                    value="vk"
                                    checked={formData.social === 'vk'}
                                    onChange={(e) => handleSocialChange(e.target.value)}
                                    disabled={isSubmitting}
                                />
                                <label htmlFor="vk">ВКонтакте</label>
                            </div>
                        </div>
                    </div>

                    <div className="checkbox-group">
                        <div className="custom-checkbox">
                            <input
                                type="checkbox"
                                id="callMe"
                                name="callMe"
                                checked={formData.callMe}
                                onChange={handleInputChange}
                                disabled={isSubmitting}
                            />
                            <span className="checkmark">
                                <img src={CheckIcon} alt="галочка" />
                            </span>
                        </div>
                        <label htmlFor="callMe" onClick={handleCheckboxClick}>
                            Позвонить мне
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        className="modal-submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить'}
                    </button>
                </form>
            </div>
        </div>
    );
};