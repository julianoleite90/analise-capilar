import Image from 'next/image';

const ExpertSection = () => {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            {/* Foto do especialista */}
            <div className="w-32 h-32 md:w-48 md:h-48 relative shrink-0">
                              <div className="absolute inset-0 rounded-full border-2 border-orange-500 shadow-lg">
                <Image
                  src="/medica-150.webp"
                  alt="Ana Costa"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 text-center md:text-left">
              {/* Citação */}
              <div className="text-gray-700 space-y-4">
                <p className="italic">
                  &ldquo;Analisamos rigorosamente a eficácia, segurança e depoimentos reais de produtos capilares para trazer uma seleção que realmente funciona contra a queda e fortalece os cabelos.&rdquo;
                </p>
              </div>

              {/* Nome e Especialidade */}
              <div className="mt-4">
                <p className="text-sm md:text-base font-bold text-black mb-1">
                  Ana Costa, Especialista em Saúde Capilar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection; 