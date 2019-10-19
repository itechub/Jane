import { ArticlePages, Home, Login, Register, Tags } from "pages";

const { ArticleDetail, ArticleList, NewArticle } = ArticlePages;

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/write",
    component: NewArticle
  },
  {
    path: "/:username",
    component: ArticleList,
    routes: [
      {
        path: "/:username/articles",
        component: ArticleList
      },
      {
        path: "/:username/articles/:articleId",
        component: ArticleDetail
      },
      {
        path: "/:username/tags",
        component: Tags
      }
    ]
  },
  {
    path: "/",
    component: Home
  }
];

export default routes;
