// data/articles.js
const articles = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to simplify your functional components',
    slug: 'getting-started-with-react-hooks',
    date: '2023-06-15',
    image: 'https://via.placeholder.com/800x400',
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'Understanding when to use CSS Grid and when to use Flexbox for layouts',
    slug: 'css-grid-vs-flexbox',
    date: '2023-05-22',
    image: 'https://via.placeholder.com/800x400',
    tags: ['CSS', 'Web Design', 'Layout']
  },
  // ...
];

function getAllArticles() {
  return articles;
}

function getArticleBySlug(slug) {
  return articles.find(article => article.slug === slug);
}

function getLatestArticles(count = 3) {
  return [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}
