const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj); // determine to CRUD
    if (!response.ok) throw Error('Please reload the app'); // to make sure the state of the app is ensynch with database
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
