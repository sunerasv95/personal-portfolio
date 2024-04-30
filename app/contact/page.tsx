import Container from "../components/layout/container";
import Column from "../components/layout/column";
import Image from "next/image";


export default function Contact() {
    return (
        <Container size="screen">
            <div className="flex">
                <Column contentVertically="start" contentHorizontally="start">
                    <div className="my-20">
                        <h5 className="text-h5 font-bold py-10">{'Let\'s Colloborate'}</h5>
                        <div className="flex gap-8 my-8">
                            <p className="max-w-[50%]">
                                {
                                    "Have a question or a project idea? Don't hesitate to reach out! I'm always eager to connect with fellow developers and enthusiasts like you. Drop me a message and let's explore the possibilities together!"
                                }
                            </p>
                            <Image className="absolute bottom-0 right-0" src={"./images/hi.svg"} width={400} height={400} alt='landing-page' />
                        </div>
                    </div>
                </Column>
            </div>
        </Container>
    );
}