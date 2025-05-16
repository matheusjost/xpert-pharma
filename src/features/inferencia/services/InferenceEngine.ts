import type { Attribute, Rule, UserResponse } from '../models/types'

export class InferenceEngine {
  private attributes: Attribute[]
  private rules: Rule[]
  private workingMemory = new Map<string, string>()

  constructor(attributes: Attribute[], rules: Rule[]) {
    this.attributes = attributes
    this.rules = rules
  }

  updateFact(attributeId: string, value: string) {
    this.workingMemory.set(attributeId, value)
  }

  getFact(attributeId: string): string | undefined {
    return this.workingMemory.get(attributeId)
  }

  forwardChain(): string | null {
    let rulesFired = false

    do {
      rulesFired = false

      for (const rule of this.rules) {
        // Pula se já temos um resultado
        if (this.workingMemory.has('resultado')) {
          break
        }

        // Verifica se todas as condições são satisfeitas
        const conditionsSatisfied = rule.conditions.every(
          (condition) =>
            this.workingMemory.get(condition.attributeId) === condition.value
        )

        if (conditionsSatisfied) {
          // Adiciona conclusão à memória de trabalho
          this.workingMemory.set(
            rule.conclusion.attributeId,
            rule.conclusion.value
          )
          rulesFired = true

          // Se chegamos a uma conclusão final (resultado), retornamos
          if (rule.conclusion.attributeId === 'resultado') {
            return rule.conclusion.value
          }
        }
      }
    } while (rulesFired)

    // Nenhuma conclusão alcançada
    return null
  }

  // Obtém o próximo atributo a ser perguntado com base no conhecimento atual
  getNextAttribute(userResponses: UserResponse[]): Attribute | null {
    // Cria um mapa de atributos que o usuário já forneceu valores
    const answeredAttributes = new Map<string, string>()
    userResponses.forEach((response) => {
      answeredAttributes.set(response.attributeId, response.value)
    })

    // Encontra regras relevantes com base nas respostas atuais
    const relevantRules = this.rules.filter((rule) => {
      return rule.conditions.every((condition) => {
        const userValue = answeredAttributes.get(condition.attributeId)
        return !userValue || userValue === condition.value
      })
    })

    // Encontra atributos necessários para as regras relevantes que ainda não foram respondidas
    const neededAttributes = new Set<string>()
    relevantRules.forEach((rule) => {
      rule.conditions.forEach((condition) => {
        if (!answeredAttributes.has(condition.attributeId)) {
          neededAttributes.add(condition.attributeId)
        }
      })
    })

    // Retorna o primeiro atributo necessário que tem uma pergunta
    for (const attributeId of neededAttributes) {
      const attribute = this.attributes.find((attr) => attr.id === attributeId)
      if (attribute && attribute.pergunta) {
        return attribute
      }
    }

    return null
  }

  reset() {
    this.workingMemory.clear()
  }
}
