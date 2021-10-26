type HotelLocation = {
  latitude: number,
  longitude: number,
  zoom: number
};

type Hotel = {
  bedrooms: number,
  city: {
    location: HotelLocation,
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
  location: HotelLocation,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string
};

export default Hotel;