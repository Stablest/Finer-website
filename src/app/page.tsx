import { ImageOptimizer } from "@/components/image-optimizer";

export default function Home() {
  return (
    <main className='px-16 overflow-auto'>
      <section>
        <div className='my-12 mb-28'>
          <div className='mx-auto my-1 w-fit font-extrabold text-3xl'>
            Otimizador de imagem
          </div>
          <div className='mx-auto w-fit text-lg italic'>
            É fácil! Basta soltar a imagem aqui, e selecionar as opções desejadas.
          </div>
        </div>
        <ImageOptimizer></ImageOptimizer>
      </section>
    </main>
  )
}
