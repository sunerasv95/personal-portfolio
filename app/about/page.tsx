import Image from "next/image";
import Tabs from "../components/tabs";
import Timeline from "../components/timeline";
import Badge from "../elements/badge";
import Container from "../components/layout/container";
import FlexCenteredDiv from "../components/layout/flex-centered-div";


const work = [
    {
        range: "2020 - 2023",
        title: "Knightsbridge Technologies, Sri Lanka",
        description: "Software Engineer"
    },
    {
        range: "2022 - 2022",
        title: "ITDomain, Australia",
        description: "Software Engineer"
    },
    {
        range: "2019 - 2020",
        title: "Dynamic IT Solutions, Malaysia",
        description: "Software Engineer"
    }
]


const education = [
    {
        range: "2023 - 2024",
        title: "Technology Project Management Masters Degree - MSc",
        description: "Cardiff Metropolitan University, United Kingdom"
    },
    {
        range: "2017 - 2018",
        title: "Bachelor of Science (Hons) in Software Engineering",
        description: "Cardiff Metropolitan University, United Kingdom"
    },
    {
        range: "2015 - 2017",
        title: "Higher Diploma in Computing and Software Engineering",
        description: "International College of Business & Technology, Sri Lanka"
    }
];

const skills = ["PHP", "JavaScript", ".NET", "Python", "SQL", "NoSQL", "Laravel", "React",
    "React Native", "Nest JS", "Next JS", "Node JS", "Docker", "CI/CD", "Figma", "Git", "AWS",
    "Machine Learning", "Tableau"];


const tabs = [
    {
        tabName: 'Professional',
        heading: 'Professional Background',
        content: "I'm Sunera Viyangoda, a seasoned software engineer with 4 years of experience in FinTech industry. Throughout my career, I've had the opportunity to work on diverse projects, ranging from CMS applications to service-oriented reward systems and customized reward accumulation systems."
    },
    {
        tabName: 'Experience',
        heading: 'Experience',
        content: (
            <Timeline timeline={work} />
        )
    },
    {
        tabName: 'Education',
        heading: 'Education',
        content: (
            <Timeline timeline={education} />
        )
    },
    {
        tabName: 'Skills',
        heading: 'Technical Skills',
        content: (
            skills.map((skill, i) => (<Badge key={i}>{skill}</Badge>))
        )
    },
    {
        tabName: 'Personal',
        heading: 'Personal Background',
        content: "Outside of my professional endeavors, I'm an avid outdoor enthusiast and creative spirit. You'll often find me hitting the trails for a refreshing hike, catching waves on my surfboard, or capturing moments through the lens of my camera. I'm also deeply passionate about electronic music and enjoy exploring new beats and rhythms. Balancing my love for adventure with networking and connecting with fellow professionals in the tech community is what keeps me inspired and energized. Let's embark on this journey together and discover the perfect blend of work and play"

    }
];


export default function About() {
    return (
        <Container size="screen">
            <div className="flex">
                <FlexCenteredDiv>
                    <div className="px-8 mt-10">
                        <Image src={"./images/face.svg"} width={460} height={460} alt='landing-page' />
                    </div>
                </FlexCenteredDiv>
                <FlexCenteredDiv>
                    <div className="px-8 mt-10">
                        <Tabs tabs={tabs} />
                    </div>
                </FlexCenteredDiv>
            </div>
        </Container>
    );
}

