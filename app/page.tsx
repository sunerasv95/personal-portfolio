import Image from "next/image";
import Button from "./elements/button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center px-5 py-5">
          <Image src={"./images/landing-page.svg"} width={620} height={620} alt='landing-page' />
        </div>
        <div className="flex justify-center items-center px-5 py-5">
          <div className="flex-1 flex-column">
            <div className="text-h1 py-2 bg-gradient-to-r from-primary to-highlight bg-clip-text text-transparent">Hello there!</div>
            <p className="w-3/4 py-1 pb-5">I am Sunera, a software engineer with a passion for building amazing things. From web applications to mobile apps, I love turning ideas into reality.</p>
            <div className="my-5 py-5">
              <p className="py-5 my-3">ready to see what I have built?</p>
              <Button>Explore Portfolio</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
