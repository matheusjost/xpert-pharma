import React from 'react'
import { ThumbsUp, AlertCircle, Repeat } from 'lucide-react'
import Button from '@components/common/Button'
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
        <div
          className={`p-5 rounded-lg mb-6 font-bold flex items-center border ${
            result === 'Tratar'
              ? 'bg-green-50 border-green-200 text-green-700'
              : 'bg-amber-50 border-amber-200 text-amber-700'
          }`}
        >
          {result === 'Tratar' ? (
            <>
              <ThumbsUp className='mr-3' size={24} /> Tratar: O paciente pode
              receber recomendação de tratamento do farmacêutico.
            </>
          ) : (
            <>
              <AlertCircle className='mr-3' size={24} /> Encaminhar: O paciente
              deve ser encaminhado para avaliação médica especializada.
            </>
          )}
        </div>
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
