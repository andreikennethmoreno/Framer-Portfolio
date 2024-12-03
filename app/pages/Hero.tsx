import HeroLayout from "../components/HeroLayout";
import heroImg from "../../public/img/portfolio/pond.gif";


export default function Hero() {
    return (
        <>
            <HeroLayout heroTitle={"DRK.DSGN"} heroSrcImg={heroImg.src}/>
        </>
    )
}