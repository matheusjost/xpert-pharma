import React from 'react'
import { Activity } from 'lucide-react'

const LoadingIndicator: React.FC = () => (
  <div className='flex justify-center items-center py-20'>
    <div className='animate-pulse flex flex-col items-center'>
      <div className='h-12 w-12 bg-teal-500 rounded-full flex items-center justify-center'>
        <Activity size={24} className='text-white' />
      </div>
      <p className='mt-3 text-teal-600'>Processando...</p>
    </div>
  </div>
)

export default LoadingIndicator
