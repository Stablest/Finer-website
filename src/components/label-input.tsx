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
        <div className='text-sm text-old-rose'>
            <label htmlFor={id} {...labelAttributes} className={labelAttributes.className ?? 'mx-1 p-1'}>
                {children}
            </label>
            <div className='border border-solid border-black-olive rounded-md flex p-1'>
                <input type={type} name={id} id={id} className={`bg-platinum px-1 max-w-[6rem] ${newBorderRight()} ${size && 'text-right'} appearance-none focus:outline-none`} />
                <div className={`px-1 ${!size && 'invisible'}`}>
                    px
                </div>
            </div>
        </div>
    )
}