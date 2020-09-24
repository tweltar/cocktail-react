import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordionDetails: {
    maxHeight: "fit-content",
  },
  list: {
    display: "flex",
    flexFlow: "row wrap",
    textAlign: "left",
  },
}));

const IngredientsAccordion = () => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Browse by Ingredients
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <div className={classes.list}>
          <ul>
            <li>Light rum</li>
            <li>Applejack</li>
            <li>Gin</li>
            <li>Sweet Vermouth</li>
            <li>Scotch</li>
          </ul>
          <ul>
            <li>Orange bitters</li>
            <li>Lemon vodka</li>
            <li>Amaretto</li>
            <li>And more...</li>
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default IngredientsAccordion;
