import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-3-70-46-28.eu-central-1.compute.amazonaws.com:8080",
  headers: {
    "Content-type": "application/json",
    "Accept": "application/json"
  }
});
