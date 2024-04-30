import DefaultCard from "../components/card/default-card";
import ProjectsGrid from "../components/grids/projects-grid";
import Column from "../components/layout/column";
import Container from "../components/layout/container";
import Modal from "../components/layout/modal";

const projects = {
    featured: [
        {
            id: 1,
            title: '360 Rewards 1111',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 2,
            title: '360 Rewards 2222',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 3,
            title: '360 Rewards 3333',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        }
    ],
    all: [
        {
            id: 4,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 5,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 6,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 7,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 8,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 9,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        },
        {
            id: 10,
            title: '360 Rewards',
            description: 'A responsive e-commerce platform for tech enthusiasts, offering a wide range of gadgets and accessories. Built with React, Node.js, and MongoDB, featuring user authentication, product search, and secure payment processing.'
        }
    ]
}

export default function Projects() {
    return (
        <Container size="default">
            <ProjectsGrid heading="Featured Projects" data={projects.featured} />
            <ProjectsGrid heading="All Projects" data={projects.all} />
        </Container >
    );
}