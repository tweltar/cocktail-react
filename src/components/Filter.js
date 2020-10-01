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
  const [filterList, setFilterList] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterDetail, setFilterDetail] = useState([]);
  const firstLetter = match.params.id.toLowerCase().charAt(0);
  let i = 0,
    j = 0;

  const fetchFilterList = async () => {
    try {
      const res = await Axios.get(`list.php?${firstLetter}=list`);
      console.log(res.data.drinks);
      setFilterList(res.data.drinks);

      for (const key in res.data.drinks[0]) {
        if (res.data.drinks[0].hasOwnProperty(key)) {
          setFilter(res.data.drinks[0][key]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilter = async (l, f) => {
    try {
      const res = await Axios.get(`filter.php?${l}=${f}`);
      console.log(res.data.drinks);
      setFilterDetail(res.data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFilterList();
    fetchFilter(firstLetter, filter);
  }, [firstLetter, filter]);

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
          {filterList &&
            filterList.map((f) => {
              for (const key in f) {
                if (f.hasOwnProperty(key)) {
                  const element = f[key];
                  return (
                    <Tab
                      key={element}
                      label={`${element}`}
                      {...a11yProps(i++)}
                      onClick={() => {
                        setFilter(`${element}`);
                        setFilterDetail([]);
                      }}
                    />
                  );
                }
              }
            })}
        </Tabs>
      </AppBar>
      {filterList &&
        filterList.map((f) => {
          for (const key in f) {
            if (f.hasOwnProperty(key)) {
              const element = f[key];
              return (
                <TabPanel value={value} index={j++} key={element}>
                  {filterDetail ? (
                    filterDetail.map((cocktail) => (
                      <CocktailCard
                        key={cocktail.idDrink}
                        cocktail={cocktail}
                        category={element}
                      />
                    ))
                  ) : (
                    <Loader />
                  )}
                </TabPanel>
              );
            }
          }
        })}
    </div>
  );
};

export default Filter;
