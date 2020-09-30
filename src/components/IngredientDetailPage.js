import React, { useState, useEffect } from "react";
import Axios from "axios";
import Loader from "./Loader";

const IngredientDetailPage = ({ match }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ingredient, setIngredient] = useState({});

  const fetchIngredient = async (name) => {
    try {
      const res = await Axios.get(`search.php?i=${name}`);
      console.log(res.data.ingredients[0]);
      setIngredient(res.data.ingredients[0]);
      setIsLoading(false);
      console.log(name);
      console.log(res.data.ingredients);
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchIngredient(match.params.id);
    console.log(match.params.id);
  }, [match.params.id]);

  return isLoading ? <Loader /> : <div>Hello</div>;
};

export default IngredientDetailPage;
