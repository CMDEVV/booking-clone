export type Listing = {
  url: string;
  title: string;
  rating: string;
  description: string;
  price: string;
  link: string;
  booking_metadata: string;
  rating_word: string;
  rating_count: string;
};

export type Result = {
  content: {
    results: Listing[];
    total_listings: string;
  };
};
