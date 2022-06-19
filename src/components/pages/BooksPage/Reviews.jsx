import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRating,
  addReview,
  getAllReviews,
} from "../../../features/inputReducer";
import FormControl from "@mui/material/FormControl";
import styles from "./books.module.css";
import { LoadingButton } from "@mui/lab";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { red } from "@mui/material/colors";

const Reviews = ({ bookId }) => {
  const [text, setText] = useState("");
  const adding = useSelector((state) => state.review.adding);
  const reviews = useSelector((state) => state.review.reviews);
  const filterReviews = reviews.filter((elem) => elem.book._id === bookId);

  const [optionsValue, setOptionsValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addReview({ text, bookId, optionsValue, userId }));
    setText("");
  };

  const inputHandler = (e) => {
    setText(e.target.value);
    setIsEmpty(false);
  };

  const onBlurHandler = (e) => {
    if (!text) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };
  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  const optionsHandler = (e) => {
    setOptionsValue(e.target.value);
  };

  return (
    <>
      <h1 className={styles.title}>Отзывы от пользователей</h1>
      <FormControl
        fullWidth
        onSubmit={(e) => submitHandler(e)}
        className={styles.form}
      >
        <TextField
          id="standard-basic"
          label="Оставить отзыв"
          variant="standard"
          value={text}
          onBlur={onBlurHandler}
          error={isEmpty}
          helperText={isEmpty ? "Введите текст" : ""}
          onChange={(e) => inputHandler(e)}
          fullWidth
          type="text"
        />
        <Button
          type="submit"
          fullWidth
          variant="text"
          disabled={!text}
          className={styles.inputBtn}
          onClick={submitHandler}
        >
          {adding ? (
            <LoadingButton loading variant="string">
              Submit
            </LoadingButton>
          ) : (
            "Отправить"
          )}
        </Button>
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={optionsValue}
          onChange={optionsHandler}
          size="large"
        />
      </FormControl>{" "}
      <div className="reviews">
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            height: 700,
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {filterReviews.map((item) => {
            return (
              <div key={item._id} style={{ padding: 14 }} className="App">
                <Paper style={{ padding: "40px 20px" }}>
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar alt="Remy Sharp" src={item.user.avatar} />
                    </Grid>
                    <Grid justifyContent="left" item xs zeroMinWidth>
                      <h4 style={{ margin: 0, textAlign: "left" }}>
                        {item.user.name}
                      </h4>
                      <p style={{ textAlign: "left" }}>{item.text} </p>
                      <p style={{ textAlign: "left" }}>
                        <Rating name="read-only" value={item.grade} readOnly />
                      </p>
                    </Grid>
                  </Grid>
                  <IconButton aria-label="delete" edge="start">
                    <ThumbUpIcon />
                  </IconButton>
                </Paper>
              </div>
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default Reviews;
