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
import InitialLoad from "./components/Main/Homepage/InitialLoad";
import ComingSoonPage from "./components/Main/ComingSoonPage/ComingSoonPage";
import TopRated from "./components/Main/TopRated/TopRated";
import Page404 from "./components/Page404/Page404";
import ListPage from "./components/Main/ListPage/ListPage";
import ListPageDois from "./components/Main/ListPage/ListPage2";
import { ListProvider } from "./contexts/UserListContext";
import { Footer } from "./components/Footer/Footer";


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
      <ListProvider>
        <SearchProvider>
          <Header />
        
          <Switch>
            <Route exact path="/">
              {isDisplayed && (
                <>
                  <InitialLoad />
                </>
              )}

              {isDisplayed1 && (
                <>
                  <Home />
                </>
              )}
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
            <Route exact path="/em-breve">
              <ComingSoonPage />
            </Route>
            <Route exact path="/bem-avaliados">
              <TopRated />
            </Route>
            <Route exact path="/lista/1">
              <ListPage />
             
            </Route>
            <Route exact path="/lista/2">
              <ListPageDois />
             
            </Route>
            <Route>
              <Page404 />
            </Route>
           
          </Switch>

          <Footer />
        </SearchProvider>

      </ListProvider>
     
    </Router>
  );
}

export default App;
