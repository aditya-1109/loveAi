import axios from "axios";

export const apiFunction = async (type, params = [], data = null, api) => {
  try {
    const url = `${api}/${params.join("/")}`;

    let response;

    switch (type.toLowerCase()) {
      case "get":
        response = await axios.get(url);
        break;

      case "post":
        response = await axios.post(url, data);
        break;

      case "patch":
        response = await axios.patch(url, data);
        break;

      case "delete":
        response = await axios.delete(url);
        break;

      default:
        throw new Error(`Invalid request type: ${type}`);
    }

    if(response){
      return response.data ? response.data : response;
    }

  } catch (e) {
    console.log("API Error:", e);
    return null;
  }
};
