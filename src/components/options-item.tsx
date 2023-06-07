import { ReactNode } from "react"

type OptionsItemProps = {
    children: ReactNode,
    type: string
}

export function OptionsItem({ children, type }: OptionsItemProps) {
    return (
        <div className="flex w-full">
            <div>
                {children}
            </div>
            <input type={type} name="" id="" className="w-full" />
        </div>
    )
}