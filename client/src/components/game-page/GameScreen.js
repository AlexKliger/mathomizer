import Question from './Question'
import { submitAnswer } from '../../util/api'

const GameScreen = ({ game, setGame, playerId }) => {
  return (
    <section className="game-screen">
      <Question question={game.questions[game.currentQuestion].question} />

      <ul className="answer-choices">
        {game.questions[game.currentQuestion].choices.map((choice, key) => (
          <li key={key}>
            <button
              className={`answer-choices__choice font-size--extra-large ${game.questions[game.currentQuestion].submittedAnswers[playerId] === key ? 'answer-choices__choice--selected' : ''}`}
              onClick={async () => setGame(await submitAnswer(game.questions[game.currentQuestion]._id, playerId, key))}
            >
              {choice}
            </button>
          </li>
        ))}   
      </ul>

    </section>
  )
}

export default GameScreen