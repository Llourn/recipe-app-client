import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Recipes from "./components/Recipes";
import Mealplan from "./components/Mealplan";
import RecipeForm from "./components/RecipeForm";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayRecipe from "./components/DisplayRecipe";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main flow">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Recipes">
              <Recipes />
            </Route>
            <Route exact path="/RecipeForm">
              <RecipeForm />
            </Route>
            <Route exact path="/Mealplan">
              <Mealplan />
            </Route>
            <Route path="/recipes/:id">
              <DisplayRecipe />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
