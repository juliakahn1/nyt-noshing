import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignUpFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import RecipesHome from './components/RecipesHome';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
        <Route path="/">
          <RecipesHome />
        </Route>
      </Switch>
    </>
  );
}

export default App;