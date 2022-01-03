import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { ArticleList } from './ArticleList/ArticleList';
import articlesApi from '../../services/articlesApi.js';

export class BasicRestApi extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    articlesApi
      .fetchArticlesWithQuery('react')
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;
    return (
      <Fragment>
        {error && (
          <p>Упс, что то пошло не так: {error.message}</p>
        )}
        {isLoading && <p>Loading ...</p>}
        {articles.length > 0 && (
          <ArticleList articles={articles} />
        )}
      </Fragment>
    );
  }
}
