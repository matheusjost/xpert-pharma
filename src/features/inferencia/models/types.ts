export type AttributeValue = string

export interface Attribute {
  id: string
  name: string
  pergunta: string
  valores: AttributeValue[]
}

export interface Condition {
  attributeId: string
  value: AttributeValue
}

export interface Conclusion {
  attributeId: string
  value: AttributeValue
}

export interface Rule {
  id: string
  conditions: Condition[]
  conclusion: Conclusion
}

export interface UserResponse {
  attributeId: string
  value: AttributeValue
}

export interface QuestionProps {
  attribute: Attribute
  onAnswer: (id: string, v: string) => void
}

export interface ResultProps {
  result: string
  onReset: () => void
  history: { question: string; answer: string }[]
}
