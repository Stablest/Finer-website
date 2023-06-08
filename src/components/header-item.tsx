import { ReactNode } from "react"

type HeaderItemProps = {
    children: ReactNode
}

export function HeaderItem({ children }: HeaderItemProps) {
    return (
        <button className="bg-white flex gap-x-1">
            <div className="bg-black-olive w-0.5 h-full">
            </div>
            {children}
        </button>
    )
}