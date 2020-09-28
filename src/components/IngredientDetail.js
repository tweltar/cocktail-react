import { makeStyles, Typography, Modal } from "@material-ui/core";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const IngredientDetail = ({ open, handleClose, ingre }) => {
  const classes = useStyles();
  const [ingredient, setIngredient] = useState({});

  const fetchIngredient = async (name) => {
    try {
      const res = await Axios.get(`search.php?i=${name}`);
      console.log(res.data.ingredients[0]);
      setIngredient(res.data.ingredients[0]);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      // setIsLoading(true);
    }
  };

  useEffect(() => {
    fetchIngredient(ingre);
  }, [ingre]);

  return (
    ingredient && (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {ingredient && (
            <div className={classes.paper}>
              <img
                src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`}
                alt=""
              />
              <div>
                <Typography variant="h5" component="h5">
                  {ingredient.strIngredient}
                </Typography>

                {ingredient.strDescription && (
                  <Typography
                    variant="body1"
                    component="p"
                    style={{ paddingTop: 5 }}
                  >
                    <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
                    {ingredient.strDescription}
                  </Typography>
                )}
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    )
  );
};

export default IngredientDetail;
