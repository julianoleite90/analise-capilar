import Image from 'next/image';
import UtmLink from './UtmLink';
import ScrollLink from './ScrollLink';
import SectionTracker from './SectionTracker';

const RankingSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white" id="ranking">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <SectionTracker sectionId="ranking-header">
            <div className="py-12 text-center">

              <h2 className="text-4xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight mb-4">
                Conheça agora as 5 melhores opções de 2025 - recomendados
              </h2>
              <p className="text-gray-800 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed tracking-normal">
                Todas opções listadas foram devidamente testadas, e apresentaram resultados entre 9 a cada 10 usuários
              </p>
            </div>
          </SectionTracker>

          {/* Primeiro Produto */}
          <SectionTracker sectionId="definamax">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                1° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl text-gray-900 font-bold">Biocapilar</h4>
                    <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-sm">Extramamente recomendado</span>
                  </div>
                  <p className="text-gray-900 font-medium text-sm sm:text-base tracking-wide">Considerado a melhor opção entre os usuários, alguns consideram como um tipo de "fórmula milagrosa"</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-lg sm:text-xl font-bold text-gray-900">4.9</div>
                    <div className="text-yellow-400 text-lg">★★★★★</div>
                  </div>
                  <div className="text-xs text-gray-500">Avaliação das usuárias</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4"></div>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-6" id="definamax">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/biocapilar.png"
                    alt="Biocapilar: Acaba com a queda e estimula o crescimento de novos fios"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />

                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o Biocapilar é o Favorito entre os Usuários?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Em nossa análise detalhada e entrevistas exclusivas, o Biocapilar se destacou como o queridinho do momento. Sua fórmula inovadora foi amplamente elogiada, com relatos impressionantes de resultados. Alguns usuários notaram melhorias em apenas 12 dias de uso, enquanto outros afirmam que a queda de cabelo "simplesmente desapareceu" como por um milagre!
                  </p>
                  
                  <p className="text-gray-700 mb-6">
                    E os números não mentem: 9 em cada 10 pessoas entrevistadas expressaram grande satisfação com o produto. No entanto, a alta demanda tem gerado desafios — muitos relatam dificuldade em encontrar o Biocapilar disponível, já que o fabricante tem dificuldade para manter os estoques, devido a alta popularidade.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados apresentados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">+85%</div>
                        <div className="text-sm sm:text-base text-gray-600">Densidade</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">93%</div>
                        <div className="text-sm sm:text-base text-gray-600">Menos Queda</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">98%</div>
                        <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                      </div>
                    </div>
                  </div>

                  <h6 className="text-xl font-bold text-gray-900 mb-4">
                    O Que Torna o Biocapilar Tão Poderoso para o Crescimento Capilar?
                  </h6>
                  
                  <p className="text-gray-900 mb-6">
                    O segredo do Biocapilar está em sua tecnologia patenteada de peptídeos bioativos, que age diretamente nos folículos pilosos e melhora a microcirculação do couro cabeludo. Isso não só estimula o crescimento de novos fios — preenchendo rapidamente falhas e entradas —, como também acaba com a queda, fortalece fios fracos e quebrádios e promove uma transformação natural, sem exigir mudanças drásticas na sua rotina.
                  </p>

                  <p className="text-gray-900 mb-6">O diferencial do Biocapilar está em sua ação tripla revolucionária:</p>

                  <div className="space-y-6 mb-6">
                    <div className="text-gray-900 p-4 bg-gray-50 rounded-lg">
                      <strong>Estímulo ao Crescimento:</strong> Acelera o crescimento capilar em até 300%, regenerando os fios desde a raiz em poucos dias.
                    </div>
                    <div className="text-gray-900 p-4 bg-gray-50 rounded-lg">
                      <strong>Ação Anti-Queda:</strong> Elimina a queda de cabelo de forma contínua, protegendo os folículos para resultados duradouros.
                    </div>
                    <div className="text-gray-900 p-4 bg-gray-50 rounded-lg">
                      <strong>Densidade e Volume:</strong> Aumenta a densidade capilar, especialmente em áreas afetadas como a coroa e entradas, preservando a saúde do couro cabeludo e entregando fios mais cheios e fortes.
                    </div>
                  </div>



                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://www.biocapilaroficial.com.br/" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-biocapilar"
                    >
                      <span>→</span> Acessar Site Oficial
                    </UtmLink>
                    <UtmLink 
                      href="https://www.biocapilaroficial.com.br/" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-biocapilar"
                    >
                      <span>→</span> Obter mais informações
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Atenção: Não somos vendedores ou representantes do Biocapilar. Para mais informações sobre o produto, acesse
                        o site oficial clicando nos botões acima.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Segundo Produto */}
          <SectionTracker sectionId="ozenvitta">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                2° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">Folixil</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">O Suplemento mais usado na Europa, agora no Brasil</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.7</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação das usuárias</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/folixil.png"
                    alt="Folixil: O Suplemento mais usado na Europa, agora no Brasil"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Folixil: O Suplemento mais usado na Europa, agora no Brasil
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o Folixil é eficaz no combate à calvície?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Em nossa análise, o <strong>Folixil</strong> demonstrou ser extremamente eficaz no combate à calvície: 
                    <strong>85% dos usuários relataram preencher até 75% das áreas calvas</strong> em apenas algumas semanas.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados do tratamento:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">+60%</div>
                        <div className="text-sm sm:text-base text-gray-600">Resistência</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">78%</div>
                        <div className="text-sm sm:text-base text-gray-600">Menos Quebra</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">85%</div>
                        <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    Sua fórmula natural contém enzimas isoladas de vitaminas e fibras que atuam diretamente no bloqueio do hormônio DHT, responsável pela queda capilar, proporcionando resultados duradouros.
                  </p>

                  <p className="text-gray-900 mb-6">O diferencial do Folixil é sua fórmula revolucionária:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Bloqueio do DHT:</strong> Neutraliza a atividade da enzima 5-alfa-redutase, principal produtora do hormônio DHT responsável pela queda.
                    </div>
                    <div className="text-gray-900">
                      <strong>Preenchimento de Falhas:</strong> Estimula os folículos dormentes para preencher áreas calvas e entradas em poucas semanas.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <UtmLink 
                      href="https://app.monetizze.com.br/r/BQS1857978" 
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="site-oficial-folixil"
                    >
                      <span>→</span> Acessar Site Oficial
                    </UtmLink>
                    <UtmLink 
                      href="https://app.monetizze.com.br/r/BQS1857978" 
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold"
                      eventId="informacoes-folixil"
                    >
                      <span>→</span> Obter mais informações
                    </UtmLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Atenção: Não somos vendedores ou representantes do Folixil. Para mais informações sobre o produto, acesse
                        o site oficial clicando nos botões acima.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Terceiro Produto */}
          <SectionTracker sectionId="sb2">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                3° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">Rogaine</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Combate eficaz à queda capilar</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.5</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação das usuárias</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/rogaine.png"
                    alt="Rogaine: Combate eficaz à queda capilar"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Rogaine: Combate eficaz à queda capilar
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o Rogaine é eficaz contra a queda capilar?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Nossa análise revelou resultados impressionantes: <strong>87% das usuárias relataram redução significativa da queda capilar e melhora na ancoragem dos fios</strong>, com resultados visíveis já nas primeiras semanas de uso.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados do tratamento:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">-75%</div>
                        <div className="text-sm sm:text-base text-gray-600">Queda</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">87%</div>
                        <div className="text-sm sm:text-base text-gray-600">Ancoragem</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">90%</div>
                        <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    O produto utiliza uma combinação exclusiva de ingredientes naturais que atuam de forma sinérgica para fortalecer os folículos capilares e reduzir a inflamação do couro cabeludo, principais causas da queda capilar feminina.
                  </p>

                  <p className="text-gray-900 mb-6">O Rogaine trabalha através de três mecanismos principais:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Fortalecimento Folicular:</strong> Saw Palmetto e Finasterida natural trabalham juntos para proteger os folículos.
                    </div>
                    <div className="text-gray-900">
                      <strong>Melhora da Circulação:</strong> Ginkgo Biloba e Capsaicina otimizam a microcirculação do couro cabeludo.
                    </div>
                    <div className="text-gray-900">
                      <strong>Redução da Inflamação:</strong> Extrato de Chá Verde e Zinco combatem processos inflamatórios que causam queda.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <ScrollLink 
                      targetId="ranking"
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold cursor-pointer"
                    >
                      <span>→</span> Voltar ao Ranking
                    </ScrollLink>
                    <ScrollLink 
                      targetId="ranking"
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold cursor-pointer"
                    >
                      <span>→</span> Ver Outros Produtos
                    </ScrollLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Atenção: Não somos vendedores ou representantes do Rogaine. Para mais informações sobre o produto, acesse
                        o site oficial clicando nos botões acima.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Quarto Produto */}
          <SectionTracker sectionId="newdetox">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                4° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">NuHair</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Saúde do couro cabeludo</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.3</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação das usuárias</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/nuhair.png"
                    alt="NuHair: Saúde do couro cabeludo"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    NuHair: Saúde do couro cabeludo
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o NuHair é eficaz para a saúde do couro cabeludo?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    Nossa análise revelou que o <strong>NuHair</strong> é especialmente eficaz para problemas do couro cabeludo: <strong>80% das usuárias relataram redução significativa da oleosidade, caspa e irritação em apenas 7 dias</strong>, com melhora expressiva na saúde geral do couro cabeludo.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">80%</div>
                        <div className="text-sm sm:text-base text-gray-600">Menos Oleosidade</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">7</div>
                        <div className="text-sm sm:text-base text-gray-600">Dias de Uso</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">75%</div>
                        <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    O produto utiliza uma combinação exclusiva de ativos naturais que atuam na regulação sebácea e limpeza profunda dos folículos, proporcionando um ambiente saudável para o crescimento capilar.
                  </p>

                  <p className="text-gray-900 mb-6">O NuHair atua através de três mecanismos:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Regulação Sebácea:</strong> Ácido Salicílico e Tea Tree controlam a produção excessiva de oleosidade.
                    </div>
                    <div className="text-gray-900">
                      <strong>Limpeza Profunda:</strong> Remove resíduos e toxinas que obstruem os folículos capilares.
                    </div>
                    <div className="text-gray-900">
                      <strong>Equilíbrio do pH:</strong> Restaura o pH natural do couro cabeludo, criando condições ideais para crescimento.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <ScrollLink 
                      targetId="ranking"
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold cursor-pointer"
                    >
                      <span>→</span> Voltar ao Ranking
                    </ScrollLink>
                    <ScrollLink 
                      targetId="ranking"
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold cursor-pointer"
                    >
                      <span>→</span> Ver Outros Produtos
                    </ScrollLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Atenção: Não somos vendedores ou representantes do NuHair. Para mais informações sobre o produto, acesse
                        o site oficial clicando nos botões acima.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Quinto Produto */}
          <SectionTracker sectionId="mounja">
            <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 mb-12 relative">
              <div className="absolute -top-5 left-8 bg-green-600 text-white px-6 py-2 rounded">
                5° Lugar
              </div>
              
              <div className="flex justify-between items-start mb-6 pt-2 flex-col sm:flex-row gap-4 sm:gap-0">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl sm:text-2xl text-gray-900 font-bold">Imecap</h4>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Recomendado</span>
                  </div>
                  <p className="text-gray-900 font-medium text-base sm:text-lg tracking-wide">Aumento de densidade capilar</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="text-xl font-bold text-gray-900">4.0</div>
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <div className="text-sm text-gray-500">Avaliação das usuárias</div>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-6"></div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="w-full sm:w-64 shrink-0">
                  <Image
                    src="/imecap.png"
                    alt="Imecap: Aumento de densidade capilar"
                    width={256}
                    height={384}
                    className="rounded-lg mx-auto sm:mx-0"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 256px"
                    quality={85}
                  />
                  <p className="text-sm text-gray-600 text-center mt-2">
                    Imecap: Aumento de densidade capilar
                  </p>
                </div>

                <div className="flex-1">
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">
                    Por que o Imecap é eficaz para aumentar a densidade capilar?
                  </h5>

                  <p className="text-gray-700 mb-6">
                    O <strong>Imecap</strong> é um suplemento inovador que <strong>utiliza a tecnologia de peptídeos avançados para estimular o crescimento de novos folículos capilares</strong>. Nossa análise mostrou que 78% das usuárias relataram aumento significativo na densidade capilar.
                  </p>

                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6">
                    <h6 className="text-gray-800 font-semibold mb-4">Resultados observados:</h6>
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center relative">
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">78%</div>
                        <div className="text-sm sm:text-base text-gray-600">Mais Densidade</div>
                      </div>
                      <div className="relative p-2 sm:p-3">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-green-200 to-transparent"></div>
                        <div className="text-xl sm:text-2xl font-bold text-green-600">+35%</div>
                        <div className="text-sm sm:text-base text-gray-600">Volume</div>
                      </div>
                      <div className="p-2 sm:p-3">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">85%</div>
                        <div className="text-sm sm:text-base text-gray-600">Satisfação</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-900 mb-6">
                    O produto se destaca por sua fórmula concentrada e pela presença de peptídeos biomimético, um ingrediente natural com propriedades regenerativas para os folículos capilares.
                  </p>

                  <p className="text-gray-900 mb-6">O Imecap atua através de três mecanismos:</p>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-900">
                      <strong>Ativação Folicular:</strong> Estimula folículos dormentes a produzirem novos fios de cabelo.
                    </div>
                    <div className="text-gray-900">
                      <strong>Espessamento dos Fios:</strong> Aumenta o diâmetro dos fios existentes, criando maior volume.
                    </div>
                    <div className="text-gray-900">
                      <strong>Prolongamento da Fase Anágena:</strong> Estende o período de crescimento ativo dos cabelos.
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <ScrollLink 
                      targetId="ranking"
                      className="w-full bg-[#00C853] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#00B848] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold cursor-pointer"
                    >
                      <span>→</span> Voltar ao Ranking
                    </ScrollLink>
                    <ScrollLink 
                      targetId="ranking"
                      className="w-full bg-[#FF6B00] text-white text-center py-4 sm:py-4 px-4 rounded-lg hover:bg-[#FF5722] transition-colors flex items-center justify-center gap-2 text-base sm:text-base font-semibold cursor-pointer"
                    >
                      <span>→</span> Ver Outros Produtos
                    </ScrollLink>
                  </div>

                  <div className="mt-6 bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 text-sm flex items-start gap-2">
                      <span className="text-orange-500">⚠</span>
                      <span>
                        Atenção: Não somos vendedores ou representantes do Imecap. Para mais informações sobre o produto, acesse
                        o site oficial clicando nos botões acima.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Seção de Conclusão */}
          <SectionTracker sectionId="conclusao">
            <div className="bg-gradient-to-b from-gray-100 to-gray-50/80 py-16">
              <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                      Conclusão da Nossa Análise
                    </h2>

                    <div className="space-y-6 text-gray-700">
                      <p className="leading-relaxed">
                        Com base em nossa extensa avaliação, que incluiu análise de resultados reais, 
                        depoimentos de usuárias e estudos de eficácia, consideramos esses 5 produtos como as 
                        melhores opções para combater a queda capilar, estimular o crescimento e aumentar a densidade dos cabelos em 2025.
                      </p>

                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">
                          Principais Diferenciais dos Produtos Selecionados:
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Fórmulas naturais com ingredientes cientificamente comprovados para saúde capilar</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Alto índice de satisfação entre as usuárias (acima de 75%)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Resultados visíveis em curto prazo (15-30 dias)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Fabricação em laboratórios certificados</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>Garantia de satisfação e política de reembolso</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                          <span className="text-orange-500">⚠</span>
                          Aviso Importante:
                        </h3>
                        <p className="leading-relaxed">
                          Recomendamos enfaticamente que a compra seja realizada exclusivamente através dos sites 
                          oficiais dos produtos. Isso garante:
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-start gap-3">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>Produto 100% original e dentro do prazo de validade</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>Garantia de satisfação ou seu dinheiro de volta</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>Suporte ao cliente e acompanhamento pós-venda</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange-600 mt-1">•</span>
                            <span>Pagamento seguro e entrega garantida</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">
                          Como Escolher o Produto Ideal:
                        </h3>
                        <p className="mb-4">
                          Cada produto em nossa lista tem características únicas que podem se adequar melhor 
                          às suas necessidades específicas:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">→</span>
                            <span><strong>Biocapilar:</strong> Ideal para quem busca crescimento acelerado e aumento de densidade</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">→</span>
                            <span><strong>Folixil:</strong> Perfeito para combater a calvície e preencher falhas</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">→</span>
                            <span><strong>Rogaine:</strong> Excelente para combater queda capilar intensa</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">→</span>
                            <span><strong>NuHair:</strong> Ótimo para problemas de couro cabeludo e oleosidade</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">→</span>
                            <span><strong>Imecap:</strong> Recomendado para quem precisa aumentar o volume capilar</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-center text-gray-600 italic">
                        Para acessar o site oficial de qualquer produto, basta clicar nos botões disponíveis 
                        em cada seção acima. Todos os links são seguros e você será redirecionado diretamente 
                        para a página oficial do fabricante.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>

          {/* Seção O Que Fazer Agora */}
          <SectionTracker sectionId="proximos-passos">
            <div className="bg-white py-16">
              <div className="max-w-6xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-block px-6 py-2 bg-green-50 rounded-full text-green-600 font-medium text-sm mb-4">
                    Próximos Passos
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">
                    E o que devo fazer agora?
                  </h2>
                  <div className="prose prose-lg mx-auto text-gray-700">
                    <p className="mb-6">
                      Tudo que você precisa fazer é escolher o produto capilar que mais faz sentido para as suas 
                      necessidades, e tomar conforme a recomendação do fabricante.
                    </p>
                    <p className="mb-6">
                      Lembre-se que cada cabelo é único, então é importante:
                    </p>
                    <ul className="text-left space-y-3 mb-8">
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Seguir corretamente a posologia indicada na embalagem</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Manter uma alimentação equilibrada rica em nutrientes para os cabelos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Beber bastante água ao longo do dia</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Evitar uso excessivo de calor e produtos químicos agressivos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>Manter o uso consistente para melhores resultados</span>
                      </li>
                    </ul>
                    <p className="text-green-900 font-medium">
                      Escolha o produto que melhor atende suas necessidades capilares e comece sua jornada para cabelos mais fortes e saudáveis hoje mesmo!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTracker>
        </div>
      </div>
    </section>
  );
};

export default RankingSection; 