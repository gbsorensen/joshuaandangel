import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Details(){

    return(

        <section
            id="details"
            className="py-28 bg-[#FCF8F4]"
        >

            <Container>

                <SectionTitle
                    title="Wedding Details"
                />

                <div className="grid md:grid-cols-3 gap-10">

                    <div>
                        <h3 className="font-title text-3xl">Ceremony</h3>
                        <p>Venue Here</p>
                    </div>

                    <div>
                        <h3 className="font-title text-3xl">Reception</h3>
                        <p>Venue Here</p>
                    </div>

                    <div>
                        <h3 className="font-title text-3xl">Dress Code</h3>
                        <p>Formal Attire</p>
                    </div>

                </div>

            </Container>

        </section>

    )

}