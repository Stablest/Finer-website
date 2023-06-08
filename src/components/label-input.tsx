import { HTMLInputTypeAttribute, LabelHTMLAttributes } from "react"

type SizeLabelProps = {
    children: string,
    id: string,
    type: HTMLInputTypeAttribute,
    size?: boolean,
    labelAttributes?: LabelInputHTMLAttributes,
}

type LabelInputHTMLAttributes = Omit<LabelHTMLAttributes<HTMLLabelElement>, 'htmlFor'>

export function LabelInput({ children, id, type, size, ...labelAttributes }: SizeLabelProps & LabelInputHTMLAttributes) {
    const newBorderRight = () => {
        if (size)
            return 'border-r-[1px] border-solid'
        return ''
    }

    return (
        <label htmlFor={id} {...labelAttributes} className={labelAttributes.className ?? 'text-sm text-old-rose'}>
            <div className='mx-1 p-1'>
                {children}
            </div>
            <div className='border border-solid rounded-md flex p-1'>
                <input type={type} name={id} id={id} className={`bg-platinum px-1 max-w-[6rem] ${newBorderRight()} ${size && 'text-right'} appearance-none focus:outline-none`} />
                <div className={`px-1 ${!size && 'invisible'}`}>
                    px
                </div>
            </div>
        </label>
    )
}