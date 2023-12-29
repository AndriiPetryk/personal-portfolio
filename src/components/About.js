import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CV from "../files/Senior_Frontend_React_Developer_Andrii_Petryk.docx.pdf";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100vh",
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
    maxWidth: "15rem",
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
    height: "100%",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        About me
      </Typography>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="left"
          className={classes.subtitle1}
        >
          I have spent the last 9 years as a web developer, I a well-organized, and I have strong problem-solving skills
          and experience working on important functionality for building fast and highly loaded systems. I’m eager to
          learn, and always willing to help others learn as well. I enjoy picking up a problem and solving it, <br/>
          regardless of the technologies and techniques involved. 6+ years highly self-driven Senior React developer,
          who is used to providing input from a quality standpoint. I successfully implemented micro frontend approaches <br/>
          with React.js into applications for a freight tracking system based in the EU. I can work independently and
          collaborate with different participants in the dev process, taking full responsibility for the development <br/>
          process and communication with different teams.
          Checklist with expertise areas: <br/>
          <strong>-</strong> 9+ years of experience in Javascript(ES6); <br/>
          <strong>-</strong>  9+ years of experience in HTML5, CSS3, LESS/SASS/SCSS; <br/>
          <strong>-</strong> 6+ years of experience in React.js <br/>
          <strong>-</strong> 5+ years of experience in Redux; <br/>
          <strong>-</strong> 5+ years of experience in Jest/Enzyme/React Testing Library; <br/>
          <strong>-</strong> 3+ years of experience in Typescript; <br/>
          <strong>-</strong> 2+ years of experience in Webpack/Docker/GraphQL; <br/>
          <strong>-</strong> 1+ years of experience in React Query; <br/>
          <br/>
          I know how important the details are for a Senior Front End Developer. My keen attention to detail and dedication <br/>
          to solving any problem separates me from other candidates with similar qualifications. I think one of my greatest strengths is good communication skills,<br/>
          and the ability to keep deadlines successfully
          My personal philosophy is to be Self-motivated and determined.<br/>
          People who know me better say I’m hardworking, a good team player, and а quick learner(I enjoy learning new things).
          <br/>
          <br/>
          <br/>
          <a
            href={CV}
            download="Senior_Frontend_React_Developer_Andrii_Petryk_NA"
            target='_blank'
            rel="noopener noreferrer"
            style={{display: "block", textDecoration: "none", textAlign: "center"}}
          >
            <Button variant="contained" color="primary">
              Download CV
            </Button>
          </a>
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
