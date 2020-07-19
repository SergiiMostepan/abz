import axios from "axios";

export const getToken = async () => {
  const response = await axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/token`
  );
  return response.data.token;
};
