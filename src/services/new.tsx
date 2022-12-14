class NewsService {
  async getNews() {
    const response = await fetch('http://localhost:3000/api/newsapi');
    const data = await response.json();
    return data;
  }
}

export default new NewsService();
