import { service } from "../config";
import axios from "axios";

export const tempServices = axios.create({
  baseURL: service,
  withCredentials: true,
});
