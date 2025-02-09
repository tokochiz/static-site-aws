import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';
import PortfolioDetail from '../components/Portfolio/PortfolioDetail';

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>
      <PortfolioGrid />
    </Layout>
  );
};

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/portfolio/:id" component={PortfolioDetail} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
