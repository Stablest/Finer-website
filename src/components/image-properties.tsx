'use client'

import { ImageDropper } from "./image-dropper";
import { LabelInput } from "./label-input";

export function ImageProperties() {
    function formHandler(e: React.MouseEvent) {
        e.preventDefault()
    }

    return (
        <form action='POST'>
            <div className='mt-8 mx-auto w-fit text-sm p-2'>
                <div className='font-semibold text-center text-lg py-2'>
                    Personalizar
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex gap-x-4'>
                        <LabelInput id='label-height' type='text' size={true}>
                            Altura
                        </LabelInput>
                        <LabelInput id='label-width' type='text' size={true}>
                            Largura
                        </LabelInput>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-old-rose flex flex-col gap-x-2'>
                            <label htmlFor="select-format" className='px-2 py-1'>
                                Formato
                            </label>
                            <select name="select-format" id="select-format" className='p-1  bg-platinum max-w-[8rem] w-32 text-center border border-black-olive rounded-md text-old-rose focus:outline-none'>
                                <option value="default">Manter</option>
                                <option value="jpg">jpg</option>
                                <option value="webp">webp</option>
                                <option value="png">png</option>
                            </select>
                        </div>
                        <LabelInput id='label-quality' type='text'>
                            Qualidade
                        </LabelInput>
                    </div>
                    <div className='flex gap-x-2 mx-auto'>
                        <label htmlFor="input-fixed" className='text-old-rose px-2'>
                            Fixar proporção
                        </label>
                        <input type="checkbox" name="input-fixed" id="input-fixed" />
                    </div>
                    <button className='bg-black-olive mx-auto min-w-fit w-24 p-2 rounded-md text-platinum' onClick={(e) => formHandler(e)}>
                        Otimizar
                    </button>
                </div>
            </div>
        </form>
    )
}