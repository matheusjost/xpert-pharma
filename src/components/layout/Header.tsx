import React from 'react'
import { Activity } from 'lucide-react'

const Header: React.FC = () => (
  <header className='bg-teal-700 text-white shadow-md'>
    <div className='max-w-4xl mx-auto py-4 px-6 flex flex-col items-center'>
      <div className='flex items-center'>
        <Activity size={28} className='mr-3' />
        <h1 className='text-2xl font-bold'>
          Sistema Especialista para Avaliação de Dor Lombar
        </h1>
      </div>
      <p className='text-teal-100 mt-1'>
        Ferramenta de apoio à decisão clínica
      </p>
    </div>
  </header>
)

export default Header
