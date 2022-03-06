export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_AGE = 'SET_USER_AGE';
export const INCREASE_NUMBER = 'INCREASE_NUMBER';
export const GET_CITIES = 'GET_CITIES';
export const POST_CITIES = 'POST_CITIES';
export const LOADING = 'LOADING';
export const LOADING_FAILED = 'LOADING_FAILED';

const API_URL = 'https://mocki.io/v1/fee86774-814f-4761-afc8-ff09ddf57860';

export const getCities = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_CITIES,
          payload: json,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const postCities = (name, age) => {
  try {
    return async dispatch => {
      dispatch({
        type: LOADING,
      });
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: name,
          body: age,
        }),
      });

      const json = await res.json();
      console.log(json);

      if (json) {
        dispatch({
          type: POST_CITIES,
        });
      } else {
        console.log('Unable to post');
      }
    };
  } catch (error) {
    dispatch({
        type: LOADING_FAILED,
      });
    console.log(error);
  }
};

export const setName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: name,
  });
};
export const setAge = age => dispatch => {
  dispatch({
    type: SET_USER_AGE,
    payload: age,
  });
};
export const increaseNumber = () => dispatch => {
  dispatch({
    type: INCREASE_NUMBER,
  });
};
