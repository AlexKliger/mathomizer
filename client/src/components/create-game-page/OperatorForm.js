import { useCallback } from 'react'
import Checkbox from '../core/Checkbox'

const NUMBER = {
    INTEGER: 'integer',
    DECIMAL: 'decimal',
    FRACTION: 'fraction'
}

const OPERATOR = {
    PLUS: '+',
    MINUS: '-',
    TIMES: 'x',
    DIVIDE_BY: '/'
}

const OperatorForm = ({ operator, setOperator, leftNumType, rightNumType }) => {
    return (
        <section className="config-form config-form--operator">
            <div className="config-form__selector">
                <label htmlFor="operator">
                    Operator
                </label>
                <select
                    className="font-size--medium"
                    value={operator.type}
                    name="operator"
                    id="operator"
                    onChange={e => setOperator({...operator, type: e.target.value})}>
                    {Object.values(OPERATOR).map((type, key) => (
                        <option value={type} key={key}>{type}</option>
                    ))}
                </select>
            </div>

            <div className="config-form__options">
                {(operator.type === OPERATOR.PLUS ||
                operator.type === OPERATOR.MINUS ||
                operator.type === OPERATOR.TIMES) &&
                <Checkbox
                    label="Regrouping"
                    handleChange={e => setOperator({...operator, regrouping: e.target.value})}
                />}

                {operator.type === OPERATOR.DIVIDE_BY &&
                <Checkbox
                    label="Has remainder"
                    handleChange={e => setOperator({...operator, hasRemainder: e.target.value})}
                />}

                {leftNumType === NUMBER.FRACTION && rightNumType === NUMBER.FRACTION &&
                <Checkbox
                    label="Common denominators"
                    handleChange={e => setOperator({...operator, commonDenominators: e.target.value})}
                />
                }

                <label>
                    Answer format
                    <select
                        style={{"marginLeft": "0.5rem"}}
                        className="font-size--medium"
                        onChange={e => setOperator({...operator, answerFormat: e.target.value})}
                        value={operator.answerFormat}
                    >
                        <option>decimal</option>
                        <option>ratio</option>
                    </select>
                </label>

            </div>

        </section>
    )
}

export default OperatorForm