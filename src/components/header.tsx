import { HeaderItem } from "./header-item";

export function Header() {
    return (
        <header className='text-dark-gray text-2xl px-16 py-6 flex justify-between items-center'>
            <div>FINER</div>
            <div className="text-lg flex gap-x-4">
                <HeaderItem>
                    Como funciona?
                </HeaderItem>
                <HeaderItem>
                    Como usar
                </HeaderItem>
            </div>
        </header>
    )
}