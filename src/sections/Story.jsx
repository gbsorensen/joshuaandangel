import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { wedding } from "../config/wedding";

export default function Story(){

    return(

        <section
            id="story"
            className="py-28"
        >

            <Container>

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <img
                        src="/images/sample2.jpg"
                        className="w-full rounded-sm shadow-lg"
                    />

                    <div>

                        <SectionTitle
                            title={wedding.story.title}
                        />

                        <p className="leading-9">

                            {wedding.story.content}

                        </p>

                    </div>

                </div>

            </Container>

        </section>

    )

}