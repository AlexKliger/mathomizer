import { useCallback } from 'react'
import { submitAnswer } from '../../util/api'

const AnswerChoices = ({ question, setGame, playerId }) => {
  const choiceIsSelected = useCallback((choiceIndex) => {
    const submittedAnswer = question.submittedAnswers[playerId]
    if (submittedAnswer) {
      return submittedAnswer.answerIndex === choiceIndex
    }

    return false
  }, [question, playerId])

  return (
    <ul className="answer-choices">
    {question.choices.map((choice, key) => (
      <li key={key}>
        <button
          className={`answer-choices__choice font-size--extra-large
            ${choiceIsSelected(key) && "answer-choices__choice--selected"}`}
          onClick={async () => setGame(await submitAnswer(question._id, playerId, key))}
        >
          {choice}
        </button>
      </li>
    ))}   
    </ul>
  )
}

export default AnswerChoices