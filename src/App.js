import React, { useEffect, useState } from "react";
import { GlobalStyle } from "./components/GlobalStyle";
import { Home } from "./components/Main/Homepage/Home";
import "../src/assets/css/scrollbar.css";
import "../src/assets/css/linkRouter.css";
import { Header } from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import Series from "./components/Main/SeriesPage/Series";
import MoviesPage from "./components/Main/MoviesPage/MoviesPage";
import PopularPage from "./components/Main/PopularPage/PopularPage";
import SearchPage from "./components/Main/SearchPage/SearchPage";
import { SearchProvider } from "./contexts/SearchContext";
import { DisplayProvider } from "./contexts/DisplayHomePageContext";
import InitialLoad from "./components/Main/Homepage/InitialLoad";

function App() {

  const [isDisplayed, setIsDisplayed] = useState(true);
  const [isDisplayed1, setIsDisplayed1] = useState(false);

  useEffect(() => {


    setInterval(() => {
      setIsDisplayed(false);
    }, 2700);


    setInterval(() => {
      setIsDisplayed1(true);
    }, 2700);

  }, []);


  return (
    <Router>
      <GlobalStyle />

      <SearchProvider>

      {isDisplayed1 &&
              <>
             
             <Header />
              </>
            }
     

        <Switch>
          <Route exact path="/">
        
          {isDisplayed &&
              <>
                <InitialLoad />
            
              </>
            }

          {isDisplayed1 &&
              <>
             
                <Home />
              </>
            }

       
               
         
          </Route>

          <Route exact path="/series">
            <Series />
          </Route>
          <Route exact path="/movies">
            <MoviesPage />
          </Route>
          <Route exact path="/popular">
            <PopularPage />
          </Route>
          <Route exact path="/resultado-de-busca">
            <SearchPage />
          </Route>
        </Switch>
      </SearchProvider>
    </Router>
  );
}

export default App;
