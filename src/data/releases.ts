export type Release = {
  artist: string;
  title: string;
  format: string;
  genre?: string;
  date?: string;
  focus?: string;
  label?: string;
  cover?: boolean;
};

export const newReleases: Release[] = [
  { artist: "adore", title: "I’ll Hold On For Christmas", format: "Single", date: "Nov 6, 2026", label: "Warner Records" },
  { artist: "Lucky Daye", title: "Holiday EP", format: "EP", genre: "Holiday", date: "Nov 23, 2026", label: "Warner Records" },
  { artist: "Ryan Peter Murphy", title: "Christmas in New England", format: "Single", genre: "Holiday", date: "Oct 9, 2026", label: "Warner Records" },
  { artist: "Ryan Peter Murphy", title: "Christmas in New England", format: "Album", genre: "Holiday", date: "Oct 23, 2026", label: "Warner Records" },
  { artist: "Dan + Shay", title: "It’s Beginning To Look A Lot Like Christmas", format: "Single", genre: "Holiday", date: "Nov 6, 2026", label: "Nashville" },
  { artist: "Highway Home", title: "Holiday EP", format: "EP", date: "Nov 6, 2026", label: "Warner Records" },
  { artist: "Goo Goo Dolls", title: "New holiday single", format: "Single", date: "Date TBD", label: "Warner Records" },
  { artist: "Jenna Raine", title: "Frosty / A Baby Was Born", format: "2-pack single", label: "Warner Records" },
  { artist: "Anna Rae", title: "Shouldn’t It Be Christmas", format: "Single", genre: "Holiday / Country", date: "Oct 30, 2026", label: "Nashville" },
  { artist: "Ingrid Andress", title: "Snowed In With Me", format: "Single", date: "Oct 30, 2026", label: "Nashville" },
  { artist: "Anna Rae", title: "Christmas Eve", format: "Single", date: "Nov 13, 2026", label: "Nashville" },
  { artist: "Morgan Wade", title: "Christmas List", format: "Single", genre: "Holiday", date: "Nov 13, 2026", label: "Nashville" },
  { artist: "Tyler Braden", title: "A Lot Like Christmas", format: "Single", genre: "Holiday", date: "Nov 13, 2026", label: "Nashville" },
  { artist: "Colton Dawson", title: "I’ll Be Home For Christmas", format: "Single", genre: "Holiday", date: "Nov 24, 2026", cover: true, label: "Nashville" },
  { artist: "Slater Nalley", title: "January (with The Castellows)", format: "Single", genre: "Holiday", date: "December TBD", label: "Nashville" },
  { artist: "Redferrin", title: "Title TBD", format: "Single", genre: "Holiday", date: "Date TBD", label: "Nashville" },
  { artist: "Dasha", title: "New holiday release", format: "Coming soon", genre: "Pop / Alternative", label: "Warner Records" },
];

export const dolly = {
  artist: "Dolly Parton",
  title: "A Holly Dolly Christmas",
  edition: "Ultimate Deluxe Edition",
  format: "Album",
  focus: "Cuddle Up, Cozy Down Christmas (feat. Michael Bublé)",
  also: [
    "Holly Jolly Christmas",
    "Christmas Is (feat. Miley Cyrus)",
    "Pretty Paper (feat. Willie Nelson)",
    "All I Want For Christmas Is You (feat. Jimmy Fallon)",
    "Comin’ Home For Christmas",
  ],
};

export const lastYear: Release[] = [
  { artist: "Dasha", title: "Driving Home For Christmas", format: "Single", genre: "Country / Holiday", date: "Nov 7, 2025", cover: true },
  { artist: "Warren Zeiders", title: "How Great Thou Art", format: "Single", genre: "Gospel / Country", date: "Oct 31, 2025", cover: true },
  { artist: "Maddox Batson", title: "Home for the Holidays", format: "2-pack single", genre: "Country / Holiday", date: "Nov 13, 2025" },
  { artist: "Alex Isley", title: "The Christmas Song", format: "Single", genre: "R&B / Holiday", date: "Nov 14, 2025", cover: true },
  { artist: "Honey Bxby", title: "All I Want", format: "Single", genre: "R&B", date: "Nov 7, 2025" },
  { artist: "Gabby Barrett", title: "Candles and Candlelight", format: "Album", genre: "Holiday / Country", date: "Nov 7, 2025", focus: "Where Are You Christmas" },
  { artist: "Dan + Shay", title: "Long Live Christmas", format: "Single", genre: "Holiday", date: "Nov 7, 2025" },
];

export const catalog: Release[] = [
  { artist: "Michael Bublé", title: "Christmas (Deluxe 10th Anniversary Edition)", format: "Album", focus: "It’s Beginning To Look a Lot Like Christmas" },
  { artist: "Josh Groban", title: "Noël", format: "Album", focus: "Believe" },
  { artist: "Cher", title: "Christmas", format: "Album", focus: "DJ Play a Christmas Song" },
  { artist: "The Goo Goo Dolls", title: "It’s Christmas All Over", format: "Album", focus: "Christmas All Over Again" },
  { artist: "Faith Hill", title: "Joy To The World", format: "Album", focus: "O Come, All Ye Faithful" },
  { artist: "Teddy Swims", title: "A Very Teddy Christmas", format: "EP", focus: "Silent Night" },
  { artist: "Saweetie", title: "Big Santa / I Want You This Christmas", format: "Single" },
  { artist: "Griff", title: "Pure Imagination", format: "Single" },
  { artist: "Brandy Clark", title: "My Favorite Christmas / I’ll Be Home For Christmas", format: "Single" },
  { artist: "Brandy Clark", title: "My Favorite Christmas", format: "Single" },
  { artist: "Patrick Droney", title: "All I Want for Christmas Is You", format: "Single" },
  { artist: "Green Day", title: "Xmas Time of the Year", format: "Single" },
  { artist: "My Chemical Romance", title: "All I Want For Christmas Is You (2005)", format: "Single" },
  { artist: "Morgan Wade", title: "Christmas in My Dreams", format: "EP", genre: "Holiday / Country" },
];
