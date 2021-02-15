import { Container } from './styles';
import Logo from '../../assets/logo.svg';

const Landing = () => {
  return (
    <Container>
        <img src={Logo} alt="DuckDuckGo Logo" />
        <h1>DuckDuckGo</h1>
    </Container>
  );
};

export default Landing;
