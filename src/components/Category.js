import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Axios from "axios";
import { categories } from "../utils";
import Loader from "./Loader";
import CocktailCard from "./CocktailCard";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.CardContainer}>
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.default,
  },
  CardContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-evenly",
  },
}));

const Category = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("Cocktail");
  const [categoryDetail, setCategoryDetail] = useState([]);
  let i = 0,
    j = 0;

  const fetchCategory = async (cat) => {
    try {
      const res = await Axios.get(`filter.php?c=${cat}`);
      setCategoryDetail(res.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory(category);
  }, [category]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories &&
            categories.map((c) => (
              <Tab
                key={c}
                label={`${c}`}
                {...a11yProps(i++)}
                onClick={() => {
                  setCategory(`${c}`);
                  setCategoryDetail([]);
                }}
              />
            ))}
        </Tabs>
      </AppBar>
      {categories &&
        categories.map((c) => (
          <TabPanel value={value} index={j++} key={c}>
            {categoryDetail ? (
              categoryDetail.map((cocktail) => (
                <CocktailCard
                  key={cocktail.idDrink}
                  cocktail={cocktail}
                  category={c}
                />
              ))
            ) : (
              <Loader />
            )}
          </TabPanel>
        ))}
    </div>
  );
};

export default Category;
