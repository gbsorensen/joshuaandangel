import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { wedding } from "../config/wedding";

export default function Invitation() {

    return (

        <section
            id="invitation"
            className="py-28 bg-[#FCF8F4]"
        >

            <Container>

                <SectionTitle
                    subtitle="You're Invited"
                    title="Celebrate With Us"
                />

                <div className="max-w-3xl mx-auto text-center">

                    <p className="leading-9 text-lg">

                        {wedding.invitation.message}

                    </p>

                </div>

            </Container>

        </section>

    );

}