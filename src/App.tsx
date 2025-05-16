import React, { useState, useEffect } from 'react'
import { Activity, CheckCircle } from 'lucide-react'
import { InferenceEngine } from './features/inferencia/services/InferenceEngine.ts'
import type {
  Attribute,
  UserResponse
} from './features/inferencia/models/types.ts'
import { attributes } from './features/inferencia/data/attributes.ts'
import { rules } from './features/inferencia/data/rules.ts'
import Question from './features/inferencia/components/Question.tsx'
import Result from './features/inferencia/components/Result.tsx'
import Footer from './components/layout/Footer.tsx'
import Header from './components/layout/Header.tsx'

const App: React.FC = () => {
  const [userResponses, setUserResponses] = useState<UserResponse[]>([])
  const [currentAttribute, setCurrentAttribute] = useState<Attribute | null>(
    null
  )
  const [result, setResult] = useState<string | null>(null)
  const [engine] = useState(new InferenceEngine(attributes, rules))
  const [history, setHistory] = useState<
    { question: string; answer: string }[]
  >([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Inicializa o sistema especialista
    resetSystem()
    // Simulando um breve tempo de carregamento para a experiência do usuário
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Atualiza o motor com as respostas do usuário
    userResponses.forEach((response) => {
      engine.updateFact(response.attributeId, response.value)
    })

    // Tenta chegar a uma conclusão
    const conclusion = engine.forwardChain()
    if (conclusion) {
      setResult(conclusion)
      setCurrentAttribute(null)
    } else {
      // Obtém a próxima pergunta
      const nextAttribute = engine.getNextAttribute(userResponses)
      setCurrentAttribute(nextAttribute)
    }
  }, [userResponses, engine])

  const handleAnswer = (attributeId: string, value: string) => {
    setLoading(true) // Inserido logicamente aqui para simular o carregamento
    // TODO: comunicar com um backend

    setTimeout(() => {
      // Registra a resposta do usuário
      const newResponse: UserResponse = { attributeId, value }
      setUserResponses([...userResponses, newResponse])

      // Adiciona ao histórico
      const attribute = attributes.find((attr) => attr.id === attributeId)
      if (attribute) {
        setHistory([
          ...history,
          {
            question: attribute.pergunta,
            answer: value
          }
        ])
      }

      setLoading(false)
    }, 300)
  }

  const resetSystem = () => {
    // Limpa todos os estados
    setUserResponses([])
    setResult(null)
    setHistory([])
    engine.reset()

    // Pega a primeira pergunta
    const firstAttribute = engine.getNextAttribute([])
    setCurrentAttribute(firstAttribute)
    setLoading(false)
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <Header />

      <main className='flex-grow py-8'>
        <div className='max-w-3xl mx-auto px-6'>
          {loading ? (
            <div className='flex justify-center items-center py-20'>
              <div className='animate-pulse flex flex-col items-center'>
                <div className='h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center'>
                  <Activity size={24} className='text-white' />
                </div>
                <p className='mt-3 text-teal-600'>Processando...</p>
              </div>
            </div>
          ) : result ? (
            <Result result={result} onReset={resetSystem} history={history} />
          ) : currentAttribute ? (
            <div>
              <div className='bg-white p-4 rounded-lg shadow-sm mb-6'>
                <div className='flex items-center text-teal-700'>
                  <CheckCircle size={18} className='mr-2' />
                  <p className='text-sm font-medium'>
                    {userResponses.length === 0
                      ? 'Por favor, responda às perguntas abaixo para realizar a avaliação.'
                      : `Pergunta ${userResponses.length + 1} de até 9`}
                  </p>
                </div>
              </div>

              <Question attribute={currentAttribute} onAnswer={handleAnswer} />

              {history.length > 0 && (
                <div className='mt-6 bg-white p-5 rounded-lg border border-gray-200 shadow-sm'>
                  <h3 className='text-gray-700 font-semibold mb-3 pb-2 border-b'>
                    Respostas Anteriores:
                  </h3>
                  <div className='space-y-2'>
                    {history.map((item, index) => (
                      <div
                        key={index}
                        className='flex pb-2 text-sm border-b border-gray-100 last:border-0 last:pb-0'
                      >
                        <div className='text-gray-500 mr-2 w-5 flex-shrink-0'>
                          {index + 1}.
                        </div>
                        <div>
                          <div className='text-gray-600 font-medium'>
                            {item.question}
                          </div>
                          <div className='text-teal-600 mt-1'>
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className='text-center py-10 text-gray-600'>
              <p>Iniciando sistema de avaliação...</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
