import {MouseEvent} from 'react';
import {Hotel} from '../../types/data';
import {Link} from 'react-router-dom';

type Props = {
  placeCard: Hotel,
  handleMouseOver: (event: MouseEvent<HTMLElement>) => void
}

function PlaceCard({ placeCard, handleMouseOver }: Props): JSX.Element {


  return (
    <article className="cities__place-card place-card"
      data-offer-id={placeCard.id}
      onMouseOver={(e) => handleMouseOver(e)}
    >
      {placeCard.isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={placeCard.previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeCard.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${placeCard.rating / 5 * 100}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${placeCard.id}`}>{placeCard.title}</Link>
        </h2>
        <p className="place-card__type">{placeCard.type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
