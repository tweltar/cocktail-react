import { makeStyles, Typography } from "@material-ui/core";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  Cocktail: {
    padding: "20px 30px",
  },
  Card: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    maxWidth: "100vw",
  },
  CardDetail: {
    display: "flex",
    flexDirection: "column",
    padding: "0 30px",
    textAlign: "left",
    flexGrow: 0.5,
  },
  CardImage: {
    width: 400,
    borderRadius: "10px",
  },
  SubTitle: {
    fontSize: "120%",
    textAlign: "left",
  },
  IngredientList: {
    display: "flex",
    flexFlow: "row wrap",
  },
  IngreImage: {
    width: 180,
  },
}));

const CardDetail = ({ match }) => {
  const classes = useStyles();
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [ingredientList, setIngredientList] = useState([]);

  const fetchCocktail = async (id) => {
    try {
      const res = await Axios.get(`lookup.php?i=${id}`);
      setCocktail(res.data.drinks[0]);
      setIsLoading(false);
      ingredients(res.data.drinks[0]);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  const addToObject = (obj, key, value, index) => {
    var temp = {};
    var i = 0;

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (i === index && key && value) {
          temp[key] = value;
        }
        temp[prop] = obj[prop];
        i++;
      }
    }
    if (!index && key && value) {
      temp[key] = value;
    }

    return temp;
  };

  const ingredients = (cocktail) => {
    var ingreList = [];
    var temp = {};
    var i = 0;

    for (var key in cocktail) {
      if (
        key.substring(0, 13) === "strIngredient" &&
        cocktail[key] !== null &&
        cocktail[key] !== ""
      ) {
        temp = addToObject(temp, "strIngredient", cocktail[key]);
        console.log(temp);
        ingreList.push(temp);
      }
    }

    for (var key in cocktail) {
      if (
        key.substring(0, 10) === "strMeasure" &&
        cocktail[key] !== null &&
        cocktail[key] !== ""
      ) {
        ingreList[i] = addToObject(
          ingreList[i++],
          "strIngredientMeasure",
          cocktail[key]
        );
      }
    }
    console.log(ingreList);
    setIngredientList(ingreList);
  };

  useEffect(() => {
    fetchCocktail(match.params.id);
    console.log(match.params.id);
  }, [match.params.id]);

  return isLoading ? (
    <Loader />
  ) : (
    cocktail && (
      <div className={classes.Cocktail}>
        <div className={classes.Card}>
          <div>
            <img
              src={cocktail.strDrinkThumb}
              alt=""
              className={classes.CardImage}
            />
          </div>
          <div className={classes.CardDetail}>
            <Typography variant="h4" component="h4">
              {cocktail.strDrink}
            </Typography>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "flex-start",
                paddingBottom: 20,
              }}
            >
              {cocktail.strCategory && (
                <Chip
                  variant="outlined"
                  label={cocktail.strCategory}
                  style={{ marginRight: 5 }}
                />
              )}
              {cocktail.strAlcoholic && (
                <Chip variant="outlined" label={cocktail.strAlcoholic} />
              )}
            </div>
            {cocktail.strGlass && (
              <Typography
                variant="body1"
                component="p"
                style={{ paddingTop: 5 }}
              >
                <span style={{ fontWeight: "bold" }}>Glass:</span>{" "}
                {cocktail.strGlass}
              </Typography>
            )}
            {cocktail.strInstructions && (
              <Typography
                variant="body1"
                component="p"
                style={{ paddingTop: 5 }}
              >
                <span style={{ fontWeight: "bold" }}>Instructions:</span>{" "}
                {cocktail.strInstructions}
              </Typography>
            )}
          </div>
        </div>
        <p className={classes.SubTitle}>Ingredients:</p>
        <div className={classes.IngredientList}>
          {ingredientList &&
            ingredientList.map((ingre, index) => (
              <Link
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "5px",
                }}
                to={`/ingredients/${ingre.strIngredient}`}
              >
                <img
                  className={classes.IngreImage}
                  src={`https://www.thecocktaildb.com/images/ingredients/${ingre.strIngredient}-Medium.png`}
                />
                <p style={{ fontSize: "120%", marginBottom: 0 }}>
                  {ingre.strIngredient}
                </p>
                <p style={{ margin: 0 }}>{ingre.strIngredientMeasure}</p>
              </Link>
            ))}
        </div>
      </div>
    )
  );
};

export default CardDetail;
