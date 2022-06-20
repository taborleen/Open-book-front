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
  addDislikes,
  addLikes,
  addReview,
  deleteDislikes,
  deleteLikes,
  getAllReviews,
} from "../../../features/inputReducer";
import FormControl from "@mui/material/FormControl";
import styles from "./books.module.css";
import { LoadingButton } from "@mui/lab";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Reviews = ({ bookId }) => {
  const [text, setText] = useState("");
  const [optionsValue, setOptionsValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const userId = useSelector((state) => state.auth.user);
  const adding = useSelector((state) => state.review.adding);
  const reviews = useSelector((state) => state.review.reviews);

  const findReviews = reviews.find(
    (elem) => elem.book._id === bookId && elem.user._id === userId
  );

  const filterReviews = reviews.filter((elem) => elem.book._id === bookId);
  const noRepeatReviews = filterReviews.find(
    (elem) => elem.user._id === userId
  );
  const reviewId = filterReviews.find((item) => item._id);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (noRepeatReviews) {
      return 0;
    }
    dispatch(
      addReview({
        text,
        bookId,
        optionsValue,
        userId,
        callback: getReviewsForThisBook,
      })
    );
    setText("");
  };

  const getReviewsForThisBook = () => {
    dispatch(getAllReviews());
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
    getReviewsForThisBook();
  }, [dispatch]);

  const optionsHandler = (e) => {
    setOptionsValue(e.target.value);
  };

  const likesHandler = (arr) => {
    arr.find((elem) => elem._id === userId)
      ? dispatch(
          deleteLikes({ userId, reviewId, callback: getReviewsForThisBook })
        )
      : dispatch(
          addLikes({ userId, reviewId, callback: getReviewsForThisBook })
        );
  };
  const dislikesHandler = (arr) => {
    const user = arr.find((elem) => {
      return elem === userId
    });
    if(user) {
      dispatch(deleteDislikes({ userId, reviewId, callback: getReviewsForThisBook }))
    } else {
      dispatch(
        addDislikes({ userId, reviewId, callback: getReviewsForThisBook })
      )
    }
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
          disabled={!text || findReviews}
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
            console.log(item);
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
                  <IconButton
                    style={{ bottom: 0, left: 390 }}
                    aria-label="likes"
                    edge="start"
                    onClick={() => likesHandler(item.likes)}
                  >
                    <ThumbUpIcon />
                    {item.likes.length}
                  </IconButton>
                  <IconButton
                    style={{ bottom: 0, left: 400 }}
                    aria-label="likes"
                    edge="end"
                    onClick={() => dislikesHandler(item.dislikes)}
                  >
                    <ThumbDownIcon />
                    {item.dislikes.length}
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
