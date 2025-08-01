import Image from 'next/image';
import ScrollLink from './ScrollLink';

const HeroSection = () => {

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 pt-8 pb-16 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo do lado esquerdo */}
          <div className="space-y-4">
            {/* Data de atualização */}
            <div className="pt-2 md:pt-6">
              <p className="text-gray-600 text-sm">
                Atualizado em julho de 2025.
              </p>
            </div>

            {/* Título principal */}
            <div className="text-left">
              <h1 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-gray-900 leading-tight mb-2">
                <div className="text-gray-900">Acabe com a Queda de Cabelo: Os 5 Melhores Remédios de 2025!</div>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-4">Soluções eficazes com recomendação de especialistas e aprovação da anvisa.</h2>
            </div>



            {/* Imagem em mobile */}
            <div className="block lg:hidden w-full">
              <Image
                src="/img-mob.png"
                alt="Produtos para queda de cabelo feminino"
                width={800}
                height={450}
                className="w-full h-auto max-h-[300px] object-contain"
                priority
              />
            </div>

            {/* Primeiro parágrafo */}
            <p className="text-gray-700 leading-relaxed">
            Você já tentou de tudo para recuperar seus cabelos, mas nada funciona? A boa notícia é: milhares de homens e mulheres estão transformando suas vidas com os tratamentos capilares mais eficazes de 2025.
            Com a expertise da renomada especialista Ana Costa, analisamos estudos clínicos e depoimentos reais para revelar o ranking dos 5 melhores remédios que combatem a queda e devolvem a densidade aos fios, preenchendo as falhas, e trazendo novos fios até naquelas entradas mais profundas.
            </p>

            {/* Segundo parágrafo */}
            <p className="text-gray-700 leading-relaxed font-medium">
            Confira agora o ranking com os 5 melhores!
            </p>


            {/* Botão CTA */}
            <ScrollLink 
              targetId="ranking"
              className="inline-flex bg-[#00A040] hover:bg-[#008F35] text-white font-medium py-4 px-4 sm:px-8 rounded-lg transition-colors duration-300 items-center justify-between w-full text-sm sm:text-base whitespace-nowrap"
            >
              <span className="flex-1 text-center">CONFIRA O RANKING COM OS 5 MELHORES</span>
              <span>↓</span>
            </ScrollLink>
          </div>

          {/* Imagem do lado direito (apenas desktop) */}
          <div className="hidden lg:block relative h-[400px]">
            <Image
              src="/img-fundo-2.png"
              alt="Produtos para queda de cabelo feminino"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;