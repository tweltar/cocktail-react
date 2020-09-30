import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Axios from "axios";
import Loader from "./Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 230,
    margin: "0 20px",
    marginTop: "20px",
    maxHeight: "fit-content",
    border: "1px solid white",
  },
  media: {
    height: 1,
    width: 230,
    paddingTop: "100%", // 16:9
  },
}));

const RandomCocktailCard = ({ card }) => {
  const classes = useStyles();
  const [randomCocktail, setRandomCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchRandomCocktail = async () => {
    try {
      const res = await Axios.get("/random.php");
      setRandomCocktail(res.data.drinks[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Link to={`/cocktail/${randomCocktail.idDrink}`}>
      <Card className={classes.root}>
        {" "}
        <CardMedia
          className={classes.media}
          image={randomCocktail.strDrinkThumb}
          title={randomCocktail.strDrink}
        />
        <CardContent>
          <Typography variant="body1" component="p">
            {randomCocktail.strDrink}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RandomCocktailCard;
