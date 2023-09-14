'use client'

import { MouseEventHandler, useRef } from "react";

export function ImageDropper() {
    return (
        <div className='border border-dashed border-black-olive w-[28rem] h-48 mx-auto flex flex-col justify-center items-center gap-y-2'>
            <div className='flex flex-col justify-center items-center gap-y-2'>
                <svg width="40" height="40" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.75 14.5454V34.0716H26.25V14.8116L22.1775 18.8841L16.875 13.5816L30.135 0.321625L32.7863 2.97287L35.4375 5.62412L43.3913 13.5816L38.0887 18.8841L33.75 14.5454ZM60 41.5716V60.3216H0V41.5716H7.5V52.8216H52.5V41.5716H60Z" fill="#454339" />
                </svg>
                <div>
                    Arraste e solte a imagem
                </div>
            </div>
            <div className=''>
                <label htmlFor="input-file" className='bg-black-olive cursor-pointer p-2 mx-auto min-w-[8rem] w-32 text-center rounded-md text-platinum inline-block'>
                    Procurar
                </label>
                <input type="file" id="input-file" name="image" className='hidden' accept="" />
            </div>
        </div>
    )
}