import { text, title } from "motion/react-client"
import './list.scss'
import { NavLink } from "react-router-dom"
import MaskReveal from "../maskreveal/maskreveal"
import HoverButton from "../hoverbutton/hoverbutton"

export default function List() {
    const items = [
        {
            subtitle: "Lorem Ipsum",
            title: "Magni quisquam a aliquid recusandae neque veritatis",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam a aliquid recusandae neque veritatis unde at consequatur impedit dolor? Ullam dolore, facere cumque eligendi iste ipsum id nesciunt nemo?",
            image: "/public/images/la-night.jpg"
        },
        {
            subtitle: "Lorem Ipsum",
            title: "Magni quisquam a aliquid recusandae neque veritatis",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam a aliquid recusandae neque veritatis unde at consequatur impedit dolor? Ullam dolore, facere cumque eligendi iste ipsum id nesciunt nemo?",
            image: "/public/images/flou-bleu.jpg"
        },
        {
            subtitle: "Lorem Ipsum",
            title: "Magni quisquam a aliquid recusandae neque veritatis",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam a aliquid recusandae neque veritatis unde at consequatur impedit dolor? Ullam dolore, facere cumque eligendi iste ipsum id nesciunt nemo?",
            image: "/public/images/la-night2.jpg"
        },
        {
            subtitle: "Lorem Ipsum",
            title: "Magni quisquam a aliquid recusandae neque veritatis",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam a aliquid recusandae neque veritatis unde at consequatur impedit dolor? Ullam dolore, facere cumque eligendi iste ipsum id nesciunt nemo?",
            image: "/public/images/flou-violet.jpg"
        }
    ]

    return(
        <section className="list">
            <div className="list__wrapper">
                {items.map((item, i) => (
                    <div className={`list-item list-item--${i + 1}`} key={i + item.title}>
                        <div className="list-item__header">
                            <p>0{i + 1} /</p>
                        </div>
                        <div className="list-item__content">
                            <p className="list-item__content-subtitle">
                                <MaskReveal 
                                    text={item.subtitle}    
                                    backgroundColor={"#202020"}                            
                                />
                            </p>
                            <h3 className="list-item__content-title">{item.title}</h3>
                            <p className="list-item__content-text">{item.text}</p>
                            <HoverButton />
                        </div>
                        <div className="list-item__image-wrapper">
                            <img className="list-item__image" src={item.image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}