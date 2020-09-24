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

const CategoryAccordion = () => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Filter by Category</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        <div className={classes.list}>
          <ul>
            <li>Cocktail</li>
            <li>Shot</li>
            <li>Punch / Party Drink</li>
            <li>Beer</li>
            <li>Homemade Liqueur</li>
          </ul>
          <ul>
            <li>Soft Drink / Soda</li>
            <li>Milk / Float / Shake</li>
            <li>Cocoa</li>
            <li>Coffee / Tea</li>
            <li>Ordinary Drink</li>
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
