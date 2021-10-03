// Use of Redux in React Native App | React Native Redux
// https://aboutreact.com/react-native-redux/
const initialState = {
  postData: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
   
    case 'POST_LIST_DATA':
      return Object.assign({}, state, {
        postData: action.payload
      });
    default:
      return state;
  }
};

export default reducers;