import { service } from "../config";
import axios from "axios";

export const auth = axios.create({
  baseURL: service,
  withCredentials: true,
});
