import { FunctionComponent, ReactNode } from 'react'

interface props {
    classNames?: string,
    children: ReactNode
}
const Column: FunctionComponent<props> = ({
    classNames = [],
    children
}) =>
    <div className={`bg-neutral flex flex-wrap ${classNames ? classNames : 'justify-center items-center'}`}>
        {children}
    </div>

export default Column;