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
            <div className='h-20 flex justify-start'>
                <ul className='inline-flex'>
                    {
                        tabs && tabs.map((tab: any, i: number) => (
                            <li key={i} className='mr-3'>
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
                <h3 className='text-h3 py-5 border-0 text-transparent bg-gradient-to-r from-[#0099A2] from-0% to-[#F1F8F0] to-100% bg-clip-text'>
                    {tabs[activeTab].heading}
                </h3>
                {tabs[activeTab].content}
            </div>
        </div>
    );
}

export default Tabs;