import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>Questão 1:</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Let e Const são palavras reservadas do Javascript?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Questão 2:</h1>
          </Widget.Header>
          <Widget.Content> 
            <p>Para que serve método querySelectorAll?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Questão 3:</h1>
          </Widget.Header>
          <Widget.Content> 
            <p>Qual o propósito de método map?</p>
          </Widget.Content>
        </Widget>

      </QuizContainer>
      <Footer />
      <GitHubCorner  projectUrl="https://github.com/leoomelo" />
    </QuizBackground>
  )
}
