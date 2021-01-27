/* eslint-disable func-names */
/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import ButtonForm from '../src/components/Form/Button';

// eslint-disable-next-line no-unused-vars
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const StyledButtonForm = styled.div`
  button {
    background-color: orange;
    width: 100%;
    margin-top: 10%;
    padding: 4%;
    border-radius: 8px;
    border: 0;
    color: white;
  }
`;

const InputQuiz = styled.div`
  input {
    width: 100%;
    padding: 4%;
    background: transparent;
    border-color: gray;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    color: white;
  };
  input:focus {
    background-color: #272303;
    border-width: 1px;
    border-color: gray;
  }
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  // eslint-disable-next-line no-undef
  const [name, setName] = React.useState('');

  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>Questão 1:</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <p>Let e Const são palavras reservadas do Javascript?</p>
                <InputQuiz>
                  <input
                    placeholder="Diz aí o seu nome"
                    onChange={function (e) {
                      setName(e.target.value);
                    }}
                  />
                </InputQuiz>
                <div>
                  <StyledButtonForm>
                    <ButtonForm name={name} />
                  </StyledButtonForm>
                </div>
              </form>
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
        <GitHubCorner projectUrl="https://github.com/leoomelo" />
      </QuizBackground>
    </>
  );
}
