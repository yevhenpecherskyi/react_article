import React from 'react';
import PropTypes from 'prop-types';

const Article = ({
  title,
  date,
  text,
}) => (
  <article className="article">
    <h2 className="article-title">{title}</h2>
    <p className="article-text">{text}</p>
    <span className="article-date">{date}</span>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Article;