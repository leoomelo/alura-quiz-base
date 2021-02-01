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
import Button from '../src/components/Button';
import Input from '../src/components/Input';

// eslint-disable-next-line no-unused-vars
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
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
              <h1>Javascript Quiz:</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function (e) {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Input
                  name="username"
                  placeholder="Diz aí o seu nome"
                  onChange={(e) => { setName(e.target.value); }}
                  value={name}
                />
                <div>
                  <Button type="submit" disabled={name.length === 0}>
                    {`Jogar ${name}`}
                  </Button>
                </div>
              </form>
            </Widget.Content>
          </Widget>
        </QuizContainer>
        <Footer />
        <GitHubCorner projectUrl="https://github.com/leoomelo" />
      </QuizBackground>
    </>
  );
}
