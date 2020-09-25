import React from "react";
import Typography from "@material-ui/core/Typography";
import { Divider, makeStyles } from "@material-ui/core";
import RandomCocktailCard from "./RandomCocktailCard";
import CategoryAccordion from "./CategoryAccordion";
import GlassAccordion from "./GlassAccordion";
import IngredientsAccordion from "./IngredientsAccordion";
import AlcoholicAccordion from "./AlcoholicAccordion";

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
    paddingTop: "30px",
    margin: "0 80px",
    borderRadius: "5px",
  },
  BigLetters: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    padding: "0 50px",
  },
  Word: {
    padding: "0 50px",
  },
  firstLetter: {
    fontSize: "250%",
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.HomePage} color="primary">
      <section>
        <div className={classes.RandomCardContainer}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card, index) => (
            <RandomCocktailCard key={index} card={card} />
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
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          List Cocktails by First Letter
        </Typography>
        <Divider />
        <div className={classes.BigLetters}>
          {[
            "MOJITO",
            "BELLINI",
            "SPRITZ",
            "HAVANA",
            "VESPER",
            "Frappé",
            "Jitterbug",
            "Negroni",
            "Zorro",
          ].map((c, index) => (
            <Typography variant="button" key={index} className={classes.Word}>
              <span className={classes.firstLetter}>{c.charAt(0)}</span>
              {c.slice(1)}
            </Typography>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
