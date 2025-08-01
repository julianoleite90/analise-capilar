import Image from 'next/image';

const SpecialistSection = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto mb-8">
      <div className="flex flex-row items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className="w-32 h-32 md:w-72 md:h-72 rounded-full border-2 border-orange-500 overflow-hidden">
            <Image
              src="/medica-150.webp"
              alt="Ana Costa - Especialista em Saúde Capilar"
              width={288}
              height={288}
              priority
              quality={100}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="text-gray-700 space-y-4">
            <p className="text-sm md:text-base italic">
              &ldquo;Analisamos rigorosamente a eficácia, segurança e depoimentos reais de produtos capilares para trazer uma seleção que realmente funciona contra a queda e fortalece os cabelos.&rdquo;
            </p>
          </div>
          <div className="mt-4">
            <p className="text-black font-bold text-sm md:text-base">Ana Costa, Especialista em Saúde Capilar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistSection; 