const myline = `
  ok lets try something else, check each imageUrl, 
  there should be the name of photo in the link which 
  will help you tell what photo to find, can you 
  replace each link with an equivalent image url 
  and keep rest of the data exactly the same, each
  link should be working link to an image
`;
const exampleUsers = [
  {
    id: "1",
    creator: "u1",
    place: "Central Park",
    location: { lat: 40.785091, long: -73.968285 },
    imageUrl: "https://example.com/central_park.jpg",
  },
  {
    id: "2",
    creator: "u2",
    place: "Eiffel Tower",
    location: { lat: 48.858844, long: 2.294351 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
  },
  {
    id: "3",
    creator: "u3",
    place: "Great Wall of China",
    location: { lat: 40.431908, long: 116.570374 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Great_Wall_of_China_July_2006.JPG",
  },
  {
    id: "4",
    creator: "u4",
    place: "Sydney Opera House",
    location: { lat: -33.856784, long: 151.215297 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg",
  },
  {
    id: "5",
    creator: "u5",
    place: "Statue of Liberty",
    location: { lat: 40.689247, long: -74.044502 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
  },
  {
    id: "6",
    creator: "u1",
    place: "Machu Picchu",
    location: { lat: -13.163141, long: -72.544963 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
  },
  {
    id: "7",
    creator: "u2",
    place: "Christ the Redeemer",
    location: { lat: -22.951916, long: -43.210487 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Christ_the_Redeemer_-_Cristo_Redentor.jpg",
  },
  {
    id: "8",
    creator: "u3",
    place: "Colosseum",
    location: { lat: 41.890251, long: 12.492373 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
  },
  {
    id: "9",
    creator: "u4",
    place: "Taj Mahal",
    location: { lat: 27.175015, long: 78.042155 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
  },
  {
    id: "10",
    creator: "u5",
    place: "Mount Everest",
    location: { lat: 27.988257, long: 86.925145 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg",
  },
  {
    id: "11",
    creator: "u1",
    place: "Golden Gate Bridge",
    location: { lat: 37.819929, long: -122.478255 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/GoldenGateBridge-001.jpg",
  },
  {
    id: "12",
    creator: "u2",
    place: "Niagara Falls",
    location: { lat: 43.096214, long: -79.037739 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Niagara_Falls_from_Prospect_Point.jpg",
  },
  {
    id: "13",
    creator: "u3",
    place: "Santorini",
    location: { lat: 36.393156, long: 25.461509 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Santorini_Thira.jpg",
  },
  {
    id: "14",
    creator: "u4",
    place: "Grand Canyon",
    location: { lat: 36.106965, long: -112.112997 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Grand_Canyon_view_from_Pima_Point_2010.jpg",
  },
  {
    id: "15",
    creator: "u5",
    place: "Stonehenge",
    location: { lat: 51.178882, long: -1.826215 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
  },
  {
    id: "16",
    creator: "u1",
    place: "Pyramids of Giza",
    location: { lat: 29.979235, long: 31.134202 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
  },
  {
    id: "17",
    creator: "u2",
    place: "Burj Khalifa",
    location: { lat: 25.197197, long: 55.274376 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Burj_Khalifa.jpg",
  },
  {
    id: "18",
    creator: "u3",
    place: "Times Square",
    location: { lat: 40.758896, long: -73.98513 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
  },
  {
    id: "19",
    creator: "u4",
    place: "Louvre Museum",
    location: { lat: 48.860611, long: 2.337644 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Louvre_Museum_Wikimedia_Commons.jpg",
  },
  {
    id: "20",
    creator: "u5",
    place: "Hollywood Sign",
    location: { lat: 34.134115, long: -118.321548 },
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Hollywood_Sign.jpg",
  },
];

const users = [
  {
    id: "u1",
    name: "Rajesh Kumar",
    image: "https://i.pravatar.cc/300?img=1",
    places: 3,
  },
  {
    id: "u2",
    name: "Anita Sharma",
    image: "https://i.pravatar.cc/300?img=2",
    places: 3,
  },
  {
    id: "u3",
    name: "Vikram Singh",
    image: "https://i.pravatar.cc/300?img=3",
    places: 2,
  },
  {
    id: "u4",
    name: "Priya Patel",
    image: "https://i.pravatar.cc/300?img=4",
    places: 5,
  },
  {
    id: "u5",
    name: "Amitabh Bachchan",
    image: "https://i.pravatar.cc/300?img=5",
    places: 4,
  },
];
export { exampleUsers as DUMMY_PLACES, users as DUMMY_USERS };
