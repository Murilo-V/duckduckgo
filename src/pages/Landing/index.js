import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import SearchIcon from '../../assets/search-icon.svg';

const Landing = () => {

  return (
    <Container>
        <img src={Logo} alt="DuckDuckGo Logo" />
        <h1>DuckDuckGo</h1>

        <form>
          <input type="text"/>
          <img src={SearchIcon} alt="search icon"  />
        </form>
    </Container>
  );
};

export default Landing;