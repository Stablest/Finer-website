import { ReactNode } from "react"

type HeaderItemProps = {
    children: ReactNode
}

export function HeaderItem({ children }: HeaderItemProps) {
    return (
        <div className="bg-white flex gap-x-1">
            <div className="bg-black-olive min-w-[0.200rem] h-full">
            </div>
            <button>
                {children}
            </button>
            
        </div>
    )
}