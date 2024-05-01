import Container from "../components/layout/container";
import Column from "../components/layout/column";
import Image from "next/image";
import Link from "next/link";


export default function Contact() {
    return (
        <Container size="screen">
            <div className="my-4">
                <h5 className="text-h5 font-bold py-10">{'Let\'s Colloborate'}</h5>
                <div className="py-2">
                    <p className="w-full md:max-w-[70%] 2xl:max-w-[60%]">
                        {
                            `Have a question or a project idea? Don't 
                                    hesitate to reach out! I'm always eager to connect 
                                    with fellow developers and enthusiasts like you. 
                                    Drop me a message and let's explore the possibilities 
                                    together!`
                        }
                    </p>
                </div>
                <div className="flex flex-col py-2">
                    <span className="py-2">
                        <Link className="pb-1 border-b-2 border-highlight"
                            href={'https://www.linkedin.com/in/sunerasv95/'}>LinkedIn</Link>
                    </span>
                    <span className="py-2">
                        <Link className="pb-1 border-b-2 border-highlight"
                            href={'https://www.github.com/sunerasv95'}>Github</Link>
                    </span>
                </div>
                <div className="absolute bottom-0 right-0">
                    <Image src={"./images/hi.svg"} width={300} height={300} alt='contact-me' />
                </div>
            </div>
        </Container>
    );
}