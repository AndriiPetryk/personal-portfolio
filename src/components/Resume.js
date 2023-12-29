import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  divider: {
    marginTop: "10px",
    marginBottom: "10px",
    borderBottom: "2px solid tan",
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "20rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h3"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Sep 2021- current
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Frontend Developer | Javascript | Typescript | React.js | Redux.js
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Mobilunity
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Cargo tracking system <br/>
            <strong>Technologies:</strong> React.js, Redux, React Query, Next.js, GraphQL, React Testing Library <br/>
            <strong>Responsibilities:</strong> I took part in the development of the micro-frontend architecture of
            applications used in building complex approaches. Developed an internal library of components for reusing in
            different applications. Engaged in the implementation of ready-made design solutions in the component
            library using React/Redux/React Query. Covered the written code with unit tests using tools such as Jest/
            Enzyme/React Testing Library. I reviewed the code of other developers to maintain the quality and approved
            the architecture of code and applications in general. I took part in calls with the team for making mutual
            solutions to lay down the structure of the code and interact with the backend team. I drew up documentation
            on the basis of decisions made on team calls. <br/>
            The decisions that I made when developing the internal library of components allowed me to reduce the time
            that developers spend on rewriting and adding functionality in the process of introducing components into
            new applications (offered them to implement the creation of unified components with maximum flexibility for
            further reuse). <br/>
            My decisions during the development of the micro frontend part of the application allowed me to divide the
            applications into micro parts as much as possible, which allowed developers to create separate parts of the
            application independently of each other and also allowed new team members to start developing parts of
            projects in a short time.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Sep 2020 – Oct 2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Frontend Developer | React.js | Redux | Typescript
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Koyfin
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Financial data and analytics platform for researching stocks; <br/>
            <strong>Technologies:</strong> Frontend development(Typescript, Javascript, React.js/Redux/Rx.js). <br/>
            <strong>Responsibilities:</strong> I took part in the development and maintained the internal system of
            components(Used different approaches for creating reusable components for different parts of the
            application). I processed a large data stream from RESTFul APIs and prepared it for displaying in tables and
            graphs with WebSockets. The approaches that I used when rendering the data that I got from the backend part
            in the view helped to get rid of large delays when loading the page and further made it comfortable for the
            customer to use pages for data analysis.

          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Aug 2016 – Sep 2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Senior Frontend Developer | React.js | Redux
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Agile Fuel
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Employee Reward Management System; <br/>
            <strong>Technologies:</strong> Frontend development(Javascript, React.js/Redux) <br/>
            <strong>Responsibilities:</strong> React/Redux development - in detail:
            Created pages for SPA, and implemented highly loaded parts of the site, for example, implemented tables, and
            their
            optimization for a large amount of data. Optimized pages for mobile devices. <br/>
            Contributed to the development of custom library components. Participated in the development of a wrapper
            for redux,
            which allows the reuse of the exact solutions for different apps without duplication of the code.
          </Typography>
          <Divider className={classes.divider}/>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Exchange and sales system <br/>
            <strong>Technologies:</strong> Blockchain, Stellar Javascript SDK, Node.js, Express, MongoDB, Frontend
            development(Javascript, React.js/Redux) <br/>
            <strong>Responsibilities:</strong> Participate in building the application architecture, and development of
            the cryptocurrency exchange system.
            The biggest advantage of the chosen technology and development approach was excellent application
            performance,
            working without fail with a big number of users, and simultaneous transactions.
          </Typography>
          <Divider className={classes.divider}/>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> e-commerce; <br/>
            <strong>Technologies:</strong> CMS: WordPress and React.js/Redux for front-end development <br/>
            <strong>Responsibilities:</strong> Site support, creation of landing pages, participation in the development
            of a smart selection of recommended products for users.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          Jul 2013 – Aug 2016
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Frontend Developer | Javascript | JQuery | JQueryUI
          </Typography>
          <Typography
            variant="subtitle1"
            align="left"
            className={classes.subtitle1}
          >
            <strong>Project:</strong> Maximum education, a system of preparing students for exams <br/>
            <strong>Technologies:</strong> Yii for backend and Javascript/jQuery for frontend development. <br/>
            <strong>Responsibilities:</strong> Development of modules for students testing, creation of independent
            pages for a unifying system with javascript and jQuery, HTML markup pages from PSD, mail markup, creative
            interaction with the designer team.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
