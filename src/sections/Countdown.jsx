import Container from "../components/Container";

export default function Countdown() {

    return (

        <section
            className="py-24 text-white relative"
        >

            <img
                src="/images/countdown.jpg"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40"/>

            <Container className="relative">

                <div className="grid grid-cols-4 text-center gap-8">

                    <div>
                        <h2 className="font-title text-6xl">517</h2>
                        <p>DAYS</p>
                    </div>

                    <div>
                        <h2 className="font-title text-6xl">09</h2>
                        <p>HOURS</p>
                    </div>

                    <div>
                        <h2 className="font-title text-6xl">42</h2>
                        <p>MINUTES</p>
                    </div>

                    <div>
                        <h2 className="font-title text-6xl">15</h2>
                        <p>SECONDS</p>
                    </div>

                </div>

            </Container>

        </section>

    );

}