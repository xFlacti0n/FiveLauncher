const fathers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 42, 43, 44];
const mothers = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45];
const fatherNames = ["Benjamin", "Daniel", "Joshua", "Noah", "Andrew", "Juan", "Alex", "Isaac", "Evan", "Ethan", "Vincent", "Angel", "Diego", "Adrian", "Gabriel", "Michael", "Santiago", "Kevin", "Louis", "Samuel", "Anthony", "Claude", "Niko", "John"];
const motherNames = ["Hannah", "Aubrey", "Jasmine", "Gisele", "Amelia", "Isabella", "Zoe", "Ava", "Camila", "Violet", "Sophia", "Evelyn", "Nicole", "Ashley", "Gracie", "Brianna", "Natalie", "Olivia", "Elizabeth", "Charlotte", "Emma", "Misty"];
//const featureNames = ["Nose Width", "Nose Bottom Height", "Nose Tip Length", "Nose Bridge Depth", "Nose Tip Height", "Nose Broken", "Brow Height", "Brow Depth", "Cheekbone Height", "Cheekbone Width", "Cheek Depth", "Eye Size", "Lip Thickness", "Jaw Width", "Jaw Shape", "Chin Height", "Chin Depth", "Chin Width", "Chin Indent", "Neck Width"];
const featureNames = ["Nasen Breite", "Nasenboden Weite", "Nasenspitzen Länge", "Nasenrücken Tiefe", "Nasenspitzen Höhe", "Gebrochene Nase", "Augenbrauen Höhe", "Augenbrauen Tiefe", "Wangenknochen Höhe", "Wangenknochen Breite", "Wangen Tiefe", "Augengröße", "Lippen Dicke", "Kiefer Breite", "Kiefer Form", "Kinn Höhe", "Kinn Tiefe", "Kinn Weite", "Kinn Einzug", "Nacken Breite"];
//const appearanceNames = ["Blemishes", "Facial Hair", "Eyebrows", "Ageing", "Makeup", "Blush", "Complexion", "Sun Damage", "Lipstick", "Moles & Freckles", "Chest Hair"];
const appearanceNames = ["Flecken", "Gesichtsbehaarung", "Augenbrauen", "Alterung", "Makeup", "Errötung", "Teint", "Sonnenschaden", "Lippenstift", "Leberfleck & Sommersprossen", "Brusthaar"];

const appearanceItemNames = [
    // blemishes
    //["None", "Measles", "Pimples", "Spots", "Break Out", "Blackheads", "Build Up", "Pustules", "Zits", "Full Acne", "Acne", "Cheek Rash", "Face Rash", "Picker", "Puberty", "Eyesore", "Chin Rash", "Two Face", "T Zone", "Greasy", "Marked", "Acne Scarring", "Full Acne Scarring", "Cold Sores", "Impetigo"],
    ["Keine", "Masern", "Pickel", "Flecken", "Ausbruch", "Mitesser", "Entstehen", "Pusteln", "Zysten", "Volle Akne", "Akne", "Wangenausschlag", "Gesichtsausschlag", "Picker", "Pubertät", "Schandfleck", "Kinnausschlag", "Zwiegesicht", "T Zone", "Fettig", "Merklich", "Akne-Narben", "Volle Akne-Narben", "Fieberbläschen", "Eiterflechte"],
    // facial hair
    //["None", "Light Stubble", "Balbo", "Circle Beard", "Goatee", "Chin", "Chin Fuzz", "Pencil Chin Strap", "Scruffy", "Musketeer", "Mustache", "Trimmed Beard", "Stubble", "Thin Circle Beard", "Horseshoe", "Pencil and 'Chops", "Chin Strap Beard", "Balbo and Sideburns", "Mutton Chops", "Scruffy Beard", "Curly", "Curly & Deep Stranger", "Handlebar", "Faustic", "Otto & Patch", "Otto & Full Stranger", "Light Franz", "The Hampstead", "The Ambrose", "Lincoln Curtain"],
    ["Keiner", "Leichte Stoppeln", "Balbo", "Kreis Bart", "Goatee", "Kinn", "Kinnflaum", "Bleistiftkinnriemen", "Ungepflegt", "Musketier", "Schnurrbart", "Getrimmt", "Stoppeln", "Dünner Kreisbart", "Hufeisen", "Bleistift und Koteletten", "Kinnriemen-Bart", "Balbo und Koteletten", "Koteletten", "Ungepflegter Bart", "Lockig", "Lockig & Fremd", "Handlebar", "Faustisch", "Otto & Patch", "Otto & Full Stranger", "Leichter Franz", "Der Hampstead", "Der Ambrose", "Lincoln Curtain"],
    // eyebrows
    //["None", "Balanced", "Fashion", "Cleopatra", "Quizzical", "Femme", "Seductive", "Pinched", "Chola", "Triomphe", "Carefree", "Curvaceous", "Rodent", "Double Tram", "Thin", "Penciled", "Mother Plucker", "Straight and Narrow", "Natural", "Fuzzy", "Unkempt", "Caterpillar", "Regular", "Mediterranean", "Groomed", "Bushels", "Feathered", "Prickly", "Monobrow", "Winged", "Triple Tram", "Arched Tram", "Cutouts", "Fade Away", "Solo Tram"],
    ["Keine", "Balanciert", "Fashion", "Cleopatra", "Quizzical", "Femme", "Verführerisch", "Geklemmt", "Chola", "Triomphe", "Sorglos", "Kurvig", "Nagetier", "Doppelte Straßenbahn", "Dünn", "Strich", "Mother Plucker", "Gerade und schmal", "Natürlich", "Ungepflegt", "Ungekämmt", "Raupe", "Regulär", "Mediterran", "Gekämmt", "Büschel", "Feder", "Stachelig", "Monobraue", "Geflügelt", "Triple Tram", "Arched Tram", "Ausschnitte", "Verblassen", "Solo Tram"],
    // ageing
    //["None", "Crow's Feet", "First Signs", "Middle Aged", "Worry Lines", "Depression", "Distinguished", "Aged", "Weathered", "Wrinkled", "Sagging", "Tough Life", "Vintage", "Retired", "Junkie", "Geriatric"],
    ["Keine", "Krähenfüße", "Erste Anzeichen", "Mittleres Alter", "Sorgenfalten", "Depressionen", "Gedeutet", "Gealtert", "Verwittert", "Faltig", "Schlaff", "Schweres Leben", "In die Jahre", "Rentner", "Junkie", "geriatrisch"],
    // makeup
    //["None", "Smoky Black", "Bronze", "Soft Gray", "Retro Glam", "Natural Look", "Cat Eyes", "Chola", "Vamp", "Vinewood Glamour", "Bubblegum", "Aqua Dream", "Pin Up", "Purple Passion", "Smoky Cat Eye", "Smoldering Ruby", "Pop Princess"],
    ["Keins", "Rauchiges Schwarz", "Bronze", "Weiches Grau", "Retro Glam", "Natürlich", "Katzenaugen", "Chola", "Vamp", "Vinewood Glamour", "Kaugummi", "Aqua Dream", "Pin Up", "Purple Passion", "Smoky Katzenaugen", "Glimmender Rubin", "Pop Princessin"],
    // blush
    //["None", "Full", "Angled", "Round", "Horizontal", "High", "Sweetheart", "Eighties"],
    ["Keins", "Voll", "Angewinkelt", "Rund", "Horizontal", "Hoch", "Liebling", "Achtziger"],
    // complexion
    //["None", "Rosy Cheeks", "Stubble Rash", "Hot Flush", "Sunburn", "Bruised", "Alchoholic", "Patchy", "Totem", "Blood Vessels", "Damaged", "Pale", "Ghostly"],
    ["Keine", "Rosige Wangen", "Stoppelausschlag", "Hitzewallungen", "Sonnenbrand", "Beschädigt", "Alkoholiker", "Lückenhaft", "Totem", "Blutgefäße", "Verletzt", "Bleich", "Geisterhaft"],
    // sun damage
    //["None", "Uneven", "Sandpaper", "Patchy", "Rough", "Leathery", "Textured", "Coarse", "Rugged", "Creased", "Cracked", "Gritty"],
    ["Kein", "Uneben", "Sandpapier", "Lückenhaft", "Rau", "Lederhaft", "Texturiert", "Grob", "Robust", "Faltig", "Rissig", "Grob"],
    // lipstick
    //["None", "Color Matte", "Color Gloss", "Lined Matte", "Lined Gloss", "Heavy Lined Matte", "Heavy Lined Gloss", "Lined Nude Matte", "Liner Nude Gloss", "Smudged", "Geisha"],
    ["None", "Matt", "Gloss", "Liniert Matt", "Liniert Gloss", "Stark Liniert Matt", "Stark Liniert Gloss", "Liniert Haut Matt", "Liniert Haut Gloss", "Verschmiert", "Geisha"],
    // freckles
    //["None", "Cherub", "All Over", "Irregular", "Dot Dash", "Over the Bridge", "Baby Doll", "Pixie", "Sun Kissed", "Beauty Marks", "Line Up", "Modelesque", "Occasional", "Speckled", "Rain Drops", "Double Dip", "One Sided", "Pairs", "Growth"],
    ["Keine", "Cherub", "Überall", "Irregulär", "Dot Dash", "Über die Brücke", "Baby Doll", "Pixie", "Sonnengeküsst", "Schönheitsflecken", "Ausgerichtet", "Modelesque", "Gelegentlich", "Gesprenkelt", "Regentropfen", "Doppel Dip", "Einseitig", "Paare", "Wachsend"],
    // chest hair
    //["None", "Natural", "The Strip", "The Tree", "Hairy", "Grisly", "Ape", "Groomed Ape", "Bikini", "Lightning Bolt", "Reverse Lightning", "Love Heart", "Chestache", "Happy Face", "Skull", "Snail Trail", "Slug and Nips", "Hairy Arms"]
    ["Keine", "Natürlich", "Der Streifen", "Der Baum", "Haarig", "Grisly", "Affe", "Gepflegter Affe", "Bikini", "Blitz", "Umgekehrter Blitz", "Liebesherz", "Chestache", "Smiley", "Schädel", "Schneckenspur", "Slug and Nips", "Schwere Arme"]
];

const hairList = [
    // male
    [{
            ID: 0,
            Name: "Close Shave",
            Collection: "mpbeach_overlays",
            Overlay: "FM_Hair_Fuzz"
        },
        {
            ID: 1,
            Name: "Buzzcut",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_001"
        },
        {
            ID: 2,
            Name: "Faux Hawk",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_002"
        },
        {
            ID: 3,
            Name: "Hipster",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_003"
        },
        {
            ID: 4,
            Name: "Side Parting",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_004"
        },
        {
            ID: 5,
            Name: "Shorter Cut",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_005"
        },
        {
            ID: 6,
            Name: "Biker",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_006"
        },
        {
            ID: 7,
            Name: "Ponytail",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_007"
        },
        {
            ID: 8,
            Name: "Cornrows",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_008"
        },
        {
            ID: 9,
            Name: "Slicked",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_009"
        },
        {
            ID: 10,
            Name: "Short Brushed",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_013"
        },
        {
            ID: 11,
            Name: "Spikey",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_002"
        },
        {
            ID: 12,
            Name: "Caesar",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_011"
        },
        {
            ID: 13,
            Name: "Chopped",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_012"
        },
        {
            ID: 14,
            Name: "Dreads",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_014"
        },
        {
            ID: 15,
            Name: "Long Hair",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_015"
        },
        {
            ID: 16,
            Name: "Shaggy Curls",
            Collection: "multiplayer_overlays",
            Overlay: "NGBea_M_Hair_000"
        },
        {
            ID: 17,
            Name: "Surfer Dude",
            Collection: "multiplayer_overlays",
            Overlay: "NGBea_M_Hair_001"
        },
        {
            ID: 18,
            Name: "Short Side Part",
            Collection: "multiplayer_overlays",
            Overlay: "NGBus_M_Hair_000"
        },
        {
            ID: 19,
            Name: "High Slicked Sides",
            Collection: "multiplayer_overlays",
            Overlay: "NGBus_M_Hair_001"
        },
        {
            ID: 20,
            Name: "Long Slicked",
            Collection: "multiplayer_overlays",
            Overlay: "NGHip_M_Hair_000"
        },
        {
            ID: 21,
            Name: "Hipster Youth",
            Collection: "multiplayer_overlays",
            Overlay: "NGHip_M_Hair_001"
        },
        {
            ID: 22,
            Name: "Mullet",
            Collection: "multiplayer_overlays",
            Overlay: "NGInd_M_Hair_000"
        },
        {
            ID: 24,
            Name: "Classic Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_M_Hair_000"
        },
        {
            ID: 25,
            Name: "Palm Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_M_Hair_001"
        },
        {
            ID: 26,
            Name: "Lightning Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_M_Hair_002"
        },
        {
            ID: 27,
            Name: "Whipped Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_M_Hair_003"
        },
        {
            ID: 28,
            Name: "Zig Zag Cornrows",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_M_Hair_004"
        },
        {
            ID: 29,
            Name: "Snail Cornrows",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_M_Hair_005"
        },
        {
            ID: 30,
            Name: "Hightop",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_M_Hair_006"
        },
        {
            ID: 31,
            Name: "Loose Swept Back",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_000_M"
        },
        {
            ID: 32,
            Name: "Undercut Swept Back",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_001_M"
        },
        {
            ID: 33,
            Name: "Undercut Swept Side",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_002_M"
        },
        {
            ID: 34,
            Name: "Spiked Mohawk",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_003_M"
        },
        {
            ID: 35,
            Name: "Mod",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_004_M"
        },
        {
            ID: 36,
            Name: "Layered Mod",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_005_M"
        },
        {
            ID: 72,
            Name: "Flattop",
            Collection: "mpgunrunning_overlays",
            Overlay: "MP_Gunrunning_Hair_M_000_M"
        },
        {
            ID: 73,
            Name: "Military Buzzcut",
            Collection: "mpgunrunning_overlays",
            Overlay: "MP_Gunrunning_Hair_M_001_M"
        }
    ],
    // female
    [{
            ID: 0,
            Name: "Close Shave",
            Collection: "mpbeach_overlays",
            Overlay: "FM_Hair_Fuzz"
        },
        {
            ID: 1,
            Name: "Short",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_001"
        },
        {
            ID: 2,
            Name: "Layered Bob",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_002"
        },
        {
            ID: 3,
            Name: "Pigtails",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_003"
        },
        {
            ID: 4,
            Name: "Ponytail",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_004"
        },
        {
            ID: 5,
            Name: "Braided Mohawk",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_005"
        },
        {
            ID: 6,
            Name: "Braids",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_006"
        },
        {
            ID: 7,
            Name: "Bob",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_007"
        },
        {
            ID: 8,
            Name: "Faux Hawk",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_008"
        },
        {
            ID: 9,
            Name: "French Twist",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_009"
        },
        {
            ID: 10,
            Name: "Long Bob",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_010"
        },
        {
            ID: 11,
            Name: "Loose Tied",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_011"
        },
        {
            ID: 12,
            Name: "Pixie",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_012"
        },
        {
            ID: 13,
            Name: "Shaved Bangs",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_013"
        },
        {
            ID: 14,
            Name: "Top Knot",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_014"
        },
        {
            ID: 15,
            Name: "Wavy Bob",
            Collection: "multiplayer_overlays",
            Overlay: "NG_M_Hair_015"
        },
        {
            ID: 16,
            Name: "Messy Bun",
            Collection: "multiplayer_overlays",
            Overlay: "NGBea_F_Hair_000"
        },
        {
            ID: 17,
            Name: "Pin Up Girl",
            Collection: "multiplayer_overlays",
            Overlay: "NGBea_F_Hair_001"
        },
        {
            ID: 18,
            Name: "Tight Bun",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_007"
        },
        {
            ID: 19,
            Name: "Twisted Bob",
            Collection: "multiplayer_overlays",
            Overlay: "NGBus_F_Hair_000"
        },
        {
            ID: 20,
            Name: "Flapper Bob",
            Collection: "multiplayer_overlays",
            Overlay: "NGBus_F_Hair_001"
        },
        {
            ID: 21,
            Name: "Big Bangs",
            Collection: "multiplayer_overlays",
            Overlay: "NGBea_F_Hair_001"
        },
        {
            ID: 22,
            Name: "Braided Top Knot",
            Collection: "multiplayer_overlays",
            Overlay: "NGHip_F_Hair_000"
        },
        {
            ID: 23,
            Name: "Mullet",
            Collection: "multiplayer_overlays",
            Overlay: "NGInd_F_Hair_000"
        },
        {
            ID: 25,
            Name: "Pinched Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_F_Hair_000"
        },
        {
            ID: 26,
            Name: "Leaf Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_F_Hair_001"
        },
        {
            ID: 27,
            Name: "Zig Zag Cornrows",
            Collection: "mplowrider_overlays",
            Overlay: "LR_F_Hair_002"
        },
        {
            ID: 28,
            Name: "Pigtail Bangs",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_F_Hair_003"
        },
        {
            ID: 29,
            Name: "Wave Braids",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_F_Hair_003"
        },
        {
            ID: 30,
            Name: "Coil Braids",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_F_Hair_004"
        },
        {
            ID: 31,
            Name: "Rolled Quiff",
            Collection: "mplowrider2_overlays",
            Overlay: "LR_F_Hair_006"
        },
        {
            ID: 32,
            Name: "Loose Swept Back",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_000_F"
        },
        {
            ID: 33,
            Name: "Undercut Swept Back",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_001_F"
        },
        {
            ID: 34,
            Name: "Undercut Swept Side",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_002_F"
        },
        {
            ID: 35,
            Name: "Spiked Mohawk",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_003_F"
        },
        {
            ID: 36,
            Name: "Bandana and Braid",
            Collection: "multiplayer_overlays",
            Overlay: "NG_F_Hair_003"
        },
        {
            ID: 37,
            Name: "Layered Mod",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_006_F"
        },
        {
            ID: 38,
            Name: "Skinbyrd",
            Collection: "mpbiker_overlays",
            Overlay: "MP_Biker_Hair_004_F"
        },
        {
            ID: 76,
            Name: "Neat Bun",
            Collection: "mpgunrunning_overlays",
            Overlay: "MP_Gunrunning_Hair_F_000_F"
        },
        {
            ID: 77,
            Name: "Kurzer Bob",
            Collection: "mpgunrunning_overlays",
            Overlay: "MP_Gunrunning_Hair_F_001_F"
        }
    ]
];

//const eyeColors = ["Green", "Emerald", "Light Blue", "Ocean Blue", "Light Brown", "Dark Brown", "Hazel", "Dark Gray", "Light Gray", "Pink", "Yellow", "Purple", "Blackout", "Shades of Gray", "Tequila Sunrise", "Atomic", "Warp", "ECola", "Space Ranger", "Ying Yang", "Bullseye", "Lizard", "Dragon", "Extra Terrestrial", "Goat", "Smiley", "Possessed", "Demon", "Infected", "Alien", "Undead", "Zombie"];
const eyeColors = ["Grün", "Emerald", "Hellblau", "Ozeanblau", "Hellbraun", "Dunkelbraun", "Haselnuss", "Dunkelgrau", "Hellgrau", "Pink", "Gelb", "Lila", "Blackout", "Shades of Gray", "Tequila Sunrise", "Atomar", "Warp", "ECola", "Space Ranger", "Ying Yang", "Bullseye", "Echse", "Drache", "Ausserirdisch", "Ziege", "Smiley", "Besessen", "Dämon", "Infiziert", "Alien", "Untot", "Zombie"];

exports = {
    fathers: fathers,
    mothers: mothers,
    fatherNames: fatherNames,
    motherNames: motherNames,
    featureNames: featureNames,
    appearanceNames: appearanceNames,
    appearanceItemNames: appearanceItemNames,
    hairList: hairList,
    eyeColors: eyeColors,
    maxHairColor: 64,
    maxEyeColor: 12,
    maxBlushColor: 27,
    maxLipstickColor: 32
};
