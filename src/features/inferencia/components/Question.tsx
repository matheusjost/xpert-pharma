import React, { type JSX } from 'react'
import type { QuestionProps } from '../models/types'
import {
  Clock,
  Activity,
  AlertCircle,
  FileText,
  FilePlus,
  User,
  Heart,
  CheckCircle
} from 'lucide-react'
import Button from '@components/common/Button'

const icons: Record<string, JSX.Element> = {
  tempo: <Clock size={28} className='text-teal-600' />,
  caracteristicas: <Activity size={28} className='text-teal-600' />,
  gravidade: <AlertCircle size={28} className='text-teal-600' />,
  ambiente: <FileText size={28} className='text-teal-600' />,
  fatores: <FilePlus size={28} className='text-teal-600' />,
  sintomas: <Activity size={28} className='text-teal-600' />,
  perfil: <User size={28} className='text-teal-600' />,
  historiaClinica: <Heart size={28} className='text-teal-600' />,
  historiaFarmacoterapeutica: <FileText size={28} className='text-teal-600' />
}

const Question: React.FC<QuestionProps> = ({ attribute, onAnswer }) => (
  <div className='bg-white p-6 rounded-lg shadow-md mb-6 border-l-4 border-teal-500'>
    <div className='flex items-center mb-4'>
      {icons[attribute.id] || (
        <CheckCircle size={28} className='text-teal-600' />
      )}
      <h3 className='text-xl font-semibold ml-3 text-gray-700'>
        {attribute.pergunta}
      </h3>
    </div>
    <div className='flex flex-col gap-3'>
      {attribute.valores.map((v) => (
        <Button key={v} onClick={() => onAnswer(attribute.id, v)}>
          {v}
        </Button>
      ))}
    </div>
  </div>
)

export default Question
