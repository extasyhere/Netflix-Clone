import axios from "axios";
import {

  createMoviesFailure,
  createMoviesStart,
  createMoviesSuccess,
  deleteMoviesFailure,
  deleteMoviesStart,
  deleteMoviesSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "./MovieActions";

//BG PLZ ADD TOKENS
//get
export const getMovies = async (dispatch) => {
  dispatch(getMoviesStart());
  try {
    const res = await axios.get("/movies", {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDM2NTYwMSwiZXhwIjoxNjU0OTcwNDAxfQ.r7Qd4Pb0Fp4b9vRKjFMtv6Xm1kZPaQwp4K8U53rV-k4" 
      },
    });
    dispatch(getMoviesSuccess(res.data));
  } catch (err) {
    dispatch(getMoviesFailure());
  }
};


//Create

export const createMovie = async (movie,dispatch) => {
  dispatch(createMoviesStart());
  try {
    const res=await axios.post("/movies",movie, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDM2NTYwMSwiZXhwIjoxNjU0OTcwNDAxfQ.r7Qd4Pb0Fp4b9vRKjFMtv6Xm1kZPaQwp4K8U53rV-k4" 
      },
    });
    dispatch(createMoviesSuccess(res.data));
  } catch (err) {
    dispatch(createMoviesFailure());
  }
};


//Delete

export const deleteMovie = async (id,dispatch) => {
  dispatch(deleteMoviesStart());
  try {
    await axios.delete("/movies/"+id, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDM2NTYwMSwiZXhwIjoxNjU0OTcwNDAxfQ.r7Qd4Pb0Fp4b9vRKjFMtv6Xm1kZPaQwp4K8U53rV-k4" 
      },
    });
    dispatch(deleteMoviesSuccess(id));
  } catch (err) {
    dispatch(deleteMoviesFailure());
  }
};