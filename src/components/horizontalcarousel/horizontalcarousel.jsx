import "./horizontalcarousel.scss";
import data from "../../data/data.json";

import { useState } from "react";
import { motion } from "motion/react";

export default function VerticalCarousel() {
    const items = [
        '/public/images/flou-bleu.jpg',
        '/public/images/la-night.jpg',
        '/public/images/flou-gray.jpg',
        '/public/images/la-night2.jpg',
        '/public/images/flou-violet.jpg'
    ]

    const [activeIndex, setActiveIndex] = useState(0);

  // 🔁 scroll infini
    const handleWheel = (e) => {
        if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % items.length);
        } else {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    const slots = [0, 1, 2, 3, 4];

    return (
        <section className="horizontal-carousel">
            <div className="horizontal-carousel__wrapper" onWheel={handleWheel}>
                {slots.map((_, slotIndex) => {
                    const imageIndex =
                        (activeIndex + slotIndex) % items.length;

                    return (
                        <div
                        key={slotIndex}
                        className={`horizontal-carousel__item horizontal-carousel__item--${slotIndex + 1}`}
                        >
                        <img
                            src={items[imageIndex]}
                            alt=""
                            className="horizontal-carousel__item-image"
                        />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}