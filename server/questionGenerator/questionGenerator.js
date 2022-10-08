const { number } = require('mathjs')
const numbers = require('./number')
const operators = require('./operator')

const NUMBER_TYPE = {
    INTEGER: 'integer',
    FRACTION: 'fraction'
}

const OPERATOR = {
    PLUS: '+',
    MINUS: '-',
    TIMES: 'x',
    DIVIDE_BY: '/'
}

// Class that parses JSON objects and instantiates number and operator objects.
class QuestionGenerator {
    leftNum
    rightNum
    operator

    constructor(leftNumConfig, rightNumConfig, operatorConfig) {
        // Route the left number type to appropriate class constructor
        switch (leftNumConfig.type) {
            case NUMBER_TYPE.INTEGER:
                this.leftNum = new numbers.Integer(
                    leftNumConfig.sign,
                    leftNumConfig.digits)
                break
            case NUMBER_TYPE.FRACTION:
                this.leftNum = new numbers.Fraction(
                    leftNumConfig.sign,
                    leftNumConfig.digitsInNum,
                    leftNumConfig.digitsInDen)
                break
        }
        // Route the left number type to appropriate class constructor
        switch (rightNumConfig.type) {
            case NUMBER_TYPE.INTEGER:
                this.rightNum = new numbers.Integer(
                    rightNumConfig.sign,
                    rightNumConfig.digits)
                break
            case NUMBER_TYPE.FRACTION:
                this.rightNum = new numbers.Fraction(
                    rightNumConfig.sign,
                    rightNumConfig.digitsInNum,
                    rightNumConfig.digitsInDen)
                break
        }
        // Route the operator type to appropriate class constructor.
        switch (operatorConfig.type) {
            case OPERATOR.PLUS:
                this.operator = new operators.Plus(this.leftNum, this.rightNum, operatorConfig.regrouping)
                break
            case OPERATOR.MINUS:
                this.operator = new operators.Minus(operatorConfig.regrouping)
                break
            case OPERATOR.TIMES:
                this.operator = new operators.Times(operatorConfig.regrouping)
                break
            case OPERATOR.DIVIDE_BY:
                this.operator = new operators.DivideBy(operatorConfig.regrouping)
                break
            default:
                break
        }
    }

    generateQuestionObject() {
        const text = this.operator.generateQuestionString(this.leftNum, this.rightNum)
        const choices = this.operator.generateAnswerChoices()
        const question = {question: text, answer: this.operator.answerIndex, choices: choices}
        return question
    }
}

module.exports = QuestionGenerator