import { makeStyles } from "@material-ui/core";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  CardDetail: {
    display: "flex",
    flexFlow: "row wrap",
    padding: "20px 30px",
  },
  CardImage: {
    width: 400,
    borderRadius: "10px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    overflow: "hidden",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const CardDetail = ({ match }) => {
  const classes = useStyles();
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [ingredientList, setIngredientList] = useState([]);
  const [ingredientMeasureList, setIngredientMeasureList] = useState([]);

  const fetchCocktail = async (id) => {
    try {
      const res = await Axios.get(`lookup.php?i=${id}`);
      setCocktail(res.data.drinks[0]);
      setIsLoading(false);
      ingredients(res.data.drinks[0]);
      ingredientsMeasure(res.data.drinks[0]);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  const ingredients = (cocktail) => {
    var ingreList = [];
    for (var key in cocktail) {
      if (key.substring(0, 13) === "strIngredient" && cocktail[key] !== null) {
        ingreList.push(cocktail[key]);
      }
    }
    console.log(ingreList);
    setIngredientList(ingreList);
  };

  const ingredientsMeasure = (cocktail) => {
    var ingreMeasureList = [];
    for (var key in cocktail) {
      if (key.substring(0, 10) === "strMeasure" && cocktail[key] !== null) {
        ingreMeasureList.push(cocktail[key]);
      }
    }
    console.log(ingreMeasureList);
    setIngredientMeasureList(ingreMeasureList);
  };

  useEffect(() => {
    fetchCocktail(match.params.id);
    console.log(match.params.id);
  }, [match.params.id]);

  return isLoading ? (
    <Loader />
  ) : (
    cocktail && (
      <div>
        <div className={classes.CardDetail}>
          <div>
            <img
              src={cocktail.strDrinkThumb}
              alt=""
              className={classes.CardImage}
            />
          </div>
          <div></div>
        </div>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={3.5}>
            {ingredientList &&
              ingredientList.map((ingreTitle, index) => (
                <GridListTile key={index}>
                  <img
                    src={`https://www.thecocktaildb.com/images/ingredients/${ingreTitle}-Medium.png`}
                    alt=""
                  />
                  <GridListTileBar
                    title={ingreTitle}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              ))}
          </GridList>
        </div>
      </div>
    )
  );
};

export default CardDetail;
