import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: "10px 3px",
    maxHeight: "fit-content",
    border: "1px solid white",
  },
  title: {
    textAlign: "left",
    margin: "8px 15px",
    marginBottom: "0",
    fontSize: "120%",
  },
  subtitle: {
    textAlign: "left",
    margin: "0 15px",
    marginBottom: "5px",
    fontSize: "90%",
  },
  media: {
    height: 0,
    width: 300,
    paddingTop: "100%", // 16:9
  },
  cardContent: {
    padding: "15px",
  },
  cardAction: {
    padding: "0",
    justifyContent: "space-evenly",
  },
}));

const CocktailCard = ({ cocktail }) => {
  const classes = useStyles();
  const [isFav, setIsFav] = useState(false);

  return (
    <Card className={classes.root}>
      <div>
        <p className={classes.title}>{cocktail.strDrink}</p>
        <p className={classes.subtitle}>Category</p>
      </div>
      <CardMedia
        className={classes.media}
        image={cocktail.strDrinkThumb}
        title={cocktail.strDrink}
      />
      {/* <CardContent className={classes.cardContent}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent> */}
      <CardActions className={classes.cardAction}>
        <IconButton onClick={() => setIsFav(!isFav)}>
          {isFav ? (
            <FavoriteIcon fontSize="small" />
          ) : (
            <FavoriteBorderOutlinedIcon fontSize="small" />
          )}
        </IconButton>
        <IconButton>
          <ShareIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CocktailCard;
