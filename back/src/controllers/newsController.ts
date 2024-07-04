import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const getNews = async (req: Request, res: Response) => {
  const options: AxiosRequestConfig = {
    method: "get",
    url: "https://google-news13.p.rapidapi.com/search",
    params: {
      keyword: "Ethiopia",
      gl: "et", // Country code for Ethiopia
      lr: "en-US", // Language preference, if needed
    },
    headers: {
      "x-rapidapi-key": process.env.RAPID,
      "x-rapidapi-host": "google-news13.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response: AxiosResponse) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error: any) {
      console.error("Error fetching data:", error);
    });
};

module.exports = { getNews };
