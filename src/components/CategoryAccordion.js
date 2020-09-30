import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

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
            <Link to="/categories">
              <li>Cocktail</li>
            </Link>
            <Link to="/categories">
              <li>Shot</li>
            </Link>
            <Link to="/categories">
              <li>Punch / Party Drink</li>
            </Link>
            <Link to="/categories">
              <li>Beer</li>
            </Link>
            <Link to="/categories">
              <li>Homemade Liqueur</li>
            </Link>
            <Link to="/categories">
              <li>Soft Drink / Soda</li>
            </Link>
          </ul>
          <ul>
            <Link to="/categories">
              <li>Milk / Float / Shake</li>
            </Link>
            <Link to="/categories">
              <li>Cocoa</li>
            </Link>
            <Link to="/categories">
              <li>Coffee / Tea</li>
            </Link>
            <Link to="/categories">
              <li>Ordinary Drink</li>
            </Link>
            <Link to="/categories">
              <li>Others</li>
            </Link>
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
