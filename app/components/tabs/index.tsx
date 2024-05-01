'use client'

import Button from '@/app/elements/button';
import { FunctionComponent, ReactNode, useState } from 'react'

interface TabContent {
    tabName: string,
    heading: string,
    content: ReactNode
}

interface props {
    tabs: TabContent[]
};

export const Tabs: FunctionComponent<props> = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex-column'>
            <div className='py-2'>
                <ul className='flex flex-wrap justify-start'>
                    {
                        tabs && tabs.map((tab: any, i: number) => (
                            <li key={i} className='me-2 mb-3'>
                                <Button
                                    mode={activeTab === i ? 'filled' : 'outlined'}
                                    size='sm'
                                    onClick={() => setActiveTab(i)}>
                                    {tab.tabName}
                                </Button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className='text-h5 py-6 border-0 text-transparent 
                bg-gradient-to-r from-highlight from-20% to-primary to-50% 
                bg-clip-text'>
                    {tabs[activeTab].heading}
                </h3>
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs;