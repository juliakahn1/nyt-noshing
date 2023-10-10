import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import RecipesHome from './components/RecipesHome';
import RecipeShowPage from './components/RecipeShowPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignUpFormPage} />
        <Route path="/recipe/:recipeId" component={RecipeShowPage}/>
        <Route path="/" component={RecipesHome} />
      </Switch>
    </>
  );
}

export default App;
