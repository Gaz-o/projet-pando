import "./routage.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Edition from "../../view/compte/edition/edition.js"
import Postcrea from "../../view/post/creaPost/creaPost.js";
import Home from "../../view/compte/connexion.js";
import MaPage from "../../view/post/maPage/maPage.js";
import Nourrir from "../../view/post/feed/feed.js";
import Header from "../header/header";

function Routage() {

  /* Routes de react-router-dom */
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/compte">
            <Edition />
          </Route>
          <Route path="/feed">
            <Nourrir />
          </Route>
          <Route path="/creaPost">
            <Postcrea />
          </Route>
          <Route path="/maPage">
            <MaPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routage;