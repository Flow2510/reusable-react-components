import MaskReveal from '../maskreveal/maskreveal';
import './horizontalslider.scss';

export default function HorizontalSlider() {
    return(
        <section className='horizontal-slider'>
            <div className='horizontal-slider__content'>
                <h2>
                    <MaskReveal 
                        text={"Horizontal Slider"}
                        backgroundColor={"#202020"}
                    />
                </h2>
            </div>
        </section>
    )
}