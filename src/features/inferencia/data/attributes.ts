import type { Attribute } from '../models/types'

export const attributes: Attribute[] = [
  {
    id: 'tempo',
    name: 'Tempo',
    pergunta: 'Há quanto tempo você tem os sintomas?',
    valores: ['Menos que quatro semanas', 'Mais de quatro semanas']
  },
  {
    id: 'caracteristicas',
    name: 'Características',
    pergunta: 'Como você caracteriza sua dor lombar?',
    valores: [
      'Dor lombar Inferior relacionada à atividade física ou má postura',
      'Dor lombar intensa relacionada à atividade física'
    ]
  },
  {
    id: 'gravidade',
    name: 'Gravidade/Intensidade',
    pergunta: 'Qual a gravidade da sua dor?',
    valores: [
      'Leve ou Moderada, paciente consegue realizar tarefas diárias',
      'Dor intensa, paciente não consegue realizar tarefas diárias'
    ]
  },
  {
    id: 'ambiente',
    name: 'Ambiente/Situação',
    pergunta: 'A dor está relacionada a alguma situação específica?',
    valores: ['Nenhum', 'Decorrente de trauma ou acidente']
  },
  {
    id: 'fatores',
    name: 'Fatores',
    pergunta: 'Existe algum fator que agrava sua condição?',
    valores: ['Nenhum', 'Paciente com dificuldade de locomoção ou acamado']
  },
  {
    id: 'sintomas',
    name: 'Sintomas',
    pergunta: 'Você apresenta outros sintomas associados?',
    valores: [
      'Não apresenta sintomas associados',
      'Apresenta sintomas de atenção associados'
    ]
  },
  {
    id: 'perfil',
    name: 'Perfil',
    pergunta: 'Você possui algum perfil de alerta?',
    valores: ['Não possui um perfil de alerta', 'Possui um perfil de alerta']
  },
  {
    id: 'historiaClinica',
    name: 'História Clínica',
    pergunta:
      'Você possui alguma condição de saúde que possa estar relacionada?',
    valores: [
      'Nenhuma condição de saúde que predispõe ou agrava o sinal/sintoma',
      'Possui condição de saúde que predispõe ou agrava o sinal/sintoma'
    ]
  },
  {
    id: 'historiaFarmacoterapeutica',
    name: 'História Farmacoterapêutica',
    pergunta: 'Você possui histórico de uso de medicamentos relevante?',
    valores: [
      'Sem histórico relevante',
      'Histórico de uso prolongado de corticosteroides. Tratamentos prévios ou concomitantes, com falha terapêutica ou reações adversas'
    ]
  },
  {
    id: 'resultado',
    name: 'Resultado',
    pergunta: '',
    valores: ['Tratar', 'Encaminhar']
  }
]
