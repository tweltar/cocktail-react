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
            <Link to="/Categories/cocktail">
              <li>Cocktail</li>
            </Link>
            <Link to="/Categories/shot">
              <li>Shot</li>
            </Link>
            <Link to="/Categories/punch / party drink">
              <li>Punch / Party Drink</li>
            </Link>
            <Link to="/Categories/beer">
              <li>Beer</li>
            </Link>
            <Link to="/Categories/homemade liqueur">
              <li>Homemade Liqueur</li>
            </Link>
            <Link to="/Categories/soft drink / soda">
              <li>Soft Drink / Soda</li>
            </Link>
          </ul>
          <ul>
            <Link to="/Categories/milk / float / shake">
              <li>Milk / Float / Shake</li>
            </Link>
            <Link to="/Categories/cocoa">
              <li>Cocoa</li>
            </Link>
            <Link to="/Categories/coffee / tea">
              <li>Coffee / Tea</li>
            </Link>
            <Link to="/Categories/ordinary drink">
              <li>Ordinary Drink</li>
            </Link>
            <Link to="/Categories/other/unknown">
              <li>Others</li>
            </Link>
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;
