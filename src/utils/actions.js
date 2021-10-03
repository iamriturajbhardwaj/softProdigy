
export const getPostsList = () => {
  return (dispatch) => {
    fetch('http://shibe.online/api/shibes?count=30&urls=true&httpsUrls=true', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //   console.warn("data",responseJson)
        dispatch({
          type: 'POST_LIST_DATA',
          payload: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};