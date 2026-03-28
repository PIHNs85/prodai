// Curated Pexels image URLs for each review
// Using Pexels CDN format: https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w={width}&h={height}&fit=crop

export type CardAspect = "225/338";

export interface ReviewImages {
  card: string;       // Gallery card image
  cardAspect: CardAspect; // Card aspect ratio
  hero: string;       // Detail page hero
  gallery: string[];  // Detail page gallery (4 images)
}

function pexels(id: number, w = 800, h = 600): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;
}

export const reviewImages: Record<string, ReviewImages> = {
  "the-last-signal": {
    card: pexels(8474726, 450, 676),
    cardAspect: "225/338",
    hero: pexels(28436251, 1400, 800),
    gallery: [
      pexels(13753343, 800, 500),
      pexels(28436251, 800, 500),
      pexels(8474726, 800, 500),
      pexels(2159, 800, 500),
    ],
  },
  "borrowed-time": {
    card: pexels(2922718, 450, 676),
    cardAspect: "225/338",
    hero: pexels(4975645, 1400, 800),
    gallery: [
      pexels(2922718, 800, 500),
      pexels(13703305, 800, 500),
      pexels(4975645, 800, 500),
      pexels(1178684, 800, 500),
    ],
  },
  "night-market": {
    card: pexels(32670989, 450, 676),
    cardAspect: "225/338",
    hero: pexels(35398717, 1400, 800),
    gallery: [
      pexels(32670989, 800, 500),
      pexels(35398717, 800, 500),
      pexels(2526105, 800, 500),
      pexels(3052361, 800, 500),
    ],
  },
  "the-painted-door": {
    card: pexels(8316373, 450, 676),
    cardAspect: "225/338",
    hero: pexels(8467502, 1400, 800),
    gallery: [
      pexels(8316373, 800, 500),
      pexels(8467502, 800, 500),
      pexels(277559, 800, 500),
      pexels(1544420, 800, 500),
    ],
  },
  "echo-park": {
    card: pexels(32423533, 450, 676),
    cardAspect: "225/338",
    hero: pexels(22031802, 1400, 800),
    gallery: [
      pexels(32423533, 800, 500),
      pexels(32084977, 800, 500),
      pexels(22031802, 800, 500),
      pexels(1024960, 800, 500),
    ],
  },
  "velocity": {
    card: pexels(1639897, 450, 676),
    cardAspect: "225/338",
    hero: pexels(2618118, 1400, 800),
    gallery: [
      pexels(1639897, 800, 500),
      pexels(19286539, 800, 500),
      pexels(2618118, 800, 500),
      pexels(3136673, 800, 500),
    ],
  },
  "the-silent-hour": {
    card: pexels(10392336, 450, 676),
    cardAspect: "225/338",
    hero: pexels(5205551, 1400, 800),
    gallery: [
      pexels(10392336, 800, 500),
      pexels(5205551, 800, 500),
      pexels(22668221, 800, 500),
      pexels(534164, 800, 500),
    ],
  },
  "kaleidoscope-dreams": {
    card: pexels(1193743, 450, 676),
    cardAspect: "225/338",
    hero: pexels(33132088, 1400, 800),
    gallery: [
      pexels(1193743, 800, 500),
      pexels(33706946, 800, 500),
      pexels(33132088, 800, 500),
      pexels(1762851, 800, 500),
    ],
  },
  "monarch": {
    card: pexels(30469930, 450, 676),
    cardAspect: "225/338",
    hero: pexels(33484691, 1400, 800),
    gallery: [
      pexels(30469930, 800, 500),
      pexels(33484691, 800, 500),
      pexels(28955257, 800, 500),
      pexels(1681010, 800, 500),
    ],
  },
  "horizons": {
    card: pexels(6600340, 450, 676),
    cardAspect: "225/338",
    hero: pexels(28949994, 1400, 800),
    gallery: [
      pexels(6600340, 800, 500),
      pexels(28949994, 800, 500),
      pexels(30710159, 800, 500),
      pexels(1320684, 800, 500),
    ],
  },
  "concrete-and-steel": {
    card: pexels(185039, 450, 676),
    cardAspect: "225/338",
    hero: pexels(29345517, 1400, 800),
    gallery: [
      pexels(185039, 800, 500),
      pexels(29345517, 800, 500),
      pexels(929385, 800, 500),
      pexels(1105766, 800, 500),
    ],
  },
  "whispers-in-the-dark": {
    card: pexels(2899737, 450, 676),
    cardAspect: "225/338",
    hero: pexels(27948245, 1400, 800),
    gallery: [
      pexels(2899737, 800, 500),
      pexels(27948245, 800, 500),
      pexels(1024960, 800, 500),
      pexels(3601094, 800, 500),
    ],
  },
  "the-iron-years": {
    card: pexels(929385, 450, 676),
    cardAspect: "225/338",
    hero: pexels(29224568, 1400, 800),
    gallery: [
      pexels(929385, 800, 500),
      pexels(29224568, 800, 500),
      pexels(185039, 800, 500),
      pexels(247763, 800, 500),
    ],
  },
  "luminara": {
    card: pexels(4413488, 450, 676),
    cardAspect: "225/338",
    hero: pexels(4413488, 1400, 800),
    gallery: [
      pexels(4413488, 800, 500),
      pexels(1563356, 800, 500),
      pexels(1545590, 800, 500),
      pexels(1212600, 800, 500),
    ],
  },
  "voices-unheard": {
    card: pexels(7261084, 450, 676),
    cardAspect: "225/338",
    hero: pexels(6954174, 1400, 800),
    gallery: [
      pexels(7261084, 800, 500),
      pexels(6954174, 800, 500),
      pexels(30669367, 800, 500),
      pexels(3807517, 800, 500),
    ],
  },
  "the-watcher": {
    card: pexels(2319416, 450, 676),
    cardAspect: "225/338",
    hero: pexels(10402113, 1400, 800),
    gallery: [
      pexels(2319416, 800, 500),
      pexels(16829799, 800, 500),
      pexels(10402113, 800, 500),
      pexels(1329711, 800, 500),
    ],
  },
  "almost-famous-again": {
    card: pexels(29319032, 450, 676),
    cardAspect: "225/338",
    hero: pexels(4342428, 1400, 800),
    gallery: [
      pexels(29319032, 800, 500),
      pexels(4342428, 800, 500),
      pexels(33400284, 800, 500),
      pexels(1190297, 800, 500),
    ],
  },
  "ancestral": {
    card: pexels(8881316, 450, 676),
    cardAspect: "225/338",
    hero: pexels(101920, 1400, 800),
    gallery: [
      pexels(8881316, 800, 500),
      pexels(101920, 800, 500),
      pexels(31727394, 800, 500),
      pexels(30572448, 800, 500),
    ],
  },
  "small-mercies": {
    card: pexels(29834258, 450, 676),
    cardAspect: "225/338",
    hero: pexels(29546529, 1400, 800),
    gallery: [
      pexels(29834258, 800, 500),
      pexels(29546529, 800, 500),
      pexels(1080721, 800, 500),
      pexels(2062426, 800, 500),
    ],
  },
  "paper-birds": {
    card: pexels(16380901, 450, 676),
    cardAspect: "225/338",
    hero: pexels(18798290, 1400, 800),
    gallery: [
      pexels(16380901, 800, 500),
      pexels(18798290, 800, 500),
      pexels(1279813, 800, 500),
      pexels(6373478, 800, 500),
    ],
  },
  "les-etoiles": {
    card: pexels(2265845, 450, 676),
    cardAspect: "225/338",
    hero: pexels(31019869, 1400, 800),
    gallery: [
      pexels(2265845, 800, 500),
      pexels(31019869, 800, 500),
      pexels(1125212, 800, 500),
      pexels(2363, 800, 500),
    ],
  },
  "fractured-light": {
    card: pexels(364495, 450, 676),
    cardAspect: "225/338",
    hero: pexels(29612111, 1400, 800),
    gallery: [
      pexels(364495, 800, 500),
      pexels(29612111, 800, 500),
      pexels(1193743, 800, 500),
      pexels(33706946, 800, 500),
    ],
  },
};
