import {useState} from 'react';
import {Hotels, Hotel} from '../../types/data';
import PlaceCard from '../place-card/place-card';
import {MouseEvent} from 'react';

type OffersListProps = {
  offers: Hotels
}

function OffersList(props: OffersListProps) {
  const [, setActiveOffer] = useState<string>();

  function handleMouseOver(e: MouseEvent<HTMLElement>) {
    setActiveOffer(e.currentTarget.dataset.offerId);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {props.offers.map((item: Hotel) =>
        <PlaceCard key={item.id} placeCard={item} handleMouseOver={handleMouseOver} />,
      )}
    </div>
  );
}

export default OffersList;
