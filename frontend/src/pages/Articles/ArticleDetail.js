import React, { Component } from "react";
import { connect } from "react-redux";

import { Separator, Tag, MarkdownEditor } from "@/components";
import { BlogLayout } from "@/layouts";
import { getArticle } from "@/redux/actions/articleActions";
import "./ArticleDetail.scss";

class ArticlePage extends Component {
  componentDidMount() {
    this.props.dispatch(getArticle(this.props.match.params.articleId));
  }

  render() {
    const dateFormat = date => {
      const dateObj = new Date(Date.parse(date));
      const day = dateObj.getDate();
      const month = dateObj.getMonth();
      const year = dateObj.getFullYear();
      return `${year}.${month}.${day}`;
    };

    const { article } = this.props;
    const username = this.props.match.params.username;
    return (
      <BlogLayout username={username}>
        <div className="article-detail">
          <h1 className="title">{article.title}</h1>
          <div className="meta">
            <span className="date">
              最后更新时间: {dateFormat(article.ctime)}
            </span>
            <span className="author">作者: {article.author}</span>
          </div>
          <Separator />
          <div className="content">
            <MarkdownEditor src={article.raw} />
          </div>
          <Separator />
          {article.tags &&
            article.tags.map(tag => <Tag {...tag} key={tag.name} />)}
        </div>
      </BlogLayout>
    );
  }
}

function mapStateToProps(state) {
  const article = state.articles.article;
  return { article };
}

export default connect(mapStateToProps)(ArticlePage);
