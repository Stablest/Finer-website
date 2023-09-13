import { ImageDropper } from "@/components/image-dropper";
import { ImageProperties } from "@/components/image-properties";
import { Section } from "@/components/section";

export default function Home() {
  return (
    <main className='px-16 mb-12 flex flex-col gap-y-20 overflow-hidden'>
      <Section>
        <div className='my-12 mb-16'>
          <h1 className='mx-auto my-1 w-fit font-extrabold text-4xl'>
            Otimizador de imagem
          </h1>
          <div className='mx-auto w-fit text-lg italic'>
            É fácil! Basta soltar a imagem aqui, e selecionar as opções desejadas.
          </div>
        </div>
        <ImageDropper></ImageDropper>
        <ImageProperties></ImageProperties>
      </Section>
      <section className="w-[70%] mx-auto flex flex-col gap-y-6">
        <Section title={'Como funciona'}>
          <p className="indent-8 text-justify text-lg">
            Após o upload da imagem e a solicitação de otimização, a imagem é enviada para um servidor dedicado, onde um algoritmo processa as personalizações definidas.
            Essas configurações refinam a imagem, garantindo que as características selecionadas sejam aplicadas de maneira precisa e eficaz, resultando em uma imagem otimizada de alta qualidade.
          </p>
        </Section>
        <Section title={'Como usar'}>
          <ol className="list-decimal list-inside flex flex-col gap-y-2 [&_li]:my-1">
            <li>
              <span className="font-semibold">Upload da Imagem:</span> Clique no botão de upload ou arraste a imagem desejada para a área indicada. Aguarde até que a imagem seja completamente carregada.
            </li>
            <li>
              <span className="font-semibold">Selecione as Características:</span> Explore as opções disponíveis para personalizar a imagem.
            </li>
            <li>
              Clique no botão "Otimizar" para iniciar o processo.
            </li>
            <li>
              Aguarde enquanto o servidor processa a imagem.
            </li>
            <li>
              Baixe a imagem otimizada
            </li>
          </ol>
        </Section>
        <Section title={'Perguntas Frequentes'}>
          <ol className="list-decimal list-inside flex flex-col gap-y-2 [&_li]:my-1">
            <li>
              <span className="font-semibold">Altura e Largura:</span>
              <ul className="list-disc list-inside mx-8">
                <li><span className="font-semibold">Altura:</span>Refere-se à dimensão vertical da imagem, medida em pixels. Ao ajustar a altura, você pode redimensionar a imagem para torná-la mais adequada para exibições específicas.</li>
                <li><span className="font-semibold">Largura:</span>Representa a dimensão horizontal da imagem, também medida em pixels. Ajustar a largura permite controlar o espaço ocupado pela imagem em uma página ou tela.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold">Formato:</span> Determina a extensão do arquivo da imagem (por exemplo, JPG, PNG, WEBP).
              Cada formato tem características únicas e é mais apropriado para diferentes tipos de imagens.
              Por exemplo, o JPEG é excelente para imagens na internet, pois tem um tamanho reduzido, enquanto o PNG preserva detalhes e transparências.
            </li>
            <li>
              <span className="font-semibold">Qualidade:</span> Especifica o nível de compressão aplicado a imagens no formato JPG. Um nível de qualidade mais alto preserva mais detalhes,
              mas resulta em um arquivo maior, enquanto uma qualidade menor pode reduzir o tamanho do arquivo, porém com alguma perda de detalhes.
            </li>
            <li>
              <span className="font-semibold">Manter Proporções:</span> Esta opção mantém a relação entre altura e largura da imagem original quando o redimensionamento é aplicado. Isso evita que a imagem fique distorcida ou desproporcional.
            </li>
          </ol>
        </Section>
      </section>
    </main>
  )
}
