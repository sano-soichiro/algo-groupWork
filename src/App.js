//import packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { themes } from './Theme';
import { useState } from 'react';
//import components
import Start from './pages/Start';
import NotFound from './pages/NotFound';
import ResultSuccess from './pages/ResultSuccess';
import ResultFail from './pages/ResultFail';
import Load from './load/load';
import Play from './pages/Play';
import Option from './pages/Option';

function App() {
  let [isTheme , setIsTheme] = useState(themes.original);
  let [isPath, setIsPath] = useState(false);
  const theme = isTheme;
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Start isPath={isPath} setIsPath={setIsPath} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/success" element={<ResultSuccess />} />
          <Route path="/fail" element={<ResultFail />} />
          <Route path="/load" element={<Load isPath={isPath} setIsPath={setIsPath}/>} />
          <Route path="/play" element={<Play />} />
          <Route path="/option" element={<Option isTheme={isTheme} setIsTheme={setIsTheme} />} />
          <Route path="/howto" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


