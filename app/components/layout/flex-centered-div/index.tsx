import { FunctionComponent, ReactNode } from 'react'

interface props {
    children: ReactNode
}
const FlexCenteredDiv: FunctionComponent<props> = ({ children }) =>
    <div className='flex-1 flex justify-center items-center'>{children}</div>

export default FlexCenteredDiv;