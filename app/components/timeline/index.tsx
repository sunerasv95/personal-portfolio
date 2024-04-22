'use client';

import { FunctionComponent } from 'react';

interface TimelineItem {
    range: string,
    title: string,
    description: string
}


interface props {
    timeline: TimelineItem[]
};

export const Timeline: FunctionComponent<props> = ({ timeline }) => {

    return (
        <div>
            {
                timeline && timeline.map((item, i) => (
                    <div key={i} className="flex gap-16 mb-6 my-5 py-2">
                        <div className="w-16 mr-4">
                            <div className="text-sm border rounded-full h-8 w-24 flex items-center justify-center">
                                {item.range}
                            </div>
                        </div>
                        <div className='pe-5'>
                            <p className="text-sm font-bold mb-1">{item.title}</p>
                            <p className='text-sm'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Timeline;