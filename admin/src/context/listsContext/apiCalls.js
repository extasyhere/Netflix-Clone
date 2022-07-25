import axios from "axios";
import {
  deleteListsFailure,
  deleteListsStart,
  deleteListsSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

//BG PLZ ADD TOKENS


//get
export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
     headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDM2NTYwMSwiZXhwIjoxNjU0OTcwNDAxfQ.r7Qd4Pb0Fp4b9vRKjFMtv6Xm1kZPaQwp4K8U53rV-k4" 
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};


{//Create

/*export const createMovie = async (movie,dispatch) => {
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
};*/}


//Delete

export const deleteList = async (id, dispatch) => {
  dispatch(deleteListsStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTVmYzAwM2ZiYTk5ODE4YTA4YmE5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDM2NTYwMSwiZXhwIjoxNjU0OTcwNDAxfQ.r7Qd4Pb0Fp4b9vRKjFMtv6Xm1kZPaQwp4K8U53rV-k4" 
      },
    });
    dispatch(deleteListsSuccess(id));
  } catch (err) {
    dispatch(deleteListsFailure());
  }
};