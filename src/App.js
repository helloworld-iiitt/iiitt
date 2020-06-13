import React from 'react';
import Loadable from 'react-loadable';
import { css } from '@emotion/core';
import { ScaleLoader } from 'react-spinners';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const override = css`
display:inline;
margin-top: 0 auto;
border-color: red;
`;
function App() {

  const loading=(<div className='sweet-loading'>
   <ScaleLoader css={override}   sizeUnit={"px"}  color={'#3f51b5'} size={80} height={35} width={12}  radius={2} loading={true}/>
  <div style={{fontSize:"30px"}}>Loading...</div>
  </div>)

  const Home = Loadable({
    loader: () => import('./pages/home/index'),
    loading: () =>loading ,
});

  const About = Loadable({
    loader: () => import('./pages/about/index'),
    loading: () => loading
  });
  const BoG = Loadable({
    loader: () => import('./pages/bog/index'),
    loading: () => loading
  });

  return (
    
    <BrowserRouter history={window.history} basename={process.env.PUBLIC_URL}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      
      <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/bog" component={BoG} />
      <Route  path="/*" component={Home}  />

      </Switch>
   
    </BrowserRouter>
  );
}

export default App;
