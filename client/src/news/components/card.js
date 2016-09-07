import React, { PropTypes } from 'react';
import './_card.scss';

const Card = props => {
  const { title, editorial: { subheading }, createdAt,
    images: [{ url, alt }] } = props;
  return (<div className="card">
    <img
      className="card__photo"
      alt={alt}
      src={url} />
    <h3 className="card__title">{title}</h3>
    <div
      className="card__description">
      <p className="card__description__paragraph">{subheading}</p>
    </div>
    <div className="card__meta">
      <span className="card__meta__timestamp">{createdAt}</span>
    </div>
  </div>);
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  editorial: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default Card;
