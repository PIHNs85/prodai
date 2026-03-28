export interface Review {
  id: string;
  title: string;
  imagePrompt: string;
  genre: string;
  year: string;
  director: string;
  cast: string;
  runtime: string;
  rating: string;
  ratingStars: string;
  releaseDate: string;
  reviewParagraphs: string[];
  galleryPrompts: string[];
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

export const reviews: Review[] = [
  {
    id: "the-last-signal",
    title: "The Last Signal",
    imagePrompt: "sci-fi astronaut dark station corridor emergency lighting",
    genre: "Science Fiction",
    year: "2024",
    director: "Sarah Nakamura",
    cast: "Amara Singh, Marcus Liu (voice), Jennifer Kim (voice)",
    runtime: "107 minutes",
    rating: "4.5/5",
    ratingStars: "★★★★½",
    releaseDate: "October 18, 2024",
    reviewParagraphs: [
      "Sarah Nakamura's 'The Last Signal' is a masterclass in atmospheric science fiction, proof that the genre's greatest strengths lie not in spectacle, but in its ability to explore human isolation against the infinite canvas of space. Set entirely within the deteriorating hull of the research station Meridian-7, the film follows Dr. Elena Vasquez (a career-defining performance by Amara Singh) as she investigates why the station's crew vanished without explanation.",
      "What makes Nakamura's approach so effective is her restraint. Rather than rushing toward answers, the film luxuriates in the station's eerie silence, allowing cinematographer James Park's camera to glide through corridors where coffee cups still sit half-full and personal effects remain undisturbed. The production design by Chen Wei creates a space that feels lived-in and authentic, making the absence of life all the more unsettling.",
      "Singh carries the film almost entirely alone, and she's more than up to the task. Her performance captures the slow erosion of professional composure as days blur together and strange phenomena begin to manifest. The script by Nakamura and co-writer David Torres wisely avoids over-explanation, trusting the audience to piece together the station's fate through environmental storytelling and Singh's increasingly fragmented audio logs.",
      "The film's sound design deserves special mention—composer Hildur Magnúsdóttir's minimalist score works in concert with the station's mechanical groans and electrical hums to create a soundscape that's simultaneously beautiful and deeply unnerving. It's the kind of immersive audio work that demands to be experienced in a theater.",
      "If there's a weakness, it's that the final act's revelations, while thematically resonant, feel slightly rushed compared to the deliberate pacing that came before. Yet even this doesn't significantly diminish what Nakamura has achieved: a film that understands that in space, the scariest thing isn't aliens or technology gone wrong, but the very human fear of being utterly, completely alone."
    ],
    galleryPrompts: [
      "Examining holographic star charts in command center blue light",
      "Long empty corridor flickering lights floating debris zero gravity",
      "Behind the scenes director working on set",
      "Close-up portrait in spacesuit contemplative expression"
    ],
    aspectRatio: "landscape"
  },
  {
    id: "borrowed-time",
    title: "Borrowed Time",
    imagePrompt: "monochrome portrait close-up time motif pocket watch",
    genre: "Drama",
    year: "2024",
    director: "Robert Fielding",
    cast: "Daniel Mercer, Sophie Laurent",
    runtime: "118 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "September 5, 2024",
    reviewParagraphs: [
      "Robert Fielding's 'Borrowed Time' is a meditative exploration of mortality and the choices we make when confronted with the finite nature of existence. Daniel Mercer delivers a nuanced performance as a man who discovers he can revisit pivotal moments in his past, though he cannot change them.",
      "The film's monochromatic palette is more than an aesthetic choice—it's a visual metaphor for memory's gradual erosion, and Fielding uses it masterfully to blur the line between present reality and remembered past.",
      "Sophie Laurent is quietly devastating as the wife who exists in both timelines, her performance shifting subtly between the woman remembered and the woman who remembers. Their chemistry gives the film its emotional anchor.",
      "While the pacing occasionally meanders in its second act, the final thirty minutes deliver an emotional gut-punch that recontextualizes everything that came before."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "night-market",
    title: "Night Market",
    imagePrompt: "neon-lit alleyway night scene market stalls atmospheric",
    genre: "Thriller",
    year: "2024",
    director: "Li Wei Chen",
    cast: "Tony Leung, Sandra Oh, Jay Chou",
    runtime: "124 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "November 1, 2024",
    reviewParagraphs: [
      "Li Wei Chen's 'Night Market' transforms Taipei's vibrant street markets into a labyrinth of secrets, lies, and simmering danger. Tony Leung brings his signature understated intensity to the role of a retired detective drawn back into the shadows.",
      "The neon-soaked cinematography is breathtaking, each frame composed like a painting where danger lurks just beyond the warm glow of food stalls and lantern light.",
      "Sandra Oh is a revelation as the market's enigmatic proprietor whose cheerful exterior masks decades of carefully guarded secrets. Her scenes with Leung crackle with tension and mutual respect.",
      "Chen demonstrates masterful control of pacing, building suspense through atmosphere rather than action, making the moments of violence all the more shocking when they arrive."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "the-painted-door",
    title: "The Painted Door",
    imagePrompt: "dramatic red doorway light streaming through dark interior",
    genre: "Drama",
    year: "2024",
    director: "Anna Kowalski",
    cast: "Cate Ashford, Omar Sy",
    runtime: "96 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "August 22, 2024",
    reviewParagraphs: [
      "Anna Kowalski's 'The Painted Door' is a quiet, deeply personal film about the boundaries we erect and the courage required to step through them. Cate Ashford gives a luminous performance as a reclusive artist whose world is upended by an unexpected visitor.",
      "The film's central metaphor—the painted door that dominates Ashford's studio—never feels heavy-handed, thanks to Kowalski's light directorial touch and a script that trusts subtext over exposition.",
      "Omar Sy brings warmth and gentle persistence to his role, creating a character who challenges without threatening and who offers possibility without making promises.",
      "At 96 minutes, the film is perfectly calibrated, not a scene wasted or a moment overstayed."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "echo-park",
    title: "Echo Park",
    imagePrompt: "golden hour silhouette couple at lake warm tones romantic",
    genre: "Romance",
    year: "2024",
    director: "Maya Rodriguez",
    cast: "Zoe Kravitz, Pedro Pascal",
    runtime: "112 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "July 14, 2024",
    reviewParagraphs: [
      "Maya Rodriguez's 'Echo Park' bathes its love story in perpetual golden hour, creating a Los Angeles that feels both familiar and fantastical. Zoe Kravitz and Pedro Pascal have an easy, natural chemistry that makes their unlikely connection entirely believable.",
      "Rodriguez has crafted a film that understands romance lives in small moments—a shared laugh over terrible coffee, a text left unsent, the particular quality of sunlight through a kitchen window at 4 PM.",
      "The film's greatest strength is its refusal to manufacture conflict. Instead, it finds drama in the genuine complexities of two people navigating the gap between who they are and who they want to be.",
      "If the ending feels slightly too neat, it's a minor quibble with a film that otherwise earns every one of its emotional beats."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "velocity",
    title: "Velocity",
    imagePrompt: "high-speed car chase motion blur city lights night racing",
    genre: "Action",
    year: "2024",
    director: "James Hawkins",
    cast: "Idris Elba, Ana de Armas",
    runtime: "131 minutes",
    rating: "3/5",
    ratingStars: "★★★",
    releaseDate: "June 28, 2024",
    reviewParagraphs: [
      "James Hawkins' 'Velocity' is a kinetic rush of adrenaline that sacrifices nuance for spectacle—and mostly gets away with it. Idris Elba brings gravitas to a role that lesser actors would play as one-note, while Ana de Armas proves once again she's one of action cinema's most compelling presences.",
      "The car chases are genuinely thrilling, shot with a clarity that's become rare in an era of shaky-cam excess. Hawkins lets the stunt work speak for itself, and the practical effects give every collision real weight.",
      "Where the film falters is in its quieter moments, where the script's thinness becomes apparent and the characters feel more like archetypes than people.",
      "Still, as pure entertainment, 'Velocity' delivers exactly what it promises, and there's something to be said for a film that knows precisely what it wants to be."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "the-silent-hour",
    title: "The Silent Hour",
    imagePrompt: "fog-shrouded streetlights noir thriller dark moody atmospheric",
    genre: "Noir Thriller",
    year: "2024",
    director: "David Lynch Jr.",
    cast: "Oscar Isaac, Tilda Swinton",
    runtime: "99 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "October 4, 2024",
    reviewParagraphs: [
      "David Lynch Jr.'s 'The Silent Hour' is a fog-drenched noir that owes as much to David Fincher as to his famous namesake. Oscar Isaac is mesmerizing as a sound engineer who becomes convinced that a murdered woman's last moments are encoded in an ambient recording.",
      "The film's manipulation of sound and silence is extraordinary—long stretches pass with nothing but ambient noise, forcing the audience into the same obsessive listening as Isaac's protagonist.",
      "Tilda Swinton appears in a small but pivotal role that reframes the entire narrative, her single extended scene a masterclass in controlled intensity.",
      "It's a film that rewards patience and close attention, revealing its secrets gradually like shapes emerging from fog."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "kaleidoscope-dreams",
    title: "Kaleidoscope Dreams",
    imagePrompt: "vibrant abstract colorful experimental art psychedelic patterns",
    genre: "Experimental",
    year: "2024",
    director: "Yoko Tanaka",
    cast: "Ensemble Cast",
    runtime: "87 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "May 10, 2024",
    reviewParagraphs: [
      "Yoko Tanaka's 'Kaleidoscope Dreams' is the kind of film that defies conventional criticism—it's less a movie than an experience, a sensory journey that bypasses narrative logic to communicate directly with the subconscious.",
      "The film's visual palette is extraordinary, shifting between saturated primaries and delicate pastels in patterns that feel simultaneously random and deeply intentional.",
      "What prevents the film from becoming mere visual exercise is Tanaka's insistence on emotional truth. Beneath the abstraction, there's a genuine exploration of perception, memory, and the ways we construct meaning from chaos.",
      "Not everyone will connect with 'Kaleidoscope Dreams,' but those who do will find it unforgettable."
    ],
    galleryPrompts: [],
    aspectRatio: "square"
  },
  {
    id: "monarch",
    title: "Monarch",
    imagePrompt: "intense close-up portrait dramatic lighting psychological drama",
    genre: "Psychological Drama",
    year: "2024",
    director: "Elena Vasquez",
    cast: "Joaquin Phoenix, Florence Pugh",
    runtime: "142 minutes",
    rating: "4.5/5",
    ratingStars: "★★★★½",
    releaseDate: "November 15, 2024",
    reviewParagraphs: [
      "Elena Vasquez's 'Monarch' is a devastating character study that builds with the slow, inexorable pressure of a closing vice. Joaquin Phoenix disappears completely into the role of a charismatic CEO whose carefully maintained facade begins to crack under scrutiny.",
      "Florence Pugh matches Phoenix scene for scene as the journalist who sees through the charm, their interactions crackling with intelligence and barely concealed antagonism.",
      "Vasquez's direction is formally precise—every frame, every cut, every silence serves the film's exploration of power, manipulation, and the stories we tell to justify our worst impulses.",
      "At 142 minutes, the film demands commitment, but it earns every minute, building to a final confrontation that's as intellectually thrilling as it is emotionally devastating."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "horizons",
    title: "Horizons",
    imagePrompt: "sweeping desert landscape road movie vast open sky golden",
    genre: "Road Movie",
    year: "2024",
    director: "Thomas Bridges",
    cast: "Jeff Bridges, Lily Gladstone",
    runtime: "119 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "April 19, 2024",
    reviewParagraphs: [
      "Thomas Bridges' 'Horizons' is a sun-baked road movie that finds poetry in the American landscape and the people who traverse it. Jeff Bridges brings effortless authenticity to an aging drifter whose journey west becomes an accidental pilgrimage.",
      "Lily Gladstone is magnificent as the young woman who reluctantly shares his path, her quiet strength and dry humor providing the perfect counterbalance to Bridges' weathered melancholy.",
      "The film's pacing mirrors its subject—unhurried, expansive, occasionally frustrating in its refusal to arrive anywhere quickly. But the desert vistas are gorgeous, and the conversations that fill the long drives feel unscripted and real.",
      "It's a film that believes in the healing power of distance, and by its final frame, you might believe it too."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "concrete-and-steel",
    title: "Concrete & Steel",
    imagePrompt: "urban architecture industrial cityscape brutalist buildings dramatic",
    genre: "Documentary",
    year: "2024",
    director: "Marcus Webb",
    cast: "Narrated by Werner Herzog",
    runtime: "94 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "March 8, 2024",
    reviewParagraphs: [
      "Marcus Webb's 'Concrete & Steel' examines urban architecture as both triumph and tragedy, finding beauty in brutalism and questioning the human cost of modernization.",
      "Werner Herzog's narration adds gravitas and occasional dark humor, his distinctive voice transforming what could be a dry subject into something approaching philosophy.",
      "The film is at its best when it lets the buildings speak for themselves—long, patient shots of concrete facades catching the light reveal textures and geometries that casual observers miss entirely.",
      "While the documentary occasionally overreaches in its conclusions, its visual argument is compelling: the cities we build reveal the societies we are."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "whispers-in-the-dark",
    title: "Whispers in the Dark",
    imagePrompt: "candlelit intimate scene warm shadows romantic atmospheric",
    genre: "Romance",
    year: "2024",
    director: "Claire Fontaine",
    cast: "Léa Seydoux, Dev Patel",
    runtime: "108 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "February 14, 2024",
    reviewParagraphs: [
      "Claire Fontaine's 'Whispers in the Dark' is a candlelit romance that unfolds like a whispered confession, intimate and trembling with vulnerability. Léa Seydoux and Dev Patel create one of the year's most compelling screen couples.",
      "The film takes place almost entirely within a single Parisian apartment during a power outage, and Fontaine transforms this constraint into an asset, using candlelight and shadow to create an atmosphere of enforced intimacy.",
      "The dialogue is sharp and naturalistic, the kind of conversation that happens between strangers when darkness strips away pretense and leaves only honesty.",
      "It's a reminder that the most profound connections often happen in the spaces between words."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "the-iron-years",
    title: "The Iron Years",
    imagePrompt: "period industrial 1950s factory setting workers vintage sepia",
    genre: "Historical Drama",
    year: "2024",
    director: "Kenneth Moore",
    cast: "Gary Oldman, Saoirse Ronan",
    runtime: "148 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "December 6, 2024",
    reviewParagraphs: [
      "Kenneth Moore's 'The Iron Years' is an ambitious period drama that chronicles a steel-working family through three decades of industrial transformation. Gary Oldman anchors the film with a performance of quiet, stubborn dignity.",
      "Saoirse Ronan brings fire and intelligence to the daughter who challenges everything her father represents, their ideological clashes forming the film's emotional core.",
      "The production design is impeccable, recreating the industrial landscape of the 1950s through 1970s with documentary-like precision.",
      "At 148 minutes, the film occasionally sags under the weight of its ambition, but its final act delivers a powerful meditation on progress, sacrifice, and what gets lost when an era ends."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "luminara",
    title: "Luminara",
    imagePrompt: "magical ethereal lighting fantasy film glowing particles enchanted",
    genre: "Fantasy",
    year: "2024",
    director: "Guillermo Torres",
    cast: "Anya Taylor-Joy, Ke Huy Quan",
    runtime: "135 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "July 26, 2024",
    reviewParagraphs: [
      "Guillermo Torres' 'Luminara' is a visual feast that reimagines the fantasy genre through the lens of Latin American magical realism. Anya Taylor-Joy is luminous as a young cartographer who discovers her maps are literally reshaping the world.",
      "The visual effects are among the year's most inventive, blending practical techniques with digital artistry to create a world that feels tangible despite its impossibility.",
      "Ke Huy Quan brings warmth and wisdom to the role of her reluctant mentor, and their relationship gives the film its emotional grounding.",
      "While the plotting occasionally gets lost in its own mythology, the sheer imaginative ambition on display is enough to forgive the narrative detours."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "voices-unheard",
    title: "Voices Unheard",
    imagePrompt: "documentary interview subject emotional portrait natural light",
    genre: "Documentary",
    year: "2024",
    director: "Ava Chen",
    cast: "Documentary subjects",
    runtime: "91 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "January 26, 2024",
    reviewParagraphs: [
      "Ava Chen's 'Voices Unheard' is documentary filmmaking at its most essential—a film that amplifies stories that mainstream media consistently overlooks. Chen's camera is patient and respectful, creating space for her subjects to tell their own stories.",
      "The film's structure is deceptively simple: seven individuals, seven stories, connected by themes of resilience and the quiet heroism of everyday life.",
      "What elevates the film above standard documentary fare is Chen's eye for the telling detail—a weathered hand clutching a photograph, a pause that speaks volumes, the particular quality of light in a room where difficult truths are being spoken.",
      "It's the kind of film that changes the way you see the world, one carefully observed moment at a time."
    ],
    galleryPrompts: [],
    aspectRatio: "square"
  },
  {
    id: "the-watcher",
    title: "The Watcher",
    imagePrompt: "suspenseful shadowy figure window surveillance dark thriller",
    genre: "Thriller",
    year: "2024",
    director: "Park Jin-soo",
    cast: "Song Kang-ho, Jenna Ortega",
    runtime: "103 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "September 20, 2024",
    reviewParagraphs: [
      "Park Jin-soo's 'The Watcher' is a paranoia-soaked thriller that turns the simple act of looking into something menacing. Song Kang-ho brings unsettling ambiguity to a man whose hobby of people-watching takes on darker dimensions.",
      "Jenna Ortega matches him beat for beat as the neighbor who begins watching back, their escalating surveillance game creating a tension that's almost unbearable.",
      "The film's apartment-complex setting becomes a vertical labyrinth of windows, each one framing a story, a secret, a potential threat.",
      "Jin-soo proves that sometimes the most terrifying thing isn't what lurks in the dark—it's the knowledge that someone is watching from the light."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "almost-famous-again",
    title: "Almost Famous (Again)",
    imagePrompt: "group laughing together joyful comedy warm vibrant social",
    genre: "Comedy",
    year: "2024",
    director: "Nora Ephron Jr.",
    cast: "Paul Rudd, Awkwafina, Kumail Nanjiani",
    runtime: "105 minutes",
    rating: "3/5",
    ratingStars: "★★★",
    releaseDate: "August 9, 2024",
    reviewParagraphs: [
      "Nora Ephron Jr.'s 'Almost Famous (Again)' is a genial, good-hearted comedy about a group of failed musicians who reunite for one last shot at the spotlight. Paul Rudd's effortless charm holds together a film that's occasionally too pleased with itself.",
      "Awkwafina steals every scene she's in as the group's acerbic manager, delivering zingers with impeccable timing.",
      "The film works best when it embraces its characters' delusions rather than mocking them, finding genuine warmth in their refusal to let go of a dream.",
      "It's not groundbreaking cinema, but it's the kind of film that sends you home smiling, which is its own kind of achievement."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "ancestral",
    title: "Ancestral",
    imagePrompt: "dark haunting horror imagery shadows ancient ritual atmospheric",
    genre: "Horror",
    year: "2024",
    director: "Jordan Peele",
    cast: "Lupita Nyong'o, Steven Yeun",
    runtime: "116 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "October 31, 2024",
    reviewParagraphs: [
      "Jordan Peele's 'Ancestral' is his most ambitious and unsettling work yet—a horror film that locates terror not in the supernatural, but in the weight of inherited trauma. Lupita Nyong'o delivers a fearless performance as a woman who returns to her family's ancestral home and discovers that some legacies refuse to stay buried.",
      "The film's horror is architectural—Peele uses the house itself as an expression of generational memory, its rooms shifting and revealing hidden spaces that mirror the family's buried histories.",
      "Steven Yeun is remarkable as the brother who has made his peace with the house's darkness, his acceptance more frightening than any ghost.",
      "Peele has crafted a film that understands the deepest horror: that the monsters we inherit are the ones we can never fully escape."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "small-mercies",
    title: "Small Mercies",
    imagePrompt: "intimate kitchen setting indie drama warm domestic cozy",
    genre: "Indie Drama",
    year: "2024",
    director: "Kelly Reichardt",
    cast: "Michelle Williams, André Holland",
    runtime: "88 minutes",
    rating: "4/5",
    ratingStars: "★★★★",
    releaseDate: "March 22, 2024",
    reviewParagraphs: [
      "Kelly Reichardt's 'Small Mercies' is a masterpiece of minimalism—a film where a shared meal becomes an event and a glance across a kitchen carries the weight of unspoken years. Michelle Williams gives one of her finest performances as a single mother navigating the exhausting terrain of just getting by.",
      "André Holland is equally superb as the new neighbor whose quiet kindness gradually transforms the film's emotional landscape.",
      "Reichardt's camera observes with patience and empathy, finding beauty in the mundane rituals of daily life—coffee brewing, laundry folding, the particular silence of a house after children fall asleep.",
      "It's a film that asks very little of its audience except attention, and rewards that attention with something approaching grace."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "paper-birds",
    title: "Paper Birds",
    imagePrompt: "hand-drawn animated scene whimsical artistic watercolor style",
    genre: "Animation",
    year: "2024",
    director: "Studio Ghibli Alumni Collective",
    cast: "Original Japanese voice cast",
    runtime: "95 minutes",
    rating: "4.5/5",
    ratingStars: "★★★★½",
    releaseDate: "April 5, 2024",
    reviewParagraphs: [
      "The Studio Ghibli Alumni Collective's 'Paper Birds' is a hand-drawn miracle—a reminder that in an age of digital perfection, there's still magic in the trembling line of a human hand. The film follows a young girl's origami creations as they come to life and undertake an odyssey across a watercolor world.",
      "The animation is breathtaking, each frame a work of art that rewards pausing and studying. The world-building is simultaneously fantastical and grounded in the specific textures of handmade paper.",
      "The story is deceptively simple but emotionally complex, dealing with themes of creation, loss, and the way art can transform grief into something beautiful.",
      "This is the kind of film that reminds you why animation exists as an art form—not as a delivery system for children's entertainment, but as a medium capable of expressing things that live action cannot."
    ],
    galleryPrompts: [],
    aspectRatio: "portrait"
  },
  {
    id: "les-etoiles",
    title: "Les Étoiles",
    imagePrompt: "classic french cinema parisian rooftops romantic vintage aesthetic",
    genre: "French Cinema",
    year: "2024",
    director: "Jean-Pierre Jeunet",
    cast: "Marion Cotillard, Vincent Cassel",
    runtime: "121 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "May 24, 2024",
    reviewParagraphs: [
      "Jean-Pierre Jeunet's 'Les Étoiles' is a love letter to Paris and to cinema itself, overflowing with the whimsy and visual invention that have defined his career. Marion Cotillard is incandescent as an astronomer who discovers that the city's lights are gradually replacing the stars.",
      "Vincent Cassel brings roguish charm to the street artist who joins her quixotic campaign to dim Paris and restore the night sky.",
      "The film's magical realism is delightful—stars that descend to street level, rooftop observatories that float above the clouds, a map of the sky drawn in café spills.",
      "If the film occasionally drowns in its own whimsy, it's a forgivable excess in a cinematic landscape that too often plays it safe."
    ],
    galleryPrompts: [],
    aspectRatio: "landscape"
  },
  {
    id: "fractured-light",
    title: "Fractured Light",
    imagePrompt: "artistic light refraction prisms experimental photography abstract",
    genre: "Experimental",
    year: "2024",
    director: "Terrence Malick",
    cast: "Minimal cast",
    runtime: "78 minutes",
    rating: "3.5/5",
    ratingStars: "★★★½",
    releaseDate: "February 2, 2024",
    reviewParagraphs: [
      "Terrence Malick's 'Fractured Light' is perhaps his most abstract work—a meditation on perception itself, told through a series of vignettes connected only by the play of light through different materials and environments.",
      "The film asks what happens when we strip cinema down to its most essential element—light—and the answer, at least in Malick's hands, is something approaching the spiritual.",
      "Emmanuel Lubezki's cinematography is otherworldly, capturing light as both physical phenomenon and metaphysical presence.",
      "It's not a film for everyone, and even Malick devotees may find themselves challenged, but 'Fractured Light' offers rewards to those willing to surrender to its contemplative rhythm."
    ],
    galleryPrompts: [],
    aspectRatio: "square"
  }
];
