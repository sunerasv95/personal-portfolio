import Image from "next/image";
import Button from "./elements/button";
import Container from "./components/layout/container";
import Column from "./components/layout/column";

export default function Home() {
  return (
    <Container size="screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex justify-center items-center lg:w-[50%]">
          <Image src={"./images/landing-page.svg"} width={620} height={620} alt='landing-page' />
        </div>
        <div className="flex flex-col justify-start lg:justify-center items-start pt-5 lg:px-5 lg:w-[50%]">
          <div className="text-h1 py-2 text-transparent bg-gradient-to-r from-highlight from-20% to-primary to-50% bg-clip-text">Hello there!</div>
          <p>I am Sunera, a software engineer with a passion for building amazing things. From web applications to mobile apps, I love turning ideas into reality.</p>
          <div className="my-5 py-5">
            <p className="py-5 my-3">ready to see what I have built?</p>
            <Button>Explore Portfolio</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
