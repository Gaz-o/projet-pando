import "./routage.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Compte from "../../view/compte/compte.js";
import Edition from "../../view/compte/edition/edition.js"
import Postcrea from "../../view/post/creaPost/creaPost.js";
import Home from "../../view/compte/connexion.js";
import MaPage from "../../view/maPage/maPage.js";
import Nourrir from "../../view/feed/feed.js";
import Header from "../header/header";
import { isUserLoggedIn } from "../../lib/social-network-library-master";

function Routage () {
  
  console.log(isUserLoggedIn());

  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route path="/compte">
            {isUserLoggedIn() === true ? (<Edition/>,<Compte />) : <Redirect to="/" />}
          </Route>
          <Route path="/feed">
            <Nourrir />
          </Route>
          <Route path="/creaPost">
            {isUserLoggedIn() === true ? <Postcrea /> : <Redirect to="/" />}
          </Route>
          <Route path="/maPage">
            {isUserLoggedIn() === true ? <MaPage /> : <Redirect to="/" />}
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