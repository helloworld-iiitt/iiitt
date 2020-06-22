import React from "react";
import Loadable from "react-loadable";
import { css } from "@emotion/core";
import { ScaleLoader } from "react-spinners";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from './pages/pagenotfound/index'

const override = css`
  display: inline;
  margin-top: 0 auto;
  border-color: red;
`;
function App() {
  const loading = (
    <div className="sweet-loading">
      <ScaleLoader
        css={override}
        sizeUnit={"px"}
        color={"#3f51b5"}
        size={80}
        height={35}
        width={12}
        radius={2}
        loading={true}
      />
      <div style={{ fontSize: "30px" }}>Loading...</div>
    </div>
  );

  const Home = Loadable({
    loader: () => import("./pages/home/index"),
    loading: () => loading,
  });

  const About = Loadable({
    loader: () => import("./pages/about/index"),
    loading: () => loading,
  });

  const Faculty = Loadable({
    loader: () => import("./pages/faculty/index"),
    loading: () => loading,
  });

  const Staff = Loadable({
    loader: () => import("./pages/staff/index"),
    loading: () => loading,
  });

  const AdmissionProcedure = Loadable({
    loader: () => import("./pages/admissionprocedure/index"),
    loading: () => loading,
  });

  const AdmissionFeeStructure = Loadable({
    loader: () => import("./pages/admissionfeestructure/index"),
    loading: () => loading,
  });

  const AdmissionForms = Loadable({
    loader: () => import("./pages/admissionforms/index"),
    loading: () => loading,
  });

  const AntiRagging = Loadable({
    loader: () => import("./pages/antiragging/index.js"),
    loading: () => loading,
  });

  const AdmissionContact = Loadable({
    loader: () => import("./pages/admissioncontact/index"),
    loading: () => loading,
  });

  return (
    <BrowserRouter history={window.history} basename={process.env.PUBLIC_URL}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faculty" component={Faculty} />
        <Route path="/staff" component={Staff} />
	      <Route path="/admission_procedure" component={AdmissionProcedure} />
	      <Route path="/admission_fee_structure" component={AdmissionFeeStructure} />
	      <Route path="/admission_forms" component={AdmissionForms} />
	      <Route path="/anti_ragging_committee" component={AntiRagging} />
	      <Route path="/admission_contact" component={AdmissionContact} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
