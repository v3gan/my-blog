import React, { Component } from "react";
import { 
  BrowserRouter as Router, 
  Route,
  Routes 
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArtilclesListPage";
import ArticlePage from "./pages/ArticlePage";
import "./App.css";
import NavBar from "./NavBar";
import NotFoundPage from "./pages/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/" element={<HomePage />} exact />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles-list" element={<ArticlesListPage />} />
              <Route path="/article/:name" element={<ArticlePage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
