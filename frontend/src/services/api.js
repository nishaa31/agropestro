import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const predictDisease = async (file) => {
  const form = new FormData();
  form.append("file", file);

  const res = await api.post("/predict/disease", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
};

export const predictYield = async (data) => {
  const res = await api.post("/predict/yield", data);
  return res.data;
};