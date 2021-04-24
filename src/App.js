import { useState } from 'react';
import { Container, CssBaseline} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  lightBlue,
  deepPurple,
  deepOrange
} from "@material-ui/core/colors";
import './App.css';
import s from './styles.module.css'
import Header from './components/Header';
import Routes from './routes/Routes';
import darkImg from './img/darkImg.png'
import lightImg from './img/lightImg.png'



export default function App() {
  const localTheme = JSON.parse(localStorage.getItem('theme'))
  const theme = localTheme === null ? false : localTheme
  const [darkState, setDarkState] = useState(theme)

  const palletType = darkState ? "dark" : "light"
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500]
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500]
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  })

  const handleThemeChange = () => {
    JSON.stringify(localStorage.setItem('theme', !darkState))
    setDarkState(!darkState);
  }

  return <div className='layout'>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>

      <Container>
        <Header darkState={darkState} handleThemeChange={handleThemeChange}/>
        <Routes />
      </Container>

      {darkState
        ? <img className={s.darkImg} src={darkImg} alt='Dart Waider' />
        : <img className={s.lightImg} src={lightImg} alt='Obi Wan Kenobi' />
      }
    </ThemeProvider>
  </div>
}


