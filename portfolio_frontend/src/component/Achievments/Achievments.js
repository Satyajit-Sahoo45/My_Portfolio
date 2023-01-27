import React, { useState } from "react";
import './Achievments.css';
import sliderData from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Achievments = () => {

    const [current, setCurrent] = useState(0);
    const length = sliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <section className="achievment res_page" id="achievements">
            <div className="container">
                <div className='heading'>
                    <h1>My Achievments</h1>
                </div>
                <div className='container btn_shadow'>

                    <div className='slider p-9 m-6 mtop bottom'>
                        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                        {sliderData.map((slide, index) => {
                            return (
                                <>
                                    <div
                                        className={index === current ? 'slide active' : 'slide'}
                                        key={index}
                                    >
                                        {index === current && (
                                            <img src={slide.image} alt='travel image' className='image' />
                                        )}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievments;