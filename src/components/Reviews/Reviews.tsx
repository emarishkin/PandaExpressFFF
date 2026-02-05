import { useEffect, useState, type FC } from "react";
import VectorL from '../../assets/images/VectorL.svg'
import VectorR from '../../assets/images/VectorR.svg'
import avatar1 from '../../assets/images/avatar1.svg'
import avatar2 from '../../assets/images/avatar2.svg'
import avatar3 from '../../assets/images/avatar3.svg'
import avatar4 from '../../assets/images/avatar4.svg'
import starsReviews from '../../assets/images/starsReviews.svg'
import './Reviews.css'


export const Reviews:FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const reviews = [
        {
            icon: avatar1,
            title: "Алиса Пейнер",
            status:'Партнер',
            imgStars:starsReviews ,
            date:'21.12.2025',
            description:'Заказал электровелосипеды из Китая 29.03.2025. ТК Панда, из Москвы груз до Чебоксар с 2.04.25 по 6.04.25 доехал, привезли до меня 9.04.25. Коробки большие и тяжёлые в целости и сохранности доехали, спасибо водителю, а также сотрудникам компании. '
        },
        {
            icon: avatar2,
            title: "Екатерина Мизулина",
            status:'Партнер',
            imgStars:starsReviews ,
            date:'21.12.2025',
            description:'Заказал электровелосипеды из Китая 29.03.2025. ТК Панда, из Москвы груз до Чебоксар с 2.04.25 по 6.04.25 доехал, привезли до меня 9.04.25. Коробки большие и тяжёлые в целости и сохранности доехали, спасибо водителю, а также сотрудникам компании. '
        },
        {
            icon: avatar3,
            title: "Дима Ремизов",
            status:'Партнер',
            imgStars:starsReviews ,
            date:'21.12.2025',
            description: 'Заказал электровелосипеды из Китая 29.03.2025. ТК Панда, из Москвы груз до Чебоксар с 2.04.25 по 6.04.25 доехал, привезли до меня 9.04.25. Коробки большие и тяжёлые в целости и сохранности доехали, спасибо водителю, а также сотрудникам компании. '
        },
        {
            icon:avatar4 ,
            title: "Надежда Иванова",
            status:'Партнер',
            imgStars:starsReviews ,
            date:'21.12.2025',
            description:'Заказал электровелосипеды из Китая 29.03.2025. ТК Панда, из Москвы груз до Чебоксар с 2.04.25 по 6.04.25 доехал, привезли до меня 9.04.25. Коробки большие и тяжёлые в целости и сохранности доехали, спасибо водителю, а также сотрудникам компании. '
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
        setCurrentIndex((prev) => prev >= reviews.length - 1 ? 0 : prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev <= 0 ? reviews.length - 1 : prev - 1);
    };

    const getTransformValue = () => {
        if (isMobile) {
            const cardWidth = window.innerWidth - 40; 
            const gap = 20; 
            return `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        } else {
            const cardWidth = 739;
            const gap = 40;
            return `translateX(-${currentIndex * (cardWidth + gap)}px)`;
        }
    };
     
    return (
        <>
          <section className="reviews-section">
                <div className="reviews-container">
                <div className="reviews-header">
                    <h2 className="section-title"><span>ОТЗЫВЫ</span> ЗАКАЗЧИКОВ</h2>
                </div>

                <div className="reviews-carousel-container">
                    <div className="reviews-carousel-wrapper">
                        <div 
                            className="reviews-carousel" 
                            style={{ transform: getTransformValue() }}
                        >
                            {reviews.map((review, index) => (
                                <div key={index} className="review-card">
                                    <div className="review-card-header">
                                        <div>
                                            <img src={review.icon} alt="Иконка" className="icon-image-reviews" />
                                        </div>
                                        <div>
                                            <h3 className="review-title">{review.title}</h3>
                                            <p className="review-status">Статус: {review.status}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src={review.imgStars} alt="Звезды" className="icon-imageStars" />
                                        <p className="review-data">{review.date}</p>
                                    </div>
                                    <div>
                                        <p className="review-description">{review.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
    )
}