import { OptionsItem } from '@/components/options-item'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-16 overflow-auto'>
      <div className='my-12'>
        <div className='mx-auto my-1 w-fit font-extrabold text-3xl'>
          Redimensionador de imagem
        </div>
        <div className='mx-auto w-fit text-lg italic'>
          É fácil! Basta soltar a imagem aqui, e selecionar as opções desejadas.
        </div>
      </div>
      <div className='my-20 flex w-full justify-center gap-x-10'>
        <div className='bg-yellow-gray h-96 w-8/12 rounded-xl shadow-md'>
          <label htmlFor="drop-image" className='cursor-pointer w-full h-full flex justify-center items-center'>DROP FILES HERE...</label>
          <input type="file" id='drop-image' className='hidden cursor-pointer' />
        </div>

        <div className='bg-yellow-gray flex flex-col justify-around p-4 w-3/12'>
          <OptionsItem type='text'>
            Altura
          </OptionsItem>
          <OptionsItem type='text'>
            Largura
          </OptionsItem>
          <OptionsItem type='range'>
            Qualidade
          </OptionsItem>

          <select name="" id="">
            <option value="jpeg">jpeg</option>
            <option value='webp'>webp</option>
          </select>

        </div>
      </div>
    </main>
  )
}
