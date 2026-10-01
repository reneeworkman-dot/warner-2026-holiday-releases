export type Release = {
  id: string;
  artist: string;
  title: string;
  format: string;
  genre?: string;
  date?: string;
  focus?: string;
  label?: string;
  coverImage?: string;
  bullets?: string[];
  notes?: string;
};

// 2026 Holiday Hits from Google Sheet
export const newReleases: Release[] = [
  {
    id: "adore-2026",
    artist: "ADORE",
    title: "I’ll Hold On For Christmas",
    format: "Single",
    genre: "Holiday Pop",
    date: "November 6, 2026",
    label: "Warner Records",
    bullets: [
      "Brand-new seasonal anthem with soaring festive vocals",
      "Format: Digital Single & Streaming",
      "Release: Nov 6, 2026 · Warner Records",
      "Focus: 'I’ll Hold On For Christmas'"
    ]
  },
  {
    id: "lucky-daye-2026",
    artist: "LUCKY DAYE",
    title: "Holiday EP",
    format: "EP",
    genre: "R&B / Soul Holiday",
    date: "November 23, 2026",
    label: "Warner Records",
    bullets: [
      "Silky, soulful R&B holiday originals & fireside grooves",
      "Format: Digital EP & Streaming Suites",
      "Release: Nov 23, 2026 · Warner Records",
      "Master & sync clearance via Warner Records"
    ]
  },
  {
    id: "ryan-peter-murphy-single",
    artist: "RYAN PETER MURPHY",
    title: "Christmas in New England (Single)",
    format: "Single",
    genre: "Acoustic / Holiday",
    date: "October 9, 2026",
    label: "Warner Records",
    bullets: [
      "Warm New England charm, acoustic guitars & pine needles",
      "Format: Lead Single",
      "Release: Oct 9, 2026 · Warner Records",
      "Lead single off forthcoming holiday album"
    ]
  },
  {
    id: "ryan-peter-murphy-album",
    artist: "RYAN PETER MURPHY",
    title: "Christmas in New England (Full Album)",
    format: "Album",
    genre: "Holiday Album",
    date: "October 23, 2026",
    label: "Warner Records",
    bullets: [
      "Full-length cozy winter album capturing coastal holidays",
      "Format: Full Studio Album (Digital & Physical)",
      "Release: Oct 23, 2026 · Warner Records",
      "Focus: 'Christmas in New England'"
    ]
  },
  {
    id: "dan-shay-2026",
    artist: "DAN + SHAY",
    title: "It’s Beginning To Look A Lot Like Christmas",
    format: "Single",
    genre: "Country / Pop Holiday",
    date: "November 6, 2026",
    label: "Warner Music Nashville",
    bullets: [
      "Grammy-winning duo's signature lush holiday harmonies",
      "Format: Holiday Single",
      "Release: Nov 6, 2026 · Warner Music Nashville",
      "Focus: 'It’s Beginning To Look A Lot Like Christmas'"
    ]
  },
  {
    id: "highway-home-2026",
    artist: "HIGHWAY HOME",
    title: "Holiday EP",
    format: "EP",
    genre: "Americana / Roots",
    date: "November 6, 2026",
    label: "Warner Records",
    bullets: [
      "Heartfelt acoustic holiday storytelling & road trip warmth",
      "Format: 4-Song Holiday EP",
      "Release: Nov 6, 2026 · Warner Records",
      "Clean instrumental mixes available"
    ]
  },
  {
    id: "goo-goo-dolls-2026",
    artist: "GOO GOO DOLLS",
    title: "New Holiday Single",
    format: "Single",
    genre: "Alternative Rock Holiday",
    date: "Q4 2026 (TBD)",
    label: "Warner Records",
    bullets: [
      "Brand-new seasonal rock anthem from John Rzeznik & co.",
      "Format: Digital Single",
      "Release: Q4 2026 · Warner Records",
      "Companion release to 'It’s Christmas All Over'"
    ]
  },
  {
    id: "jenna-raine-2026",
    artist: "JENNA RAINE",
    title: "Frosty / A Baby Was Born",
    format: "2-Pack Single",
    genre: "Pop / Holiday",
    date: "Q4 2026",
    label: "Warner Records",
    bullets: [
      "Dual festive release: playful seasonal cover + heartfelt original",
      "Format: 2-Pack Holiday Single",
      "Release: Q4 2026 · Warner Records",
      "Focus: 'Frosty' & 'A Baby Was Born'"
    ]
  },
  {
    id: "anna-rae-shouldnt",
    artist: "ANNA RAE",
    title: "Shouldn’t It Be Christmas",
    format: "Single",
    genre: "Country / Holiday",
    date: "October 30, 2026",
    label: "JOA / Warner Music Nashville",
    bullets: [
      "Sweet, reflective country storytelling with festive fiddles",
      "Format: Digital Single",
      "Release: Oct 30, 2026 · Warner Nashville",
      "Focus: 'Shouldn’t It Be Christmas'"
    ]
  },
  {
    id: "ingrid-andress-2026",
    artist: "INGRID ANDRESS",
    title: "Snowed In With Me",
    format: "Single",
    genre: "Country / Acoustic",
    date: "October 30, 2026",
    label: "Warner Music Nashville",
    bullets: [
      "Intimate, witty, romantic cabin-in-the-snow fireside ballad",
      "Format: Holiday Single",
      "Release: Oct 30, 2026 · Warner Nashville",
      "Focus: 'Snowed In With Me'"
    ]
  },
  {
    id: "morgan-wade-2026",
    artist: "MORGAN WADE",
    title: "Christmas List",
    format: "Single",
    genre: "Country / Americana",
    date: "November 13, 2026",
    label: "Warner Music Nashville",
    bullets: [
      "Raw, authentic raspy vocals with gritty emotional heart",
      "Format: Digital Single",
      "Release: Nov 13, 2026 · Warner Nashville",
      "Focus: 'Christmas List'"
    ]
  },
  {
    id: "anna-rae-eve",
    artist: "ANNA RAE",
    title: "Christmas Eve",
    format: "Single",
    genre: "Country / Holiday",
    date: "November 13, 2026",
    label: "JOA / Warner Music Nashville",
    bullets: [
      "Anticipatory holiday warmth full of family nostalgia",
      "Format: Digital Single",
      "Release: Nov 13, 2026 · Warner Nashville",
      "Focus: 'Christmas Eve'"
    ]
  },
  {
    id: "tyler-braden-2026",
    artist: "TYLER BRADEN",
    title: "A Lot Like Christmas",
    format: "Single",
    genre: "Country Rock Holiday",
    date: "November 13, 2026",
    label: "Warner Music Nashville",
    bullets: [
      "Powerhouse country-rock vocals with driving winter energy",
      "Format: Digital Single",
      "Release: Nov 13, 2026 · Warner Nashville",
      "Focus: 'A Lot Like Christmas'"
    ]
  },
  {
    id: "colton-dawson-2026",
    artist: "COLTON DAWSON",
    title: "I’ll Be Home For Christmas",
    format: "Single",
    genre: "Country / Holiday",
    date: "November 24, 2026",
    label: "Warner Music Nashville",
    bullets: [
      "Classic heartfelt crooner delivery with steel guitar textures",
      "Format: Digital Single",
      "Release: Nov 24, 2026 · Warner Nashville",
      "Focus: 'I’ll Be Home For Christmas'"
    ]
  },
  {
    id: "slater-nalley-2026",
    artist: "SLATER NALLEY (w/ THE CASTELLOWS)",
    title: "January",
    format: "Single",
    genre: "Folk / Americana",
    date: "December 2026 (TBD)",
    label: "Warner Music Nashville",
    bullets: [
      "Breathtaking multi-part southern harmonies & winter longing",
      "Format: Digital Single Collaboration",
      "Release: Dec 2026 · Warner Nashville",
      "Focus: 'January'"
    ]
  },
  {
    id: "redferrin-2026",
    artist: "REDFERRIN",
    title: "Holiday Single (Title TBD)",
    format: "Single",
    genre: "Country / Southern",
    date: "Q4 2026 (TBD)",
    label: "Warner Music Nashville",
    bullets: [
      "High-energy southern holiday track full of rowdy cheer",
      "Format: Digital Single",
      "Release: Q4 2026 · Warner Nashville",
      "Focus: Track Title TBD"
    ]
  },
  {
    id: "dasha-2026",
    artist: "DASHA",
    title: "New Holiday Release",
    format: "Single",
    genre: "Pop / Alternative",
    date: "Coming Soon 2026",
    label: "Warner Records",
    bullets: [
      "Fresh new holiday follow-up to 'Driving Home For Christmas'",
      "Format: Digital Single",
      "Release: Q4 2026 · Warner Records",
      "Focus: New 2026 Single"
    ]
  }
];

// Dolly Parton Special Memorial & Catalog Data
export const dollyMemorial = {
  artist: "Dolly Parton",
  albumTitle: "A Holly Dolly Christmas (Ultimate Deluxe Edition)",
  tagline: "The Incomparable Queen of Smoky Mountain Christmas",
  tributeQuote: "“If you see someone without a smile today, give 'em one of yours.”",
  memorialNote: "A sparkling, eternal celebration of Dolly’s boundless heart, generosity, and the timeless gift of song that will forever light our holidays.",
  focusTrack: "Cuddle Up, Cozy Down Christmas (feat. Michael Bublé)",
  tracks: [
    {
      title: "Cuddle Up, Cozy Down Christmas",
      artist: "Dolly Parton & Michael Bublé",
      duration: "3:39",
      vibe: "Flirtatious big band swing duet with sparkling holiday humor",
      focus: true
    },
    {
      title: "Holly Jolly Christmas",
      artist: "Dolly Parton",
      duration: "3:21",
      vibe: "Pure country-pop sunshine and Dolly's signature infectious smile"
    },
    {
      title: "Christmas Is",
      artist: "Dolly Parton feat. Miley Cyrus",
      duration: "3:17",
      vibe: "Warm, generous godmother-goddaughter harmony on giving back"
    },
    {
      title: "A Smoky Mountain Christmas",
      artist: "Dolly Parton",
      duration: "2:10",
      vibe: "Appalachian fiddle, cozy cabin fireside banjo, and southern nostalgia"
    },
    {
      title: "All I Want For Christmas Is You",
      artist: "Dolly Parton feat. Jimmy Fallon",
      duration: "4:04",
      vibe: "Playful holiday rom-com duet packed with laugh-out-loud charm"
    },
    {
      title: "Comin’ Home For Christmas",
      artist: "Dolly Parton",
      duration: "4:28",
      vibe: "Heartfelt homecoming anthem for everyone traveling to see loved ones"
    },
    {
      title: "Pretty Paper",
      artist: "Dolly Parton feat. Willie Nelson",
      duration: "3:33",
      vibe: "Legendary outlaw country holiday warmth with acoustic guitar"
    },
    {
      title: "Circle Of Love",
      artist: "Dolly Parton",
      duration: "3:42",
      vibe: "Lush, spiritual Christmas hymn bathed in acoustic reverie"
    },
    {
      title: "Mary, Did You Know?",
      artist: "Dolly Parton",
      duration: "4:26",
      vibe: "Soaring, emotionally transcendent gospel powerhouse vocal"
    },
    {
      title: "I Saw Mommy Kissing Santa Claus",
      artist: "Dolly Parton",
      duration: "2:44",
      vibe: "Wink-and-a-nod classic delivered with quintessential Dolly sass"
    }
  ],
  legacyHighlights: [
    "Over 100 million records sold worldwide and 11 Grammy Awards",
    "Donated over 250 million books to children worldwide through the Imagination Library",
    "#1 Billboard Top Country & Top Holiday Albums chart milestone",
    "Pre-cleared 20-track Ultimate Deluxe Edition via Butterfly Records / Warner Records"
  ]
};

// "The Gift of Christmas Past" - All Past Releases from Google Sheet
export const pastReleases = [
  {
    category: "Last Year’s Favorites (2025)",
    items: [
      {
        artist: "DASHA",
        title: "“Driving Home For Christmas”",
        format: "Single",
        genre: "Country / Holiday",
        date: "Nov 7, 2025",
        bullets: [
          "Breakout viral sensation with a breezy, nostalgic country holiday highway vibe",
          "One-stop sync clearance available via Warner Records"
        ]
      },
      {
        artist: "WARREN ZEIDERS",
        title: "“How Great Thou Art”",
        format: "Single",
        genre: "Gospel / Country",
        date: "Oct 31, 2025",
        bullets: [
          "Deep, raspy southern gothic country gospel hymn with raw spiritual power",
          "Huge streaming velocity across heartland audiences"
        ]
      },
      {
        artist: "MADDOX BATSON",
        title: "“Home for the Holidays”",
        format: "2-Pack Single",
        genre: "Country / Holiday",
        date: "Nov 13, 2025",
        bullets: [
          "Rising country phenom delivering cozy small-town porch traditions",
          "Features 2 acoustic holiday cuts"
        ]
      },
      {
        artist: "ALEX ISLEY",
        title: "“The Christmas Song”",
        format: "Single",
        genre: "R&B / Holiday",
        date: "Nov 14, 2025",
        bullets: [
          "Sensual, velvety R&B vocal reimagination of the Mel Tormé fireside classic",
          "Perfect for late-night holiday and luxury lifestyle sync"
        ]
      },
      {
        artist: "HONEY BXBY",
        title: "“All I Want”",
        format: "Single",
        genre: "Contemporary R&B",
        date: "Nov 7, 2025",
        bullets: [
          "Fresh urban holiday groove with smooth modern production",
          "Youth-skewing partner campaigns"
        ]
      },
      {
        artist: "GABBY BARRETT",
        title: "Candles and Candlelight (Deluxe)",
        format: "Album",
        genre: "Country / Holiday",
        date: "Nov 7, 2025",
        bullets: [
          "Focus: “Where Are You Christmas” (specifically off the Deluxe edition)",
          "Reheated catalog priority with multi-platinum powerhouse vocals"
        ]
      },
      {
        artist: "DAN + SHAY",
        title: "“Long Live Christmas”",
        format: "Single",
        genre: "Country / Pop",
        date: "Nov 7, 2025",
        bullets: [
          "Uplifting celebratory festive anthem filled with hope and jingle bells",
          "Multi-year holiday radio mainstay"
        ]
      }
    ]
  },
  {
    category: "Evergreen Warner Legends & Catalog Staples",
    items: [
      {
        artist: "MICHAEL BUBLÉ",
        title: "Christmas (Deluxe 10th Anniversary Edition)",
        format: "Album",
        genre: "Traditional Big Band / Jazz",
        date: "Catalog Pillar",
        bullets: [
          "Focus: “It’s Beginning To Look a Lot Like Christmas”",
          "Over 16M albums sold worldwide — the definitive 21st-century holiday standard",
          "Available in Dolby Atmos Spatial Audio & clean instrumental WAV stems"
        ]
      },
      {
        artist: "JOSH GROBAN",
        title: "Noël",
        format: "Album",
        genre: "Classical Crossover / Traditional",
        date: "Catalog Pillar",
        bullets: [
          "Focus: “Believe” (from The Polar Express)",
          "Multi-platinum orchestral masterpiece produced by David Foster",
          "Quintessential cinematic holiday music"
        ]
      },
      {
        artist: "CHER",
        title: "Christmas",
        format: "Album",
        genre: "Pop / Dance Holiday",
        date: "Catalog Hit",
        bullets: [
          "Focus: “DJ Play A Christmas Song”",
          "Global #1 dance smash; features Stevie Wonder, Cyndi Lauper & Darlene Love",
          "Turnkey commercial broadcast and retail sync approvals"
        ]
      },
      {
        artist: "THE GOO GOO DOLLS",
        title: "It’s Christmas All Over",
        format: "Album",
        genre: "Rock / Alternative Holiday",
        date: "Catalog Hit",
        bullets: [
          "Focus: “Christmas All Over Again”",
          "Warm Tom Petty-style alternative rock nostalgia recorded with chiming guitars",
          "Originals plus timeless holiday rock favorites"
        ]
      },
      {
        artist: "FAITH HILL",
        title: "Joy To The World",
        format: "Album",
        genre: "Traditional Country / Orchestral",
        date: "Catalog Classic",
        bullets: [
          "Focus: “O Come, All Ye Faithful”",
          "Grand orchestral brass, gospel choirs, and one of country's greatest voices",
          "Timeless holiday broadcast sync licensing"
        ]
      },
      {
        artist: "TEDDY SWIMS",
        title: "A Very Teddy Christmas",
        format: "EP",
        genre: "Soul / R&B",
        date: "Catalog EP",
        bullets: [
          "Focus: “Silent Night”",
          "Raw, spine-tingling powerhouse vocal performance with warm gospel keys",
          "Emotional storytelling for films, trailers, and holiday charity spots"
        ]
      },
      {
        artist: "SAWEETIE",
        title: "“Big Santa / I Want You This Christmas”",
        format: "Single",
        genre: "Hip-Hop / Holiday",
        date: "Catalog Single",
        bullets: [
          "High-energy holiday swagger for Gen-Z, fashion, and social campaigns"
        ]
      },
      {
        artist: "GRIFF",
        title: "“Pure Imagination”",
        format: "Single",
        genre: "Dream Pop / Acoustic",
        date: "Catalog Single",
        bullets: [
          "Whimsical, intimate, cinematic fairytale holiday acoustic arrangement"
        ]
      },
      {
        artist: "BRANDY CLARK",
        title: "“My Favorite Christmas” & “I’ll Be Home For Christmas”",
        format: "Single",
        genre: "Americana / Country Folk",
        date: "Catalog Single",
        bullets: [
          "Wry, tender, critically acclaimed songwriting from Grammy-winning artist"
        ]
      },
      {
        artist: "PATRICK DRONEY",
        title: "“All I Want For Christmas Is You”",
        format: "Single",
        genre: "Blues / Soulful Rock",
        date: "Catalog Single",
        bullets: [
          "Bluesy electric guitar licks and gritty soulful vocals"
        ]
      },
      {
        artist: "GREEN DAY",
        title: "“Xmas Time of the Year”",
        format: "Single",
        genre: "Punk Rock / Holiday",
        date: "Catalog Single",
        bullets: [
          "Energetic punk rock blast of rebellious holiday cheer"
        ]
      },
      {
        artist: "MY CHEMICAL ROMANCE",
        title: "“All I Want For Christmas Is You (2005)”",
        format: "Single",
        genre: "Alt Rock / Emo Anthem",
        date: "Cult Classic",
        bullets: [
          "Iconic high-octane rock cover beloved by millions of alternative music fans"
        ]
      },
      {
        artist: "MORGAN WADE",
        title: "Christmas in My Dreams",
        format: "EP",
        genre: "Country / Americana",
        date: "Catalog EP",
        bullets: [
          "Acoustic fireside holiday songs filled with honest southern charm"
        ]
      }
    ]
  }
];
