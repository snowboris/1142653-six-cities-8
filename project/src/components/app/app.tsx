import React from 'react';
import MainPage from '../main/main';

type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}

type Hotel = {
  bedrooms: number,
  city: {
    location: Location,
    name: string
  }
  description: string,
  goods: string[],
  host: {
    avatarUrl: string,
    id: number,
    isPro: boolean,
    name: string
  }
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string
}

type AppProps = {
  data: Hotel[]
}

function App({ data }: AppProps): JSX.Element {
  return <MainPage data={data} />;
}

export default App;
