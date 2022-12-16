import logo from './logo.svg';
import './App.css';
import GlobalStyles from './Styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { light } from './Styles/Themes';
import Navigation  from './Components/Navigation';
import Home from './Components/sections/Home';
import About from './Components/sections/About';
import Roadmap from './Components/sections/Roadmap';
import Showcase from './Components/sections/Showcase';
import Team  from './Components/sections/Team';
import Faq from './Components/sections/Faq';
import Footer from './Components/sections/footer';
function App() {
  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={light}>
        <Navigation/>
        <Home />
        <About />
        <Showcase />
        <Team />
        <Faq />
        <Footer />
      </ThemeProvider>
    </>
     
    
  ); 
}

export default App;
