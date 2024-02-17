import React, { useState } from "react";
import './styles.css';

//Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ImageCarousel = ({data}) => {

    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    }

    return(
        <div className="carousel">
            <IoIosArrowBack onClick={prevSlide} className="arrow --arrow-left"/>
            {data.map((item, index) => {
                console.log(item.src);
                return( 
                    <img 
                        src={item.src}
                        alt={item.alt}
                        key={index}
                        className={slide === index ? "slide" : "slide --slide-hidden"}
                    />
                );
            })}
            <IoIosArrowForward onClick={nextSlide} className="arrow --arrow-right"/>
            <span className="indicators">
                {data.map((_, index) => {
                    return(
                        <button
                            key={index}
                            className={
                                slide === index ? "indicator" : "indicator --indicator-inactive"
                            }
                            onClick={() => setSlide(index)}
                        ></button>
                    )
                })}
            </span>
        </div>
    )
}

export default ImageCarousel;