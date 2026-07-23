import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function Gallery(){

    return(

        <section
            id="gallery"
            className="py-28"
        >

            <Container>

                <SectionTitle
                    title="Gallery"
                />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

                    {[1,2,3,4,5,6,7,8].map(i=>(
                        <img
                            key={i}
                            src={`/images/gallery/${String(i).padStart(2,"0")}.jpg`}
                            className="aspect-square object-cover"
                        />
                    ))}

                </div>

            </Container>

        </section>

    )

}