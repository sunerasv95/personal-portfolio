'use client'

import React, { FunctionComponent, MouseEventHandler, useState } from 'react';
import Column from '../../layout/column';
import DefaultCard from '../../card/default-card';
import Modal from '../../layout/modal';

type Project = {
    id: number,
    title: string,
    description: string
}

interface props {
    heading: string,
    data: Project[] /*To-do: types*/
}

const ProjectsGrid: FunctionComponent<props> = ({ heading, data }) => {

    const [show, setShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleView = (id: number) => {
        setShow(true);

        const project = data.filter((project, i) => (project.id === id))[0];
        setSelectedProject(project);
    };

    const closeView = () => setShow(false);

    return (
        <div>
            <Modal isOpen={show} onClose={() => closeView()}>
                <h5 className='text-h5 text-dark font-bold py-3'>{selectedProject?.title}</h5>
                <p className='text-base text-dark'>
                    {selectedProject?.description}
                </p>
            </Modal>
            <section className="my-20">
                <h5 className="text-h5 font-bold py-10">{heading}</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        data.map((project, i) => (
                            <div key={i} className="overflow-hidden">
                                <DefaultCard
                                    key={project.id}
                                    width={80}
                                    height={96}
                                    title={project.title}
                                    description={project.description}
                                    onClick={() => handleView(project.id)}
                                />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default ProjectsGrid;