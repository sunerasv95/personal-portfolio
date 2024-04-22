import Image from "next/image";
import DefaultCard from "../components/card/default-card";
import FlippableCard from "../components/card/flippable-card";
import FlexCenteredDiv from "../components/layout/flex-centered-div";
import Container from "../components/layout/container";

const projects = {
    featured: [
        {
            title: (<p>{'360 Rewards'}</p>),
            summary: (<p>{'An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for'}</p>),
            description: (<p>{'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'}</p>)
        }
    ]
}

export default function Projects() {
    return (
        <Container size="default">
            <section className="my-20">
                <h5 className="text-h5 font-bold py-10">Featured Projects</h5>
                <div className="flex gap-8 my-8">
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                            withImage={true}
                            imagePath="./images/cash-me.svg"
                        />
                    </FlexCenteredDiv>
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                            withImage={true}
                            imagePath="./images/cash-me.svg"
                        />
                    </FlexCenteredDiv>
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                            withImage={true}
                            imagePath="./images/cash-me.svg"
                        />
                    </FlexCenteredDiv>
                </div>
            </section>
            <section className="my-20">
                <h5 className="text-h5 font-bold py-10">All Projects</h5>
                <div className="flex gap-8 my-8">
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                        />
                    </FlexCenteredDiv>
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                        />
                    </FlexCenteredDiv>
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                        />
                    </FlexCenteredDiv>
                </div>
                <div className="flex gap-8 my-8">
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                        />
                    </FlexCenteredDiv>
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                        />
                    </FlexCenteredDiv>
                    <FlexCenteredDiv>
                        <DefaultCard
                            width={80}
                            height={96}
                            title="This is sample card title"
                            description="An e-commerce platform with features for browsing products,  adding them to the cart, and checking out securely. e-commerce platform with features for"
                        />
                    </FlexCenteredDiv>
                </div>
            </section>
        </Container>
    );
}