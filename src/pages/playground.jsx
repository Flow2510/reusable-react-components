import HorizontalSlider from "../components/horizontalslider/horizontalslider";
import ImageParallax from "../components/imageparallax/imageparallax";
import List from "../components/list/list";
import RevealCta from "../components/revealcta/revealcta";
import ScaleGallery from "../components/scalegallery/scalegallery";
import TextSection from "../components/textsection/textsection";

export default function Playground(){
    return(
        <main>
            <ScaleGallery />
            <RevealCta />
            <TextSection />
            <List />
            <ImageParallax />
            <HorizontalSlider />
        </main>
    )
}