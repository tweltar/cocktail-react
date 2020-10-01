import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Axios from "axios";
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

const Filter = ({ match }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [filter, setFilter] = useState([]);
  const [firstFilter, setFirstFilter] = useState({});
  const [filterDetail, setFilterDetail] = useState([]);
  let i = 0,
    j = 0;

  const fetchFilterList = async (name) => {
    const firstLetter = name.charAt(0).toLowerCase();
    const str = nameCheck(name);
    try {
      console.log(firstLetter);
      const res = await Axios.get(`list.php?${firstLetter}=list`);
      setFilter(res.data.drinks);
      setFirstFilter(str);
      console.log(res.data.drinks[0].str);
      console.log(res.data.drinks);
      console.log(str);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFilter = async (cat) => {
    try {
      const res = await Axios.get(`filter.php?c=${cat}`);
      setFilterDetail(res.data.drinks);
      console.log(res.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const nameCheck = (name) => {
    if (name === "Glass") {
      return "strGlass";
    } else if (name === "Ingredients") {
      return "strIngredient1";
    } else {
      return "strAlcoholic";
    }
  };

  useEffect(() => {
    fetchFilterList(match.params.id);
    fetchFilter(firstFilter);
  }, [match.params.id, firstFilter]);

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
          aria-label="scrollable auto tabs example"
        >
          {/* {filter &&
            filter.map((f) => (
              <Tab
                key={f}
                label={`${f}`}
                {...a11yProps(i++)}
                onClick={() => setFilter(`${f}`)}
              />
            ))} */}
        </Tabs>
      </AppBar>
      {/* {filter &&
        filter.map((f) => (
          <TabPanel value={value} index={j++} key={f}>
            {filterDetail ? (
              filterDetail.map((cocktail) => (
                <CocktailCard
                  key={cocktail.idDrink}
                  cocktail={cocktail}
                  category={f}
                />
              ))
            ) : (
              <Loader />
            )}
          </TabPanel>
        ))} */}
    </div>
  );
};

export default Filter;
