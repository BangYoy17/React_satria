import FavColor from "./component/favColor";
import Hero from "./component/hero";
import RiwayatPendidikan from "./component/riwayatPendidikan";
import "./insho-style.css";

export default function Gallery() {
    return (
        <section>
            <Hero />
            <RiwayatPendidikan />
            <FavColor />
        </section>
    );
}
