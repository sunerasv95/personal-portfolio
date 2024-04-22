import Image from "next/image";
import Button from "./elements/button";
import Container from "./components/layout/container";
import FlexCenteredDiv from "./components/layout/flex-centered-div";

export default function Home() {
  return (
    <Container size="screen">
      <div className="flex">
        <FlexCenteredDiv>
          <div className="px-8 mt-10">
            <Image src={"./images/landing-page.svg"} width={620} height={620} alt='landing-page' />
          </div>
        </FlexCenteredDiv>
        <FlexCenteredDiv>
          <div className="px-8 mt-10">
            <div className="text-h1 py-2 text-transparent bg-gradient-to-r from-[#0099A2] from-0% to-[#F1F8F0] to-100% bg-clip-text">Hello there!</div>
            <p>I am Sunera, a software engineer with a passion for building amazing things. From web applications to mobile apps, I love turning ideas into reality.</p>
            <div className="my-5 py-5">
              <p className="py-5 my-3">ready to see what I have built?</p>
              <Button>Explore Portfolio</Button>
            </div>
          </div>
        </FlexCenteredDiv>
      </div>
    </Container>
  );
}
