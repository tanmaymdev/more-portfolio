export type TripDay = {
  label: string;
  title: string;
  highlights: string[];
};

export type Trip = {
  id: string;
  name: string;
  type: "national-park" | "city";
  location: string;
  period: string;
  duration: string;
  companions: string;
  teaser: string;
  days: TripDay[];
  accentColor: string;
};

export const trips: Trip[] = [
  {
    id: "grand-canyon",
    name: "Grand Canyon & Antelope Canyon",
    type: "national-park",
    location: "Arizona, USA",
    period: "July",
    duration: "4 days",
    companions: "friends",
    teaser:
      "South Rim rim walks, a slot canyon tour, and a dawn-to-dusk hike to Skeleton Point.",
    accentColor: "#B8860B",
    days: [
      {
        label: "Day 1",
        title: "Travel to Phoenix",
        highlights: [
          "Fly into Phoenix Sky Harbor, check in",
          "Rest up — 6 am departure tomorrow",
        ],
      },
      {
        label: "Day 2",
        title: "Grand Canyon South Rim",
        highlights: [
          "Leave PHX at 6 am, arrive South Rim ~10 am",
          "Mather Point — first look at the canyon",
          "Rim Trail east: Yavapai Point overlook, Museum of Geology, Trail of Time",
          "Lunch at Grand Canyon Village",
          "Hermit Road shuttle — all 8 overlooks west to Hermits Rest (Trailview, Maricopa, Powell, Hopi, Mohave, Pima, Monument Creek Vista)",
          "Sunset from Hopi Point or Mohave Point",
          "Drive to Tusayan for dinner",
        ],
      },
      {
        label: "Day 3",
        title: "Antelope Canyon & Horseshoe Bend",
        highlights: [
          "3-hour drive to Page, AZ",
          "Lower Antelope Canyon guided tour (~1.5 hrs) — light beams through the slot canyon",
          "Lunch in Page",
          "Horseshoe Bend — 1-mile round trip walk to the overlook",
          "Stay for sunset at the bend",
          "Drive back to Tusayan, dinner",
        ],
      },
      {
        label: "Day 4",
        title: "South Kaibab Trail Hike",
        highlights: [
          "Pack lunch in Tusayan, early departure",
          "South Kaibab Trailhead → Ooh Aah Point (0.9 mi) → Cedar Ridge (1.5 mi) → Skeleton Point (3 mi)",
          "~5 hours round trip, ~1,800 ft elevation change",
          "Lunch at Cedar Ridge on the way back up",
          "Drive east on Desert View Drive — stop at overlooks along the way",
          "Sunset at Desert View Watchtower",
          "Drive to Flagstaff for dinner, then home to Phoenix",
        ],
      },
    ],
  },
  {
    id: "tahoe-yosemite",
    name: "Lake Tahoe & Yosemite",
    type: "national-park",
    location: "California, USA",
    period: "Summer",
    duration: "3 days",
    companions: "friends",
    teaser:
      "Emerald Bay kayaking, Yosemite valley floor, and a mist-trail hike to Vernal Falls.",
    accentColor: "#2A5F7C",
    days: [
      {
        label: "Day 1",
        title: "Lake Tahoe",
        highlights: [
          "Morning drive to Lake Tahoe",
          "Emerald Bay State Park — scenic overlook and lunch",
          "Inspiration Point viewpoint above the bay",
          "Kayaking on Lake Tahoe",
          "Evening at Heavenly Village",
          "Dinner at Base Camp Pizza",
          "Stay in Lake Tahoe",
        ],
      },
      {
        label: "Day 2",
        title: "Drive to Yosemite · Valley Floor",
        highlights: [
          "Leave Lake Tahoe in the morning",
          "Reach Yosemite Valley ~1pm",
          "Valley View overlook",
          "Bridalveil Fall",
          "Lower Yosemite Fall trail",
          "Cooks Meadow loop — meadow views of Half Dome and Yosemite Falls",
          "Tunnel View at sunset",
        ],
      },
      {
        label: "Day 3",
        title: "Vernal Falls & Mariposa Grove",
        highlights: [
          "Vernal Falls hike via Mist Trail (~4 hrs round trip)",
          "Mariposa Grove of Giant Sequoias or Hetch Hetchy Reservoir",
          "Leave Yosemite by 7pm",
        ],
      },
    ],
  },
  {
    id: "pacific-northwest",
    name: "Seattle, Rainier & Olympic Peninsula",
    type: "national-park",
    location: "Washington, USA",
    period: "Aug – Sep",
    duration: "4 days",
    companions: "friends",
    teaser:
      "Two national parks, a temperate rainforest, sea stacks at the edge of the continent, and hot springs in between.",
    accentColor: "#2D5A3D",
    days: [
      {
        label: "Day 1",
        title: "Seattle Arrival",
        highlights: [
          "Space Needle",
          "Seattle Downtown — 3rd Avenue, Pike Place area",
          "Dinner in the city",
        ],
      },
      {
        label: "Day 2",
        title: "Mount Rainier National Park",
        highlights: [
          "Leave Seattle at 7am, enter via Nisqually Entrance, reach Rainier ~9am",
          "Longmire historic district & Christine Falls",
          "Paradise Visitor Center and Skyline Trail to Myrtle Falls",
          "Lunch at Paradise",
          "Reflection Lakes",
          "Narada Falls and Stevens Canyon Road",
          "Return to Seattle by 5pm, dinner",
        ],
      },
      {
        label: "Day 3",
        title: "Olympic NP — Hurricane Ridge, Lake Crescent & Sol Duc",
        highlights: [
          "Leave Seattle at 7am, reach Port Angeles ~9:30am",
          "Hurricane Ridge (40-min drive up) — alpine meadows and mountain views",
          "Depart Hurricane Ridge by 11:30am, drive to Lake Crescent (1 hr)",
          "Marymere Falls hike (1.8 miles round trip), lunch by the lake",
          "Drive to Sol Duc Falls trailhead at 2:15pm (40 mins)",
          "Sol Duc Falls hike (1.6 miles round trip through old-growth forest)",
          "Optional: Sol Duc Hot Springs soak",
          "Return to Port Angeles (1 hr 10 min), check in, dinner",
        ],
      },
      {
        label: "Day 4",
        title: "Cape Flattery, Hoh Rainforest & Ruby Beach",
        highlights: [
          "Leave for Cape Flattery — northwesternmost point of the contiguous US",
          "Cape Flattery Trail (0.75 miles each way) — sea stacks, Tatoosh Island, and Pacific Ocean views",
          "Drive to Hoh Rain Forest (2.5 hrs)",
          "Lunch at Hoh, then Hall of Mosses Trail (0.8 mi) and Spruce Nature Trail (1.2 mi)",
          "Drive to Ruby Beach (1 hr) — driftwood coastline and dramatic sea stacks",
          "Kalaloch Beach area — Beach 1, 2, and 3",
          "Leave for Seattle at 6pm, dinner on the way, reach Seattle by 10pm",
        ],
      },
    ],
  },
  {
    id: "zion-bryce",
    name: "Zion & Bryce Canyon",
    type: "national-park",
    location: "Utah, USA",
    period: "May",
    duration: "3 days",
    companions: "friends",
    teaser:
      "Angels Landing chains, the Narrows knee-deep, hoodoos at sunrise, and stargazing from Bryce.",
    accentColor: "#8B4513",
    days: [
      {
        label: "Day 1",
        title: "Zion National Park — Angels Landing & Emerald Pools",
        highlights: [
          "Leave Las Vegas at 7am, reach Zion ~11am",
          "Park at hotel, check in if available, grab lunch",
          "Angels Landing trail — Scout Lookout and the chain section to the summit",
          "Emerald Pools trail (Lower, Middle, Upper) in the evening",
          "Dinner in Springdale",
        ],
      },
      {
        label: "Day 2",
        title: "The Narrows, Watchman & Canyon Overlook",
        highlights: [
          "Breakfast, then pick up Narrows wading gear rental",
          "The Narrows — hike up the Virgin River gorge (full morning)",
          "Finish Narrows, lunch in the park",
          "Watchman Trail (3.3 miles round trip, panoramic views of Zion Canyon)",
          "Canyon Overlook Trail and Checkerboard Mesa viewpoint along the scenic drive",
          "Drive to Panguitch (~1 hr), dinner, check in",
        ],
      },
      {
        label: "Day 3",
        title: "Bryce Canyon National Park",
        highlights: [
          "Drive to Bryce Canyon (~45 min), scenic rim drive",
          "Lunch",
          "Navajo Loop and Queens Garden Trail (3–4 miles combined) — through the heart of the hoodoos",
          "Optional: Mossy Cave Trail (1 mile, waterfall and hoodoo views)",
          "Dinner",
          "Stargazing — Bryce is a Gold Tier Dark Sky Park",
        ],
      },
    ],
  },
  {
    id: "las-vegas-death-valley",
    name: "Las Vegas & Death Valley",
    type: "city",
    location: "Nevada & California, USA",
    period: "Feb – Mar",
    duration: "4 days",
    companions: "friends",
    teaser:
      "Lowest point in North America by day, Sphere and Absinthe by night — plus Fremont Street to close it out.",
    accentColor: "#6B4C8A",
    days: [
      {
        label: "Day 1",
        title: "Arrival in Las Vegas",
        highlights: [
          "Arrive Las Vegas, pick up rental car",
          "Check in and late dinner on the Strip",
        ],
      },
      {
        label: "Day 2",
        title: "Death Valley National Park Day Trip",
        highlights: [
          "Depart Las Vegas at 8am",
          "Dante's View — panoramic overlook of the valley floor, 5,475 ft above",
          "Zabriskie Point — badlands and golden ridgelines",
          "Badwater Basin — salt flats at 282 ft below sea level, lowest point in North America",
          "Lunch break",
          "Devil's Golf Course — jagged salt crystal formations",
          "Artist's Palette Drive and Furnace Creek Visitor Centre",
          "Mesquite Flat Sand Dunes",
          "Return to Las Vegas by 7pm, dinner",
        ],
      },
      {
        label: "Day 3",
        title: "Las Vegas — Shows & the Strip",
        highlights: [
          "Breakfast, check out and drop luggage at Marriott",
          "Wynn casino floor and lobby",
          "Lunch, then the Sphere immersive experience",
          "Venetian Grand Canal Shoppes",
          "Check in to Marriott, then Flamingo and Caesars Palace",
          "Absinthe show at Caesars",
          "Dinner, then late-night Strip walk — Mirage fountains, Bellagio water show",
          "Casino",
        ],
      },
      {
        label: "Day 4",
        title: "More Strip, Cirque du Soleil & Fremont Street",
        highlights: [
          "Breakfast",
          "Luxor and Excalibur",
          "Lunch",
          "KÀ by Cirque du Soleil at MGM Grand",
          "New York–New York and MGM Grand",
          "Penn & Teller show at the Rio",
          "Fremont Street Experience — LED canopy light show",
        ],
      },
    ],
  },
  {
    id: "new-york",
    name: "New York City Weekend",
    type: "city",
    location: "New York, USA",
    period: "Winter",
    duration: "2 days",
    companions: "friends",
    teaser:
      "Empire State views, Brooklyn Bridge at dusk, MoMA, the 9/11 Memorial, and Times Square twice — because once is never enough.",
    accentColor: "#1A1A2E",
    days: [
      {
        label: "Day 1",
        title: "Midtown, Brooklyn Bridge & MoMA",
        highlights: [
          "Breakfast at a local diner near Midtown",
          "Empire State Building observation deck — arrive early to beat the crowds",
          "Herald Square and Fifth Avenue — Macy's, Bryant Park",
          "Lunch at a nearby restaurant or food truck",
          "Times Square — billboards, street performers, controlled chaos",
          "Walk the Brooklyn Bridge — Manhattan skyline and East River views",
          "Museum of Modern Art (MoMA) — Starry Night, Campbell's Soup Cans",
          "Dinner in the Theater District",
        ],
      },
      {
        label: "Day 2",
        title: "Lower Manhattan, Greenwich Village & Chelsea",
        highlights: [
          "Breakfast at a cozy café",
          "9/11 Memorial & Museum — Reflecting Absence pools and the museum",
          "Lunch in the Financial District",
          "Battery Park — Statue of Liberty and Ellis Island views across the harbor",
          "Greenwich Village — cobblestone streets, boutiques, coffee",
          "Chelsea Market — food vendors and shops",
          "New York-style pizza dinner",
          "Nighttime Times Square walk — the city that never sleeps",
        ],
      },
    ],
  },
  {
    id: "san-diego",
    name: "San Diego",
    type: "city",
    location: "California, USA",
    period: "Summer",
    duration: "3 days",
    companions: "friends",
    teaser:
      "Zoo, sea caves, kayaking with sea lions, whale watching, and the kind of tacos that ruin you for all other tacos.",
    accentColor: "#1B6CA8",
    days: [
      {
        label: "Day 1",
        title: "San Diego Zoo & Little Italy",
        highlights: [
          "San Diego Zoo — one of the best in the world, give it half a day minimum",
          "Stroll through Balboa Park on the way out — Spanish Colonial Revival architecture and gardens",
          "Head to Little Italy in the late afternoon as the streets come alive",
          "Walk India Street and Kettner Blvd as the sun dips — golden hour over the bay",
          "Dinner in Little Italy — fresh pasta, wood-fired pizza, outdoor seating",
        ],
      },
      {
        label: "Day 2",
        title: "La Jolla & Mission Beach",
        highlights: [
          "Breakfast at a local café — try anything near the La Jolla village",
          "La Jolla Cove — sea caves, dramatic cliffs, and a colony of sunbathing sea lions",
          "Kayaking through the sea caves at La Jolla — paddle through arched rock formations with the ocean below",
          "Snorkeling in the La Jolla Cove Ecological Reserve — kelp forests, garibaldi fish, leopard sharks",
          "Drive down to Mission Beach, grab a board or a volleyball",
          "Beach volleyball on the sand until the sky turns orange",
        ],
      },
      {
        label: "Day 3",
        title: "Whale Watching, Tacos & the Gaslamp Quarter",
        highlights: [
          "Slow breakfast — eggs, coffee, no rush",
          "Morning whale watching cruise from the harbor — gray whales, dolphins, and open Pacific",
          "Back on land: fish tacos at a no-frills spot near the waterfront (this is the move)",
          "Afternoon beach volleyball and a proper Pacific Coast sunset",
          "Evening in the Gaslamp Quarter — San Diego's downtown nightlife strip, rooftop bars and live music",
        ],
      },
    ],
  },
];
