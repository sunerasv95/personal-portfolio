import { FunctionComponent, ReactNode } from 'react'

interface props {
    contentVertically?: "start" | "center" | "end",
    contentHorizontally?: "start" | "center" | "end",
    children: ReactNode
}
const Column: FunctionComponent<props> = ({
    contentVertically = "center",
    contentHorizontally = "center",
    children
}) =>
    <div className={`w-1/3 flex justify-${contentHorizontally} items-${contentVertically}`}>{children}</div>

export default Column;