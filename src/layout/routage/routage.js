import "./routage.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Compte from "../../view/compte/compte.js";
import Postcrea from "../../view/post/creaPost/creaPost.js";
import Home from "../../view/compte/connexion.js";
import MaPage from "../../view/maPage/maPage.js";
import Nourrir from "../../view/feed/feed.js";



function Routage () {

  return (
    <Router>
        <div>
          <nav>
            <Link to="/compte">Compte</Link>
            <Link to="/feed">L'arbre foret</Link>
            <Link to="/post">Ma feuille</Link>
            <Link to="/maPage">Ma branche</Link>
          </nav>

          <Switch>
            <Route path="/compte">
                <Compte />
            </Route>
            <Route path="/feed">
                <Nourrir />
            </Route>
            <Route path="/post">
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