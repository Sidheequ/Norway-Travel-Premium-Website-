import { IMAGES } from './imageUrls';

const img1 = IMAGES['kerala.jpg'];
const img2 = IMAGES['karnataka.jpg'];
const img3 = IMAGES['tamilnadu.jpg'];
const img4 = IMAGES['hydrabad.jpg'];
const img5 = IMAGES['rajastan.jpg'];
const img6 = IMAGES['delhi.jpg'];
const img7 = IMAGES['goa.jpg'];
const img8 = IMAGES['manali.jpg'];

export const destinationsData = [
    {
        id: 1,
        title: "KERALA",
        image: img1,
        description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers",
        places: ["Munnar – Rolling tea gardens, cool climate, Eravikulam National Park, Mattupetty Dam, and scenic viewpoints",
            "Athirappilly – The Niagara of India with majestic waterfalls and lush surroundings",
            "Wayanad – A nature lover’s paradise with waterfalls, caves, wildlife sanctuaries, and adventure treks",
            "Periyar – A haven for wildlife with dense forests, waterfalls, and scenic viewpoints",
            "Kochi – A blend of modernity and tradition with its colonial architecture, vibrant markets, and scenic viewpoints",
            "Ramakalmedu – Windy hills and panoramic views of Tamil Nadu plains, ideal for quiet getaways",
            "Kumarakom – A haven for water sports and wildlife with its backwaters, canals, and bird sanctuaries",
            "Alappuzha (Alleppey) – Iconic houseboat cruises through tranquil backwaters and serene paddy fields",
            "Vagamon – Misty hills, pine forests, and peaceful meadows—a hidden gem perfect for relaxing and trekking"]
    },
    {
        id: 2,
        title: "TAMILNADU",
        image: img3,
        description: "Tamil Nadu is the southernmost state of India. The tenth largest Indian state by area and the sixth largest by population, Tamil Nadu is the home of the Tamil people, who speak the Tamil language—the state's official language and the first to be recognised as a classical language in India. The capital and largest city is Chennai.",
        places: ["Kodaikanal – A scenic hill station with lush greenery, Coaker’s Walk, Pillar Rocks, boating, and peaceful surroundings",
            "Ooty – The “Queen of Hills” with beautiful tea plantations, lakes, botanical gardens, and pleasant weather year-round",
            "Thanjavur – A cultural hub home to the grand Brihadeeswarar Temple, art, music, and rich South Indian heritage",
            "Adiyogi Statue (Coimbatore) – A spiritual landmark and symbol of inner transformation, surrounded by serene landscapes",
        ]
    },
    {
        id: 3,
        title: "KARNATAKA",
        image: img2,
        description: "Embark on a journey through the diverse landscapes, rich heritage, and vibrant culture of Karnataka with our all-inclusive, customizable tourism packages. Whether you're a nature lover, history buff, or adventure seeker, Karnataka has something unforgettable waiting for you.",
        places: ["Mysore – Explore the grandeur of Mysore Palace, the charm of Brindavan Garden, and the vibrant wildlife at Mysore Zoo",
            "Bangalore – The modern face of Karnataka with buzzing city life, tech hubs, shopping, and culture",
            "Coorg – A hidden gem with lush greenery, waterfalls, and wildlife sanctuaries",
            "Hampi – A UNESCO World Heritage Site filled with ancient ruins and historical splendor",
            "Dandeli – The adventure capital of Karnataka with river rafting, kayaking, zorbing, forest walks, and star-rated resort stays",
            "Gokarna – A serene coastal town perfect for beach lovers and spiritual seekers",
            "Chikmagalur – Trekking paradise with scenic peaks, waterfalls, and tranquil forests",
            "Malpe & Udupi – Coastal bliss with clean beaches and spiritual sites",
            "Bellur – Thrilling water activities like banana boat rides, kayaking, zorbing, and more"]
    },
    {
        id: 4,
        title: "GOA",
        image: img7,
        description: "Goa is a state in southwestern India, bordering the Arabian Sea. It is known for its beaches, temples, and colonial architecture.",
        places: ["Calangute Beach: The Queen of Beaches That Never Sleeps",
            "Basilica of Bom Jesus: A Pilgrimage Through History and Faith",
            "Fort Aguada: Sunset, Sea, and Stories of Yore",
            "Anjuna Flea Market: A Bohemian Bazaar Like No Other",
            "Agonda: The Hidden Gem of Goa"]
    },
    {
        id: 5,
        title: "HYDRABAD",
        image: img4,
        description: "Hyderabad is a city in Telangana, India. It is known for its rich history, culture, and cuisine.",
        places: ["Charminar – The iconic 16th-century marvel",
            "Hussain Sagar Lake: A Serene Spot for Boating and Photography",
            "Sindhi Society Museum: A Window into Telugu Culture",
            "Hyderabad Zoo: A Sanctuary for Wildlife and Education",
            "Birla Mandir: A Modern Temple of Peace",
            "Ramoji Film City – Asia’s largest film studio complex and theme park"]
    },
    {
        id: 6,
        title: "RAJASTHAN",
        image: img5,
        description: "Rajasthan is a state in northwestern India, bordering Pakistan to the west and the states of Gujarat and Haryana to the south and east. It is known for its rich history, culture, and cuisine.",
        places: [
            "Jaisalmer Fort: A Gateway to the Desert",
            "Jaipur: The Pink City with Royal Forts and Markets",
            "Pushkar: A Spiritual Hub with Sacred Lakes and Temples",
            "Ajmer: A Gateway to the Holy with the Ajmer Sharif Dargah",
            "Bikaner: A Fortified City with Camel Markets and Fortresses"]
    },
    {
        id: 7,
        title: "MANALI",
        image: img8,
        description: "Tucked away in the heart of Himachal Pradesh, Manali is a dream destination for nature lovers, adventure seekers, and peace chasers alike. From snow-capped peaks to vibrant markets and thrilling activities, our customizable tour packages ensure you enjoy Manali the way you’ve always imagined.",
        places: ["Solang Valley – Perfect for paragliding, skiing, and snowboarding",
            "Rohtang Pass – A breathtaking mountain pass offering snow adventures and scenic drives",
            "Hidimba Devi Temple – A peaceful spiritual spot surrounded by cedar forests",
            "Old Manali – Known for cozy cafés, vibrant culture, and riverside charm",
            "Jogini Falls & Vashisht Hot Springs – Natural beauty with a soothing touch."]
    },
    {
        id: 8,
        title: "DELHI",
        image: img6,
        description: "Step into the heart of India with our Delhi–Agra tour package, where royal history, vibrant culture, and architectural wonders await. From the bustling streets of Delhi to the timeless beauty of the Taj Mahal, this tour offers a perfect blend of adventure, heritage, and relaxation. All plans are fully customizable to match your preferences!",
        places: [
            "India Gate – Symbol of national pride",
            "Red Fort & Qutub Minar– A UNESCO World Heritage Site with stunning architecture and rich history",
            "Humayun’s Tomb – A UNESCO marvel",
            "Raj Ghat – Gandhi memorial",
            "Chandni Chowk – Street food & heritage market",
            "Jama Masjid – A UNESCO World Heritage Site with stunning architecture and rich history",
            "Taj Mahal – One of the Seven Wonders of the World",
            "Agra Fort – A UNESCO site rich with Mughal history",
            "Mehtab Bagh – Stunning view of the Taj at sunset",
            "Fatehpur Sikri – An ancient red sandstone city",]
    }
];
