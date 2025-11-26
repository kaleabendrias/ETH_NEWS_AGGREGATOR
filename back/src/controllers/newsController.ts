import { Request, Response } from "express";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import Parser from "rss-parser";

function getSourceName(url: string) {
  if (url.includes("bbc")) return "BBC";
  if (url.includes("aljazeera")) return "Al Jazeera";
  if (url.includes("cnn")) return "CNN";
  if (url.includes("reuters")) return "Reuters";
  return "Unknown";
}


const getNews = async (req: Request, res: Response) => {
  var xss_feeds: Array<string> = [
    "https://feeds.bbci.co.uk/news/rss.xml",
    "https://www.aljazeera.com/xml/rss/all.xml",
    "http://rss.cnn.com/rss/edition.rss",
    "https://feeds.reuters.com/reuters/topNews"
  ];

  let parser = new Parser();
  let allItems: Array<any> = [];

  for (const feedUrl of xss_feeds) {
    try {
      const feed = await parser.parseURL(feedUrl);
      allItems = allItems.concat(feed.items);
    } catch (error) {
      console.error(`Error fetching/parsing feed ${feedUrl}:`, error);
    }

    console.log(`Fetched ${allItems.length} items so far.`);;
  }
  allItems.sort((a, b) => {
    return new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime();
  });

  const cleaned = allItems.map(item => ({
  title: item.title,
  link: item.link,
  published: item.isoDate,
  source: getSourceName(item.link)
}));

  return res.json(cleaned)
};

module.exports = { getNews };
