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

const App = () => {
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
  const data = {
    user:
    {
      username: 'somebody6999',
      password: 'somepassword',
    },
  };
  const user = fetch('/api/v1/register', {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(login => console.log(login));
  console.log(user);

  return (
    <div>
      Hola vite, se limo Rails o webpack
      <ul>
        <li>
          Esto parece que funca
        </li>
        <img src="https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=21XB&client=byoc&paint=P0B39&fabric=FKCSW&sa=S01SQ,S0249,S02TB,S0302,S0313,S0316,S0319,S0322,S0337,S03AG,S03DZ,S03MC,S0402,S0420,S0423,S0430,S0431,S0473,S0481,S0493,S04WF,S0508,S0534,S0544,S0563,S05A1,S05AS,S0676,S06AC,S06AK,S06UN,S0710,S0715,S0760,S0775&resp=webp&quality=50&BKGND=TRANSPARENT&angle=60&width=750" alt="asd" />
        <li>
          bien ahora aparentemente...
        </li>
      </ul>
    </div>
  );
};
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  );
});

export default App;

// let car = {
//   model: 'X1 Sports Activity Vehicle',
//   vehicle_code = '21XB',
//   versions:
//   [
//     {
//       name: '228i Gran Coupe',
//       MY: 2021,
//       engine: '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
//       drive: 'Front-wheel drive',
//       HP: '228',
//       MPG: '33',
//       accel: '6.6',
//       msrp: 35_400,
//     },
//     {
//       name: '228i xDrive Gran Coupe',
//       MY: 2021,
//       engine: '2.0-liter BMW TwinPower Turbo inline 4-cylinder',
//       drive: 'xDrive, intelligent all-wheel drive',
//       HP: '228',
//       MPG: '31',
//       accel: '6.3',
//       msrp: 37_400,
//     },
//   ],
//   family: ['X1'],
//   img_thumb: 'some route to images',
// };
// let color = 'P0B39';
// let vehicle = '21XB';
// let resp = 'webp';
// let quality = 50;
// let BKGND = 'TRANSPARENT';
// let angle = 60;

// eslint-disable-next-line max-len
// const IMAGELINK = `https://cache.bmwusa.com/cosy.arox?pov=walkaround&brand=WBBM&vehicle=${vehicle}&client=byoc&paint=${color}&fabric=FKCSW&sa=S01SQ,S0249,S02TB,S0302,S0313,S0316,S0319,S0322,S0337,S03AG,S03DZ,S03MC,S0402,S0420,S0423,S0430,S0431,S0473,S0481,S0493,S04WF,S0508,S0534,S0544,S0563,S05A1,S05AS,S0676,S06AC,S06AK,S06UN,S0710,S0715,S0760,S0775&resp=${resp}&quality=${quality}&BKGND=${BKGND}&angle=${angle}`
