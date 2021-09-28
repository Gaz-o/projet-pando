import "./routage.css";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Compte from "../../view/compte/compte";
import Postcrea from "../../view/post/creaPost/creaPost";
import Home from "../../view/compte/connexion";
import MaPage from "../../view/maPage/maPage";


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
                <Feed />
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
};

export default Routage;