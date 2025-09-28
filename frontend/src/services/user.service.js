import axios from 'axios';
export const postUser = async function  (user) {
const response = await axios.post("/api/auth/register",user);
return response.data;
}
