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

  const Notices = Loadable({
    loader: () => import("./pages/notices/index"),
    loading: () => loading,
  });

  const Tenders = Loadable({
    loader: () => import("./pages/tenders/index"),
    loading: () => loading,
  });

  const Programs = Loadable({
    loader: () => import("./pages/programs/index"),
    loading: () => loading,
  });

  const Departments = Loadable({
    loader: () => import("./pages/departments/index"),
    loading: () => loading,
  });

  const Curriculum = Loadable({
    loader: () => import("./pages/curriculum/index"),
    loading: () => loading,
  });

  const Calendar = Loadable({
    loader: () => import("./pages/calendar/index"),
    loading: () => loading,
  });

  const Holidays = Loadable({
    loader: () => import("./pages/holidays/index"),
    loading: () => loading,
  });

  const Undergraduate = Loadable({
    loader: () => import("./pages/undergraduate/index"),
    loading: () => loading,
  });

  const Faq = Loadable({
    loader: () => import("./pages/faqs/index"),
    loading: () => loading,
  });

  const Festivals = Loadable({
    loader: () => import("./pages/festivals/index"),
    loading: () => loading,
  })

  const Clubs = Loadable({
    loader: () => import("./pages/clubs/index"),
    loading: () => loading,
  })

  const ContactUs = Loadable({
    loader: () => import("./pages/contactus/index"),
    loading: () => loading,
  })

  const BoG = Loadable({
    loader: () => import("./pages/bog/index"),
    loading: () => loading,
  })

  const Senate = Loadable({
    loader: () => import("./pages/senate/index"),
    loading: () => loading,
  })

  const Fc = Loadable({
    loader: () => import("./pages/fc/index"),
    loading: () => loading,
  })

  const BWC = Loadable({
    loader: () => import("./pages/bwc/index"),
    loading: () => loading,
  })

  const RTI = Loadable({
    loader: () => import("./pages/rti/index"),
    loading: () => loading,
  })

  const Partners = Loadable({
    loader: () => import("./pages/partners/index"),
    loading: () => loading,
  })

  const Director = Loadable({
    loader: () => import("./pages/director/index"),
    loading: () => loading,
  })

  const Registrar = Loadable({
    loader: () => import("./pages/registrar/index"),
    loading: () => loading,
  })

  const GenderData = Loadable({
    loader: () => import("./pages/genderdata/index"),
    loading: () => loading,
  })

  const Vla = Loadable({
    loader: () => import("./pages/vla/index"),
    loading: () => loading,
  })

  const VlaRegistration = Loadable({
    loader: () => import("./pages/vlaregistration/index"),
    loading: () => loading,
  })

  const VlaResources = Loadable({
    loader: () => import("./pages/vlaresources/index"),
    loading: () => loading,
  })

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
	<Route path="/general" component={Notices} />
	<Route path="/tenders" component={Tenders} />
	<Route path="/programs" component={Programs} />
	<Route path="/departments" component={Departments} />
	<Route path="/curriculum" component={Curriculum} />
	<Route path="/calendar" component={Calendar} />
	<Route path="/holidays" component={Holidays} />
	<Route path="/undergraduate" component={Undergraduate} />
	<Route path="/faq" component={Faq} />
	<Route path="/festivals" component={Festivals} />
	<Route path="/clubs" component={Clubs} />
	<Route path="/contactus" component={ContactUs} />
	<Route path="/bog" component={BoG} />
	<Route path="/senate" component={Senate} />
	<Route path="/fc" component={Fc} />
	<Route path="/bwc" component={BWC} />
	<Route path="/rti" component={RTI} />
	<Route path="/industry_partners" component={Partners} />
	<Route path="/director" component={Director} />
	<Route path="/registrar" component={Registrar} />
	<Route path="/genderwisedata" component={GenderData} />
	<Route path="/vla" component={Vla} />
	<Route path="/vla_registration" component={VlaRegistration} />
	<Route path="/vla_resources" component={VlaResources} />
	<Route path="/*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
