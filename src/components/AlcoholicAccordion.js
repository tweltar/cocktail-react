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
    textAlign: "left",
  },
}));

const AlcoholicAccordion = () => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          View by Alcoholic Type
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <ul className={classes.list}>
          <li>Alcoholic</li>
          <li>Non-alcoholic</li>
          <li>Optional alcohol</li>
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default AlcoholicAccordion;
