import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Route, Switch } from 'react-router';
// import { ConnectedRouter } from 'connected-react-router';

// import configureStore, { history } from './store/index';
// import { INITIAL_STATE } from './store/root';

// import Index from './routes/index';
// import Pokemon from './routes/pokemon';

// import Header from './components/header';

// import utilStyles from './utility.module.css';

// const store = configureStore(INITIAL_STATE);

const App = () => (
  // <Provider store={store}>
  //   <ConnectedRouter history={history}>
  //     <Header />
  //     <div className={utilStyles.wideBannerSection} />
  //     <Switch>
  //       <Route exact path="/" component={Index} />
  //       <Route exact path="/pokemon/:id" component={Pokemon} />
  //     </Switch>
  //   </ConnectedRouter>
  // </Provider>
  <div>
    Hola vite, se limo Rails o webpack
  </div>
);
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});

export default App;
