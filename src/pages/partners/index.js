import React, { useEffect } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const createStyles = makeStyles({
  container: {
    padding: "1rem 1rem",
  },
  themeText: {
    color: "#2e8b57",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    paddingTop: "1rem",
    fontWeight: "500",
    width: "auto",
    "&:hover": {
      textDecoration: "underline",
      color: "blueviolet",
    },
  },
  sectionText: {
    paddingTop: "0",
  },
  sectionPadding: {
    padding: "1rem 0",
  },
  text: {
    fontSize: "1.3rem",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Partners() {
  useEffect(() => {
    document.getElementsByTagName("title")[0].innerHTML = "Industry Partners";
  }, []);

  useEffect(() => {
    return () => {
      document.getElementsByTagName("title")[0].innerHTML = "IIIT Trichy";
    };
  }, []);

  const classes = createStyles();

  return (
    <div className="page-container">
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span" fontWeight={380}>
              Industry Partners
            </Box>
          </Typography>
          <Typography gutterBottom className={classes.text}>
            Industry partners of IIIT Trichy includes&nbsp;
            <a href="https://www.tcs.com/" target="_blank" className={classes.link}>
              Tata Consultancy Services (TCS)
            </a>
            ,&nbsp;
            <a href="https://www.cognizant.com/" target="_blank" className={classes.link}>
              Cognizant Technology Solutions (CTS).
            </a>
            ,&nbsp;
            <a href="https://www.infosys.com/" target="_blank" className={classes.link}>
              Infosys
            </a>
            ,&nbsp;
            <a href="https://www.ramco.com/" target="_blank" className={classes.link}>
              Ramco Systems
            </a>
            ,&nbsp;
            <a href="https://elcot.in/" target="_blank" className={classes.link}>
              ELCOT
            </a>
            ,&nbsp;
            <a href="https://www.navitaslifesciences.com/" target="_blank" className={classes.link}>
              Navitas (TAKE Solutions)
            </a>
            .
          </Typography>
          <section className={classes.sectionPadding}>
            <Typography gutterBottom className={classes.themeText}>
              <Box component="h2" fontWeight="fontWeightBold">
                Tata Consultancy Services (TCS)
              </Box>
            </Typography>
            <Typography gutterBottom className={classes.text}>
              TCS is one of the largest Indian companies by market
              capitalization ($80 billion). TCS is now placed among the ‘Big 4’
              most valuable IT services brands worldwide. TCS alone generates
              70% dividends of its parent company, Tata Sons. In 2015, TCS is
              ranked 64th overall in the Forbes World's Most Innovative
              Companies ranking, making it both the highest-ranked IT services
              company and the top Indian company. It is the world's 10th largest
              IT services provider by revenue. As of December 2015, it is ranked
              10th on the Fortune India 500 list. On 12 January 2017,
              N.Chandrashekaran was elevated as the chairman for Tata Sons.
            </Typography>
            <Grid gutterBottom>
              <Grid item xs={12} className={classes.logo}>
                <a href="https://tcs.com">
                  <img
                    src={require(`../../images/tcs-logo.svg`)}
                    alt="tcs logo"
                  />
                </a>
              </Grid>
              <Grid item xs={12} className={classes.logo}>
                Logo of TCS, one of the India's leading multinational
                Information Technology (IT) service, consulting and business
                solutions company.
              </Grid>
            </Grid>
          </section>
          <section className={classes.sectionPadding}>
            <Typography gutterBottom className={classes.themeText}>
              <Box component="h2" fontWeight="fontWeightBold">
                Cognizant Technology Solutions (CTS)
              </Box>
            </Typography>
            <Typography gutterBottom className={classes.text}>
              Cognizant is an American multinational corporation that provides
              digital, technology, consulting, and operations services. It is
              headquartered in Teaneck, New Jersey, United States. Cognizant is
              listed in the NASDAQ-100 and the S&P 500 indices. It was founded
              as an in-house technology unit of Dun & Bradstreet in 1994, and
              started serving external clients in 1996. It made an initial
              public offering in 1998, after a series of corporate splits and
              restructures of its parent companies. It was the first software
              services firm listed on the NASDAQ. During the dot com bust, it
              grew by accepting the application maintenance work that the bigger
              players were unwilling to perform. Gradually, it ventured into
              application development, complex systems integration and
              consulting work. Cognizant had a period of fast growth during the
              2000s, becoming a Fortune 500 company in 2011. In 2015, the
              Fortune magazine named it as the world's fourth most admired IT
              services company.
            </Typography>
            <Grid gutterBottom>
              <Grid item xs={12} className={classes.logo}>
                <a href="https://cognizant.com">
                  <img
                    src={require(`../../images/cts-logo.png`)}
                    alt="cts logo"
                  />
                </a>
              </Grid>
              <Grid item xs={12} className={classes.logo}>
                Logo of CTS, an American multinational corporation that provides
                digital, technology, consulting, and operations services.
              </Grid>
            </Grid>
          </section>
          <section className={classes.sectionPadding}>
            <Typography gutterBottom className={classes.themeText}>
              <Box component="h2" fontWeight="fontWeightBold">
                Infosys
              </Box>
            </Typography>
            <Typography gutterBottom className={classes.text}>
              Infosys Limited (formerly Infosys Technologies Limited) is an
              Indian multinational corporation that provides business
              consulting, information technology and outsourcing services. It
              has its headquarters in Bengaluru, India. Infosys is the
              second-largest Indian IT services company by 2016 revenues, and
              the largest employer of H-1B visa professionals in the United
              States. On January 12, 2017, its market capitalisation was $34.38
              Billion.
            </Typography>
            <Grid gutterBottom>
              <Grid item xs={12} className={classes.logo}>
                <a href="https://infosys.com">
                  <img
                    src={require(`../../images/infosys-logo.svg`)}
                    alt="infosys logo"
                  />
                </a>
              </Grid>
              <Grid item xs={12} className={classes.logo}>
                Logo of Infosys Limited, an Indian multinational corporation
                that provides business consulting, information technology and
                outsourcing services.
              </Grid>
            </Grid>
          </section>
          <section className={classes.sectionPadding}>
            <Typography gutterBottom className={classes.themeText}>
              <Box component="h2" fontWeight="fontWeightBold">
                Ramco Systems
              </Box>
            </Typography>
            <Typography gutterBottom className={classes.text}>
              Ramco Systems Limited is a software products and services provider
              incorporated in India. Ramco Systems is a provider of Enterprise
              Resource Planning, Human Capital Management, Logistics and
              Aviation Maintenance & Engineering (M&E) & Maintenance Repair &
              Overhaul (MRO) Software. Customers include Dabur, Kerzner, Norske
              Skog, Mother Dairy, Vopak, Khimji Ramdas, Dynamic Aviation,
              Redtag, MHW,Malaysia Airlines, Emirates, GoAir, Air Tahiti,
              Caribbean Airlines, Hevilift, and others. P.R Venkatarama Raju,
              established Ramco Systems in 1992. Ramco Systems is present in
              India, United States, UK, Germany, Switzerland, Middle East,
              Kenya, Nigeria, South Africa, Australia, New Zealand, Singapore.
            </Typography>
            <Grid gutterBottom>
              <Grid item xs={12} className={classes.logo}>
                <a href="https://ramco.com">
                  <img
                    src={require(`../../images/ramco-logo.png`)}
                    alt="ramco logo"
                  />
                </a>
              </Grid>
              <Grid item xs={12} className={classes.logo}>
                Logo of Ramco Systems Limited, a software products and services
                provider incorporated in India.
              </Grid>
            </Grid>
          </section>
          <section className={classes.sectionPadding}>
            <Typography gutterBottom className={classes.themeText}>
              <Box component="h2" fontWeight="fontWeightBold">
                ELCOT
              </Box>
            </Typography>
            <Typography gutterBottom className={classes.text}>
              The Electronics Corporation of Tamil Nadu Limited (ELCOT) is a
              South Indian, public sector undertaking, established on 21 March
              1977. ELCOT functions to promote, establish and run State Public
              Sector Enterprises for Electronic items; manage, supervise,
              finance, advise, assist, aid or collaborate with any private and
              public associations, firms, companies, enterprises, undertakings,
              institutions, and schemes for the advancement and development of
              electronics and information technology. It is considered the back
              office for the Information Technology Department of the Government
              of Tamil Nadu, and functions to implement the Government's
              E-Governance initiative.
            </Typography>
            <Grid gutterBottom>
              <Grid item xs={12} className={classes.logo}>
                <a href="https://elcot.in">
                  <img
                    src={require(`../../images/elcot-logo.png`)}
                    alt="elcot logo"
                  />
                </a>
              </Grid>
              <Grid item xs={12} className={classes.logo}>
                Logo of ELCOT, which functions to promote, establish and run
                State Public Sector Enterprises for Electronic items.
              </Grid>
            </Grid>
          </section>
          <section className={classes.sectionPadding}>
            <Typography gutterBottom className={classes.themeText}>
              <Box component="h2" fontWeight="fontWeightBold">
                Navitas (TAKE Solutions)
              </Box>
            </Typography>
            <Typography gutterBottom className={classes.text}>
              Navitas, the dedicated life sciences company of TAKE Solutions,
              harnesses the combined knowledge and experience of three legacy
              companies—Ecron Acunova, Navitas, and Intelent—to provide
              end-to-end services and solutions. It help its clients to address
              their most critical problems by bringing together the capabilities
              of a full-service CRO, a technology-led life sciences services
              provider across clinical, regulatory and safety, and a life
              sciences big data services and analytics provider.
            </Typography>
            <Grid gutterBottom>
              <Grid item xs={12} className={classes.logo}>
                <a href="https://navitas.net">
                  <img
                    src={require(`../../images/navitas-logo.png`)}
                    alt="navitas logo"
                  />
                </a>
              </Grid>
              <Grid item xs={12} className={classes.logo}>
                Logo of Navitas Life Sciences, the dedicated life sciences
                company of TAKE Solutions.
              </Grid>
            </Grid>
          </section>
          <section gutterBottom>
            <Typography className={classes.text}>
              The Department of Training and Placement is proposed to bring in
              the services of Industry Partners to help, co-ordinate and arrange
              for campus placement opportunities to the UG and PG students.
              <Box component="span" fontWeight="fontWeightBold">
                The advantage of IIIT Trichy is that Industry Partners are one
                of the stake holders of the Institute. These Industry Partners
                are willing to offer internships to students during their
                studies to enrich their programming skills and application of
                ideas to projects, etc.
              </Box>
            </Typography>
          </section>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
      <Footer />
    </div>
  );
}
