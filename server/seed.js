const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const Package = require("./models/Package");
const Gallery = require("./models/Gallery");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successful for Seeding"))
    .catch((err) => console.log(err));

const seedDB = async () => {
    // 1. CLEAR EXISTING DATA (Optional, safer for fresh setup)
    await User.deleteMany({});
    await Package.deleteMany({});
    await Gallery.deleteMany({});

    // 2. CREATE ADMIN USER
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        console.error("ADMIN_PASSWORD not set in .env");
        process.exit(1);
    }
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const adminUser = new User({
        username: "admin",
        password: hashedPassword,
        role: "admin"
    });
    await adminUser.save();
    console.log("Admin user created from environment variables");

    // 3. SEED PACKAGES
    // Mapping from Packages.jsx data
    const packages = [
        {
            category: "One Day",
            title: "ONE DAY PACKAGES",
            items: [
                "Wagamon - Idukki",
                "Munnar",
                "Marine Drive – Fort Kochi – LuluMall",
                "Wonderla – Lulumall – Kochi Metro – Marine Drive",
                "Athirapally – Vazhachaal – Dream World / Silver Storm",
                "Trivandrum – Zoo – Museum – Veli Tourist Village – Planetarium - Kovalam / LuluMall"
            ],
            image: "https://res.cloudinary.com/dclejmil5/image/upload/v1766026400/norway_project/munnar1.jpg" // Placeholder or use your cloudinary link if known
        },
        {
            category: "Two Day",
            title: "TWO DAY PACKAGES",
            items: [
                "Wayanad - Kozhikode",
                "Trivandrum – Kanyakumari",
                "Wayanad - Wonderla - Lulumall/ Marrine Drive",
                "Munnar - Wonderla",
                "Ooty - Wayanad",
                "Munnar – Ramakkalmedu",
                "Kodaikanal – Cumbum - Theni",
                "Mysuru - Ooty",
                "Coorg - Chikmagalur",
                "Mysuru - Coorg"
            ],
            image: "https://res.cloudinary.com/dclejmil5/image/upload/v1765994413/norway_project/karnataka.jpg"
        }
        // Add more if needed, for brevity adding just 2 categories to verify logic
    ];

    await Package.insertMany(packages);
    console.log("Packages seeded");

    // 4. SEED GALLERY
    const galleryItems = [
        { title: "Norway 1", imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7" },
        { title: "Norway 2", imageUrl: "https://images.unsplash.com/photo-1506701160836-249cb9647248" }
    ];
    await Gallery.insertMany(galleryItems);
    console.log("Gallery seeded");

    mongoose.connection.close();
};

seedDB();
