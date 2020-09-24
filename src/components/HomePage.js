import React from "react";
import Typography from "@material-ui/core/Typography";
// import LocalBarOutlinedIcon from "@material-ui/icons/LocalBarOutlined";
import { makeStyles } from "@material-ui/core";
import RandomCocktailCard from "./RandomCocktailCard";
import CategoryAccordion from "./CategoryAccordion";
import GlassAccordion from "./GlassAccordion";
import IngredientsAccordion from "./IngredientsAccordion";
import AlcoholicAccordion from "./AlcoholicAccordion";
// import rainbowCocktail from "../images/rainbowCocktail.jpg";

const useStyles = makeStyles(() => ({
  HomePage: {
    minHeight: "100vh",
  },
  RandomCardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "0 30px",
  },
  Accordion: {
    margin: "30px 80px",
  },
  FindByFirstLetter: {
    backgroundColor: "#424242",
    padding: "30px 0",
    margin: "0 80px",
    borderRadius: "5px",
  },
  BigLetters: {
    display: "flex",
    flexFlow: "row-wrap",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  firstLetter: {
    fontSize: "250%",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.HomePage} color="primary">
      {/* <div className={classes.Cocktail}>
        <Typography variant="h1" className={classes.title}>
          Cocktail...
        </Typography>
      </div> */}
      <section>
        <div className={classes.RandomCardContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card, index) => (
            <RandomCocktailCard key={index} />
          ))}
        </div>
        <Typography variant="h5" style={{ marginBottom: "30px" }}>
          And many more...
        </Typography>
      </section>
      <section className={classes.Accordion}>
        <CategoryAccordion />
        <GlassAccordion />
        <IngredientsAccordion />
        <AlcoholicAccordion />
      </section>
      <section className={classes.FindByFirstLetter}>
        <Typography variant="h4">List Cocktails by First Letter</Typography>
        <div className={classes.BigLetters}>
          <Typography variant="button">
            <span className={classes.firstLetter}>M</span>OJITO
          </Typography>
          <Typography variant="button">
            <span className={classes.firstLetter}>B</span>ELLINI
          </Typography>
          <Typography variant="button">
            <span className={classes.firstLetter}>S</span>PRITZ
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
