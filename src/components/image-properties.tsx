'use client'

import { useRef } from "react";
import { ImageDropper } from "./image-dropper";
import { LabelInput } from "./label-input";
import { findHeaderFileName } from "@/utils/interfaces/functions/header";

export function ImageProperties() {
    const form_ref = useRef<HTMLFormElement | null>(null)
    const a_ref = useRef<HTMLAnchorElement | null>(null)

    async function formHandler(e: React.MouseEvent) {
        e.preventDefault()
        if (!form_ref.current)
            return
        const formData = new FormData(form_ref.current)
        const { body, queryString } = makeFormQueryBody(formData)
        if (!body)
            return
        console.log(body.type)
        const res = await fetch('/api/v1/optimize' + queryString, {
            method: 'post',
            body: body,
            headers: { 'content-type': body.type ,
            'content-disposition': `attachment; filename=${body.name}`},
        })
        if (res.statusText !== 'OK')
            return
        const data = await res.blob()
        if (!a_ref.current)
            return
        a_ref.current.href = window.URL.createObjectURL(data)
        a_ref.current.download = findHeaderFileName(res.headers, true)
        a_ref.current.click()
    }

    function makeFormQueryBody(formData: FormData) {
        let queryString = '?'
        let body: File | undefined
        for (const prop of formData.entries()) {
            if (prop[1].length === 0)
                continue
            if (prop[1] instanceof File) {
                body = prop[1]
                continue
            }
            queryString += `${prop[0].toString()}=${prop[1].toString()}&`
        }
        queryString = queryString.slice(0, queryString.length - 1)
        return { body, queryString }
    }


    return (
        <form action='/api/v1/optimize' method="post" encType="multipart/form-data" ref={form_ref}>
            <a href="" ref={a_ref} download hidden></a>
            <ImageDropper></ImageDropper>
            <div className='mt-8 mx-auto w-fit text-sm p-2'>
                <div className='font-semibold text-center text-lg py-2'>
                    Personalizar
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex gap-x-4'>
                        <LabelInput id='height' type='text' size={true}>
                            Altura
                        </LabelInput>
                        <LabelInput id='width' type='text' size={true}>
                            Largura
                        </LabelInput>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='text-old-rose flex flex-col gap-x-2'>
                            <label htmlFor="select-format" className='px-2 py-1'>
                                Formato
                            </label>
                            <select name="type" id="select-format" className='p-1  bg-platinum max-w-[8rem] w-32 text-center border border-black-olive rounded-md text-old-rose focus:outline-none'>
                                <option value="">Manter</option>
                                <option value="jpg">jpg</option>
                                <option value="webp">webp</option>
                                <option value="png">png</option>
                            </select>
                        </div>
                        <LabelInput id='quality' type='text'>
                            Qualidade
                        </LabelInput>
                    </div>
                    <div className='flex gap-x-2 mx-auto'>
                        <label htmlFor="input-fixed" className='text-old-rose px-2'>
                            Fixar proporção
                        </label>
                        <input type="checkbox" name="fit" id="input-fixed" />
                    </div>
                    <button className='bg-black-olive mx-auto min-w-fit w-24 p-2 rounded-md text-platinum' onClick={(e) => formHandler(e)}>
                        Otimizar
                    </button>
                </div>
            </div>
        </form>
    )
}