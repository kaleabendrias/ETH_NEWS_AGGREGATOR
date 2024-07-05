import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/news");
        console.log(response.data.items);
        setNews(response.data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      {news.map((article, index) => (
        <Card key={index}>
          <Card.Image src={article.imageUrl} alt={article.title} />
          <Card.Content>
            <Card.Title>{article.title}</Card.Title>
            <Card.Subtitle>{article.subtitle}</Card.Subtitle>
            <Card.Text>{article.content}</Card.Text>
          </Card.Content>
          <Card.Footer>
            <Card.Link href={`/news/${article.slug}`}>Read More</Card.Link>
          </Card.Footer>
        </Card>
      ))}
    </div>
  );
};

export default Home;
