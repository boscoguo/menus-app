import axios from "axios";

const httpPost = async (url: string, values: any) => {
  try {
    const formatData = JSON.stringify(values, null, 2);
    const result = await axios.post(url, formatData);
    return result.data;
  } catch (e) {
    return null;
  }
};

export { httpPost };
