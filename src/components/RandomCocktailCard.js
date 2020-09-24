import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    marginBottom: "25px",
    margin: "0 20px",
  },
  media: {
    height: 1,
    width: 280,
    paddingTop: "90%", // 16:9
  },
}));

const RandomCocktailCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://www.thecocktaildb.com/images/media/drink/ttyrxr1478820678.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h6" component="h5">
          Paella dish
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RandomCocktailCard;
