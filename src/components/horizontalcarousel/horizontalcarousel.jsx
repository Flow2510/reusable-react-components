import { motion } from "motion/react";
import "./horizontalcarousel.scss";
import { useState } from "react";

export default function VerticalCarousel() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

    const items = [
        '/public/images/flou-bleu.jpg',
        '/public/images/la-night.jpg',
        '/public/images/flou-gray.jpg',
        '/public/images/la-night2.jpg',
        '/public/images/flou-violet.jpg'        
    ]

    const [scrollDirection, setScrollDirection] = useState()
    const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 scroll infini
    const handleWheel = (e) => {
        if (e.deltaY < 0) {
            setScrollDirection("up")
            setActiveIndex((prev) => (prev + 1) % items.length);
        } else {
            setScrollDirection("down")
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    const toRightAnimation = {
        initial: { x: "-100%" },
        animate: { x: "0%" },
        transition: { duration: 0.4}
    };

    const toLeftAnimation = {
        initial: { x: "100%" },
        animate: { x: "0%" },
        transition: { duration: 0.4}
    };

    const animation = scrollDirection === "up" ? toLeftAnimation : toRightAnimation;
    const slots = [0, 1, 2, 3, 4];

    return (
        <section className="horizontal-carousel">
            {isDesktop ?
                <div className="horizontal-carousel__wrapper">
                    <div className="horizontal-carousel__content">
                        <h2 className="horizontal-carousel__content-title">
                            <span>Lorem ipsum</span>
                            <span>Dolor sit amet</span>
                        </h2>
                        <p className="horizontal-carousel__content-text">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                            <span>Fugit deleniti unde nam, error sunt odio, consectetur cupiditate exercitationem.</span>
                        </p>
                    </div>
                    <div className="horizontal-carousel__gallery" onWheel={handleWheel}>
                        {slots.map((s, slotIndex) => {
                            const imageIndex =
                                (activeIndex + slotIndex) % items.length;

                            return (
                                <div
                                    key={s}
                                    className={`horizontal-carousel__item horizontal-carousel__item--${slotIndex + 1}`}
                                >
                                    <motion.img
                                        {...animation}
                                        key={items[imageIndex]}
                                        src={items[imageIndex]}
                                        alt=""
                                        className="horizontal-carousel__item-image"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            :
                <div className="horizontal-carousel__mobile">
                    
                </div>
            }
        </section>
    );
}