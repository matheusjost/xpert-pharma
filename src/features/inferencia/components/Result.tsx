import Button from '@components/common/Button'
import { Repeat } from 'lucide-react'
import React from 'react'
import type { ResultProps } from '../models/types.ts'

const Result: React.FC<ResultProps> = ({ result, history, onReset }) => {
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      {/* cabeçalho */}
      <div className='bg-teal-600 text-white p-4'>
        <h2 className='text-2xl font-bold text-center'>
          Resultado da Avaliação Clínica
        </h2>
        <p className='text-center text-teal-100'>
          Data: {date} | Hora: {time}
        </p>
      </div>
      {/* corpo */}
      <div className='p-6'>
        {result === 'Tratar' ? (
          <div className='flex flex-col md:flex-row gap-4 mb-6'>
            <div className='p-5 rounded-lg font-bold border bg-green-50 border-green-200 text-green-700 w-full md:w-1/2'>
              <h3 className='text-sm text-center mb-2'>TRATAMENTO NÃO FARMACOLÓGICO</h3>
              <p className='font-normal'>As medidas não farmacológicas para dor lombar apresentam
                limitações quanto a sua robustez na literatura, contudo incluem:</p>
              <ul className='list-disc pl-5 font-normal'>
                <li>Utilizar compressa quente no local da dor.</li>
                <li>Acupuntura.</li>
                <li className='font-bold'>
                  Evitar ficar em repouso ou acamado (manter uma vida ativa – exercícios regulares, alongamento, exercícios laborais).
                </li>
              </ul>
            </div>
            <div className='p-5 rounded-lg font-bold border bg-green-50 border-green-200 text-green-700 w-full md:w-1/2'>
              <h3 className='text-sm text-center mb-2'>TRATAMENTO FARMACOLÓGICO</h3>
              <ul className='list-disc pl-5 font-normal'>
                <li>Os principais medicamentos isentos de prescrição para o tratamento da dor lombar são:
                  AINEs (ibuprofeno, naproxeno e diclofenaco tópico); analgésicos (paracetamol);
                  associações de relaxantes musculares e
                  analgésicos (paracetamol + carisoprodol + cafeína; dipirona monoidratada + citrato de orfenadrina + cafeína).</li>
                <li>AINEs de uso oral têm melhor perfil de efetividade.</li>
                <li>Paracetamol é preferido em contraindicações aos AINEs.</li>
              </ul>
              <p className='text-xs mt-2'>
                <strong>Atenção:</strong> este algoritmo trata apenas de medicamentos isentos de prescrição médica.
              </p>
            </div>
          </div>
        ) : (
          <div
            className={`p-5 rounded-lg font-bold border bg-amber-50 border-amber-200 text-amber-700 w-full`}
          >
            <h3 className='text-sm text-center mb-2'>ENCAMINHAR</h3>
            <p className='font-normal'>O paciente
              deve ser encaminhado para avaliação médica especializada.</p>
          </div>
        )}
        {/* histórico */}
        <div className='mb-6'>
          <h3 className='text-lg font-semibold mb-3 text-gray-700 border-b pb-2'>
            Resumo da Avaliação:
          </h3>
          <div className='bg-gray-50 p-4 rounded-lg'>
            <table className='w-full'>
              <tbody>
                {history.map((item, i) => (
                  <tr
                    key={i}
                    className='border-b border-gray-100 last:border-0'
                  >
                    <td className='py-2 text-gray-600 font-medium pr-4 align-top'>
                      {item.question}
                    </td>
                    <td className='py-2 text-gray-700'>{item.answer}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* botão reset */}
        <div className='text-center'>
          <Button onClick={onReset}>
            <Repeat className='mr-2' size={18} /> Nova Avaliação
          </Button>
        </div>
      </div>
      <div className='bg-gray-50 p-4 text-sm text-gray-500 text-center border-t'>
        Este sistema é um apoio à decisão clínica e não substitui a avaliação de
        um profissional de saúde.
      </div>
    </div>
  )
}

export default Result
