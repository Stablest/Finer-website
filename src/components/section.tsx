import { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode,
    title?: ReactNode
}

export function Section({ children, title }: SectionProps) {
    return (
        <section className="flex flex-col gap-y-4">
            {title ?
                title :
                ''}
            {children}
        </section>
    )
}
