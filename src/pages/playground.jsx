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
            <RevealCta />
        </main>
    )
}