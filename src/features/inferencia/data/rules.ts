import type { Rule } from '../models/types'

export const rules: Rule[] = [
  // Regra 1
  {
    id: '1',
    conditions: [{ attributeId: 'tempo', value: 'Mais de quatro semanas' }],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 2
  {
    id: '2',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value: 'Dor lombar intensa relacionada à atividade física'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 3
  {
    id: '3',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Dor intensa, paciente não consegue realizar tarefas diárias'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 4
  {
    id: '4',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Decorrente de trauma ou acidente' }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 5
  {
    id: '5',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Nenhum' },
      {
        attributeId: 'fatores',
        value: 'Paciente com dificuldade de locomoção ou acamado'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 6
  {
    id: '6',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Nenhum' },
      { attributeId: 'fatores', value: 'Nenhum' },
      {
        attributeId: 'sintomas',
        value: 'Apresenta sintomas de atenção associados'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 7
  {
    id: '7',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Nenhum' },
      { attributeId: 'fatores', value: 'Nenhum' },
      { attributeId: 'sintomas', value: 'Não apresenta sintomas associados' },
      { attributeId: 'perfil', value: 'Possui um perfil de alerta' }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 8
  {
    id: '8',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Nenhum' },
      { attributeId: 'fatores', value: 'Nenhum' },
      { attributeId: 'sintomas', value: 'Não apresenta sintomas associados' },
      { attributeId: 'perfil', value: 'Não possui um perfil de alerta' },
      {
        attributeId: 'historiaClinica',
        value:
          'Possui condição de saúde que predispõe ou agrava o sinal/sintoma'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 9
  {
    id: '9',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Nenhum' },
      { attributeId: 'fatores', value: 'Nenhum' },
      { attributeId: 'sintomas', value: 'Não apresenta sintomas associados' },
      { attributeId: 'perfil', value: 'Não possui um perfil de alerta' },
      {
        attributeId: 'historiaClinica',
        value:
          'Nenhuma condição de saúde que predispõe ou agrava o sinal/sintoma'
      },
      {
        attributeId: 'historiaFarmacoterapeutica',
        value:
          'Histórico de uso prolongado de corticosteroides. Tratamentos prévios ou concomitantes, com falha terapêutica ou reações adversas'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Encaminhar' }
  },
  // Regra 10
  {
    id: '10',
    conditions: [
      { attributeId: 'tempo', value: 'Menos que quatro semanas' },
      {
        attributeId: 'caracteristicas',
        value:
          'Dor lombar Inferior relacionada à atividade física ou má postura'
      },
      {
        attributeId: 'gravidade',
        value: 'Leve ou Moderada, paciente consegue realizar tarefas diárias'
      },
      { attributeId: 'ambiente', value: 'Nenhum' },
      { attributeId: 'fatores', value: 'Nenhum' },
      { attributeId: 'sintomas', value: 'Não apresenta sintomas associados' },
      { attributeId: 'perfil', value: 'Não possui um perfil de alerta' },
      {
        attributeId: 'historiaClinica',
        value:
          'Nenhuma condição de saúde que predispõe ou agrava o sinal/sintoma'
      },
      {
        attributeId: 'historiaFarmacoterapeutica',
        value: 'Sem histórico relevante'
      }
    ],
    conclusion: { attributeId: 'resultado', value: 'Tratar' }
  }
]
