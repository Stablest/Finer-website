import { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode,
    title?: String
}

export function Section({ children, title }: SectionProps) {
    return (
        <section className="flex flex-col gap-y-4">
            {title ?
                <h1 className="text-4xl font-semibold">{title}</h1> :
                ''}
            {children}
        </section>
    )
}
