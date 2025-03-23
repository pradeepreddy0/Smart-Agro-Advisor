const cropInformation = {
    "apple": {
        "name": "Apple",
        "description": "Apple is a temperate fruit crop widely known for its nutritional and economic value.",
        "growthPeriod": "6-8 months depending on the variety",
        "soilRequirements": "Loamy soil with pH range 6.0 to 7.0",
        "wateringNeeds": "Requires regular irrigation, especially during flowering and fruiting",
        "climate": "Temperature range: 18°C to 24°C, requires chilling hours below 7°C for dormancy",
        "harvesting": "When fruits turn their characteristic color and mature",
        "pests": "Apple codling moth, aphids, apple scab",
        "diseases": "Fire blight, powdery mildew, apple scab",
        "storage": "Store in cool, ventilated conditions or refrigeration"
    },
    "banana": {
        "name": "Banana",
        "description": "Banana is a tropical fruit crop known for its sweet taste and high energy content.",
        "growthPeriod": "9-12 months",
        "soilRequirements": "Rich, well-drained soil with pH 6.0 to 7.5",
        "wateringNeeds": "Requires consistent moisture, especially during growth",
        "climate": "Temperature range: 26°C to 30°C, high humidity",
        "harvesting": "When fruits are full-sized but still green",
        "pests": "Banana weevil, nematodes",
        "diseases": "Panama wilt, black sigatoka, banana bunchy top virus",
        "storage": "Store at room temperature or refrigerated for longer shelf life"
    },
    "blackgram": {
        "name": "Blackgram",
        "description": "Blackgram is a leguminous crop known for its high protein content.",
        "growthPeriod": "2-3 months",
        "soilRequirements": "Loamy to clay soil with pH 6.0 to 7.5",
        "wateringNeeds": "Rainfall range: 50mm to 200mm",
        "climate": "Temperature range: 20°C to 30°C, moderate humidity",
        "harvesting": "When pods turn black and seeds harden",
        "pests": "Pod borer, aphids",
        "diseases": "Leaf spot, powdery mildew",
        "storage": "Store seeds in a dry, cool place"
    },
    "chickpea": {
        "name": "Chickpea",
        "description": "Chickpea is a cool-season legume valued for its high protein content.",
        "growthPeriod": "4-5 months",
        "soilRequirements": "Well-drained loamy soil with pH 6.0 to 7.5",
        "wateringNeeds": "Rainfall range: 400mm to 800mm",
        "climate": "Temperature range: 20°C to 25°C",
        "harvesting": "When pods turn brown and seeds harden",
        "pests": "Pod borer, aphids",
        "diseases": "Fusarium wilt, Ascochyta blight",
        "storage": "Store in a cool, dry place"
    },
    "coconut": {
        "name": "Coconut",
        "description": "Coconut is a tropical tree crop valued for its oil and water.",
        "growthPeriod": "7-10 years for full maturity",
        "soilRequirements": "Sandy loam to loamy soil with pH 5.2 to 8.0",
        "wateringNeeds": "Requires consistent moisture, especially during dry periods",
        "climate": "Temperature range: 27°C to 32°C, high humidity",
        "harvesting": "When nuts are full-sized and dry",
        "pests": "Rhinoceros beetle, red palm weevil",
        "diseases": "Bud rot, leaf spot",
        "storage": "Store mature coconuts in dry, well-ventilated places"
    },
    "coffee": {
        "name": "Coffee",
        "description": "Coffee is a tropical beverage crop known for its economic and cultural significance.",
        "growthPeriod": "3-4 years for first harvest",
        "soilRequirements": "Well-drained loamy soil with pH 6.0 to 6.5",
        "wateringNeeds": "Requires consistent moisture",
        "climate": "Temperature range: 15°C to 28°C, moderate rainfall",
        "harvesting": "When cherries turn red and mature",
        "pests": "Coffee borer beetle, mealybugs",
        "diseases": "Coffee rust, coffee wilt",
        "storage": "Store in cool, dry conditions to preserve quality"
    },
    "cotton": {
        "name": "Cotton",
        "description": "Cotton is a major fiber crop, used extensively in textile manufacturing.",
        "growthPeriod": "5-6 months",
        "soilRequirements": "Well-drained, fertile soil with pH 6.0 to 7.0",
        "wateringNeeds": "Requires regular watering during growth, especially during boll formation",
        "climate": "Warm climates, 21°C to 30°C with moderate rainfall",
        "harvesting": "When bolls burst open and cotton fibers are visible",
        "pests": "Cotton bollworm, aphids, whiteflies",
        "diseases": "Cotton wilt, Fusarium wilt",
        "storage": "Store in dry, cool conditions to avoid moisture absorption"
    },
    "grapes": {
        "name": "Grapes",
        "description": "Grapes are a widely cultivated fruit used for fresh consumption, wine production, and dried fruits.",
        "growthPeriod": "3-5 years for first harvest",
        "soilRequirements": "Well-drained loamy soil with pH 6.0 to 7.0",
        "wateringNeeds": "Requires moderate watering, especially during fruit development",
        "climate": "Temperate to warm climates, 15°C to 30°C",
        "harvesting": "When grapes are fully ripe and firm",
        "pests": "Grape phylloxera, grapevine moth",
        "diseases": "Downy mildew, powdery mildew, black rot",
        "storage": "Store in cool conditions, or refrigerate to extend shelf life"
    },
    "jute": {
        "name": "Jute",
        "description": "Jute is a fiber crop used to produce ropes, bags, and textiles.",
        "growthPeriod": "4-6 months",
        "soilRequirements": "Well-drained, fertile soil with pH 6.0 to 7.5",
        "wateringNeeds": "Requires consistent moisture during growth",
        "climate": "Warm, humid climate, 25°C to 35°C",
        "harvesting": "When plants reach full maturity and fibers are ready",
        "pests": "Aphids, caterpillars",
        "diseases": "Jute mosaic disease, leaf spot",
        "storage": "Store harvested fiber in dry conditions"
    },
    "kidneybeans": {
        "name": "Kidneybeans",
        "description": "Kidney beans are a rich source of protein and essential nutrients.",
        "growthPeriod": "4-5 months",
        "soilRequirements": "Well-drained loamy soil with pH 6.0 to 7.5",
        "wateringNeeds": "Moderate watering, especially during flowering and pod formation",
        "climate": "Temperature range: 20°C to 30°C",
        "harvesting": "When pods are dry and seeds rattle inside",
        "pests": "Aphids, root rot",
        "diseases": "Rust, bacterial blight",
        "storage": "Store dried beans in a cool, dry place"
    },
    "lentil": {
        "name": "Lentil",
        "description": "Lentils are legumes, rich in protein and commonly used in soups and stews.",
        "growthPeriod": "3-4 months",
        "soilRequirements": "Well-drained, loamy soil with pH 6.0 to 7.5",
        "wateringNeeds": "Moderate watering, avoid over-watering during harvest",
        "climate": "Cool climate, 15°C to 20°C",
        "harvesting": "When pods turn brown and dry",
        "pests": "Aphids, beetles",
        "diseases": "Fusarium wilt, powdery mildew",
        "storage": "Store in a dry, cool place"
    },
    "maize": {
        "name": "Maize",
        "description": "Maize, or corn, is a staple crop with multiple uses, from food to industrial applications.",
        "growthPeriod": "3-4 months",
        "soilRequirements": "Well-drained, fertile soil with pH 5.5 to 7.0",
        "wateringNeeds": "Requires consistent moisture, especially during tasseling and grain filling",
        "climate": "Warm climate, 20°C to 30°C",
        "harvesting": "When kernels are firm and mature",
        "pests": "Corn borer, aphids",
        "diseases": "Corn smut, blight",
        "storage": "Store in dry, cool conditions"
    },
    "mango": {
        "name": "Mango",
        "description": "Mango is a tropical fruit known for its sweet, rich taste and nutritional value.",
        "growthPeriod": "3-5 years for first harvest",
        "soilRequirements": "Well-drained, sandy loam to clay soil with pH 5.5 to 7.5",
        "wateringNeeds": "Requires moderate irrigation, especially during flowering and fruiting",
        "climate": "Tropical to subtropical climates, 24°C to 30°C",
        "harvesting": "When fruits reach full size and color",
        "pests": "Mango weevil, fruit flies",
        "diseases": "Powdery mildew, anthracnose",
        "storage": "Store at room temperature until ripe"
    },
    "mothbeans": {
        "name": "Mothbeans",
        "description": "Moth beans are drought-resistant legumes grown for their edible seeds.",
        "growthPeriod": "2-3 months",
        "soilRequirements": "Well-drained sandy soil with pH 6.0 to 7.0",
        "wateringNeeds": "Requires minimal watering, drought tolerant",
        "climate": "Hot, dry climates, 25°C to 35°C",
        "harvesting": "When seeds are firm and pods turn brown",
        "pests": "Termites, aphids",
        "diseases": "Rust, powdery mildew",
        "storage": "Store in a cool, dry place"
    },
    "mungbean": {
        "name": "Mungbean",
        "description": "Mungbean is a fast-growing legume used in various culinary dishes.",
        "growthPeriod": "2-3 months",
        "soilRequirements": "Well-drained loamy soil with pH 6.0 to 7.5",
        "wateringNeeds": "Requires moderate watering during growth",
        "climate": "Warm climates, 25°C to 35°C",
        "harvesting": "When pods turn brown and seeds are firm",
        "pests": "Aphids, pod borer",
        "diseases": "Powdery mildew, rust",
        "storage": "Store in a dry, cool place"
    },
    "muskmelon": {
        "name": "Muskmelon",
        "description": "Muskmelon is a sweet, juicy fruit that thrives in warm climates.",
        "growthPeriod": "3-4 months",
        "soilRequirements": "Well-drained, sandy loam with pH 6.0 to 6.5",
        "wateringNeeds": "Requires regular watering, especially during fruit set",
        "climate": "Hot, dry climates, 25°C to 35°C",
        "harvesting": "When fruits reach full size and produce a sweet aroma",
        "pests": "Cucumber beetles, aphids",
        "diseases": "Powdery mildew, downy mildew",
        "storage": "Store in cool, dry conditions or refrigerate for extended shelf life"
    },
    "orange": {
        "name": "Orange",
        "description": "Orange is a citrus fruit known for its sweet and tangy flavor, packed with vitamin C.",
        "growthPeriod": "10-12 months",
        "soilRequirements": "Well-drained sandy loam with pH 6.0 to 7.0",
        "wateringNeeds": "Requires regular watering, especially during dry periods",
        "climate": "Tropical to subtropical climates, 25°C to 30°C",
        "harvesting": "When fruits are fully ripe and color is developed",
        "pests": "Aphids, scale insects",
        "diseases": "Citrus canker, root rot",
        "storage": "Store at room temperature or refrigerate for longer shelf life"
    },
    "papaya": {
        "name": "Papaya",
        "description": "Papaya is a tropical fruit known for its sweet taste and digestive properties.",
        "growthPeriod": "8-12 months",
        "soilRequirements": "Well-drained, sandy loam with pH 5.5 to 7.0",
        "wateringNeeds": "Requires consistent moisture during growth",
        "climate": "Tropical climate, 25°C to 35°C",
        "harvesting": "When fruits are fully ripe and soft",
        "pests": "Fruit flies, aphids",
        "diseases": "Powdery mildew, anthracnose",
        "storage": "Store at room temperature until ripe"
    },
    "pigeonpeas": {
        "name": "Pigeonpeas",
        "description": "Pigeonpeas are drought-tolerant legumes grown for their edible seeds.",
        "growthPeriod": "5-6 months",
        "soilRequirements": "Well-drained, sandy loam with pH 6.0 to 7.5",
        "wateringNeeds": "Requires moderate watering during flowering and pod formation",
        "climate": "Tropical and subtropical climates, 25°C to 35°C",
        "harvesting": "When pods are mature and dry",
        "pests": "Pod borer, aphids",
        "diseases": "Leaf spot, rust",
        "storage": "Store in a cool, dry place"
    },
    "pomegranate": {
        "name": "Pomegranate",
        "description": "Pomegranate is a fruit-bearing shrub known for its sweet, tangy seeds.",
        "growthPeriod": "2-3 years for first harvest",
        "soilRequirements": "Well-drained, loamy soil with pH 5.5 to 7.0",
        "wateringNeeds": "Moderate watering during flowering and fruit development",
        "climate": "Subtropical to tropical climates, 25°C to 35°C",
        "harvesting": "When fruits turn red and are fully ripe",
        "pests": "Aphids, mealybugs",
        "diseases": "Anthracnose, leaf spot",
        "storage": "Store in cool, dry conditions"
    },
    "rice": {
        "name": "Rice",
        "description": "Rice is a staple crop, providing the bulk of calories for many populations worldwide.",
        "growthPeriod": "4-6 months",
        "soilRequirements": "Well-drained, fertile soil with pH 5.5 to 6.5",
        "wateringNeeds": "Requires plenty of water during growth, especially during flowering",
        "climate": "Warm, wet conditions, 25°C to 35°C",
        "harvesting": "When grains are firm and fully mature",
        "pests": "Rice weevil, rice stem borer",
        "diseases": "Rice blast, bacterial blight",
        "storage": "Store in dry, cool conditions"
    },
    "watermelon": {
        "name": "Watermelon",
        "description": "Watermelon is a juicy, sweet fruit that thrives in hot climates.",
        "growthPeriod": "3-4 months",
        "soilRequirements": "Well-drained, sandy loam with pH 6.0 to 6.5",
        "wateringNeeds": "Requires regular watering, especially during fruit set",
        "climate": "Hot, dry climates, 25°C to 35°C",
        "harvesting": "When fruits produce a hollow sound when tapped",
        "pests": "Cucumber beetles, aphids",
        "diseases": "Powdery mildew, downy mildew",
        "storage": "Store in cool, dry conditions or refrigerate for longer shelf life"
    }
};


export const getCropInfo = (cropName) => {
    const normalizedName = cropName.toLowerCase();
    return cropInformation[normalizedName] || null;
};

// // Example Usage
// const crop = getCropInfo('Rice');
// console.log(crop);
