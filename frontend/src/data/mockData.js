// src/data/mockData.js

// Sample restaurant data
const restaurants = [
    {
      id: 1,
      name: "Burger Empire",
      cuisine: "American",
      rating: 4.7,
      priceRange: "$$",
      deliveryTime: 25,
      tags: ["burgers", "comfort food", "fast casual"],
      dishes: [
        {
          id: 101,
          name: "Classic Cheeseburger",
          price: "$12.99",
          description: "Juicy beef patty with melted American cheese, lettuce, tomato, and special sauce on a brioche bun.",
          tags: ["bestseller", "comfort food"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["savory", "comfort"]
        },
        {
          id: 102,
          name: "Bacon Avocado Burger",
          price: "$15.99",
          description: "Premium beef patty topped with crispy bacon, fresh avocado, lettuce, and chipotle mayo.",
          tags: ["premium", "popular"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["savory", "rich", "spicy"]
        }
      ]
    },
    {
      id: 2,
      name: "Green Garden",
      cuisine: "Vegetarian",
      rating: 4.8,
      priceRange: "$$",
      deliveryTime: 30,
      tags: ["healthy", "vegetarian", "vegan options"],
      dishes: [
        {
          id: 201,
          name: "Buddha Bowl",
          price: "$14.99",
          description: "Nutritious bowl with quinoa, roasted sweet potatoes, avocado, chickpeas, and tahini dressing.",
          tags: ["healthy", "vegan"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["healthy", "fresh", "light"]
        },
        {
          id: 202,
          name: "Mediterranean Wrap",
          price: "$12.99",
          description: "Hummus, falafel, cucumber, tomato, and tzatziki wrapped in a whole wheat tortilla.",
          tags: ["quick", "lunch favorite"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["healthy", "savory"]
        }
      ]
    },
    {
      id: 3,
      name: "Spice Kingdom",
      cuisine: "Indian",
      rating: 4.6,
      priceRange: "$$$",
      deliveryTime: 40,
      tags: ["spicy", "authentic", "curry"],
      dishes: [
        {
          id: 301,
          name: "Butter Chicken",
          price: "$16.99",
          description: "Tender chicken in a rich tomato and butter sauce with aromatic spices. Served with basmati rice.",
          tags: ["popular", "staff pick"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["spicy", "rich", "comfort food"]
        },
        {
          id: 302,
          name: "Vegetable Biryani",
          price: "$14.99",
          description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
          tags: ["vegetarian", "authentic"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["spicy", "vegetarian", "savory"]
        }
      ]
    },
    {
      id: 4,
      name: "Sushi Wave",
      cuisine: "Japanese",
      rating: 4.9,
      priceRange: "$$$",
      deliveryTime: 35,
      tags: ["sushi", "fresh", "healthy"],
      dishes: [
        {
          id: 401,
          name: "Dragon Roll Combo",
          price: "$22.99",
          description: "Signature Dragon Roll with avocado and eel, plus a California Roll. Served with miso soup.",
          tags: ["premium", "popular"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["fresh", "healthy", "adventurous"]
        },
        {
          id: 402,
          name: "Bento Box",
          price: "$18.99",
          description: "Assorted sushi, teriyaki chicken, vegetable tempura, and seaweed salad.",
          tags: ["value", "variety"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["variety", "balanced"]
        }
      ]
    },
    {
      id: 5,
      name: "Pizza Palace",
      cuisine: "Italian",
      rating: 4.5,
      priceRange: "$$",
      deliveryTime: 30,
      tags: ["pizza", "comfort food", "family friendly"],
      dishes: [
        {
          id: 501,
          name: "Supreme Pizza",
          price: "$16.99",
          description: "Loaded with pepperoni, sausage, bell peppers, onions, olives, and mushrooms on our hand-tossed crust.",
          tags: ["bestseller", "loaded"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["savory", "comfort food", "rich"]
        },
        {
          id: 502,
          name: "Margherita Pizza",
          price: "$14.99",
          description: "Classic pizza with fresh mozzarella, tomato sauce, and basil on a thin, crispy crust.",
          tags: ["classic", "vegetarian"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["comfort food", "simple", "vegetarian"]
        }
      ]
    },
    {
      id: 6,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      rating: 4.7,
      priceRange: "$$",
      deliveryTime: 25,
      tags: ["tacos", "quick", "spicy"],
      dishes: [
        {
          id: 601,
          name: "Street Taco Platter",
          price: "$15.99",
          description: "Four authentic street-style tacos with your choice of meat, topped with onions, cilantro, and lime.",
          tags: ["authentic", "popular"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["spicy", "savory", "quick"]
        },
        {
          id: 602,
          name: "Loaded Nachos",
          price: "$13.99",
          description: "Crispy tortilla chips topped with queso, seasoned beef, beans, jalapeños, guacamole, and sour cream.",
          tags: ["shareable", "loaded"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["spicy", "comfort food", "rich"]
        }
      ]
    },
    {
      id: 7,
      name: "Sweet Treats Bakery",
      cuisine: "Desserts",
      rating: 4.8,
      priceRange: "$$",
      deliveryTime: 20,
      tags: ["desserts", "sweet", "bakery"],
      dishes: [
        {
          id: 701,
          name: "Chocolate Lava Cake",
          price: "$8.99",
          description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
          tags: ["decadent", "hot & cold"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["sweet", "indulgent", "celebration"]
        },
        {
          id: 702,
          name: "New York Cheesecake",
          price: "$7.99",
          description: "Classic creamy cheesecake with a graham cracker crust and berry compote.",
          tags: ["classic", "popular"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["sweet", "rich", "comfort food"]
        }
      ]
    },
    {
      id: 8,
      name: "Noodle House",
      cuisine: "Asian Fusion",
      rating: 4.6,
      priceRange: "$$",
      deliveryTime: 35,
      tags: ["noodles", "soup", "comfort food"],
      dishes: [
        {
          id: 801,
          name: "Spicy Ramen",
          price: "$14.99",
          description: "Rich pork broth with ramen noodles, chashu pork, soft-boiled egg, bamboo shoots, and spicy miso paste.",
          tags: ["spicy", "popular"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["spicy", "comfort food", "savory"]
        },
        {
          id: 802,
          name: "Pad Thai",
          price: "$13.99",
          description: "Stir-fried rice noodles with tofu, bean sprouts, eggs, and peanuts in a tangy tamarind sauce.",
          tags: ["classic", "vegetarian option"],
          imageUrl: "/api/placeholder/400/300",
          attributes: ["tangy", "savory", "balanced"]
        }
      ]
    }
  ];
  
  // Recommendation algorithm based on user preferences
  const getMockRecommendations = (preferences, shuffle = false) => {
    // Default recommendations if preferences are not provided
    if (!preferences) {
      const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
      const randomDish = randomRestaurant.dishes[Math.floor(Math.random() * randomRestaurant.dishes.length)];
      
      return [{
        ...randomDish,
        restaurant: randomRestaurant.name,
        cuisine: randomRestaurant.cuisine,
        rating: randomRestaurant.rating,
        deliveryTime: randomRestaurant.deliveryTime,
        price: randomDish.price,
        matchPercentage: 75
      }];
    }
    
    // Score restaurants and dishes based on user preferences
    const scoredDishes = [];
    
    restaurants.forEach(restaurant => {
      restaurant.dishes.forEach(dish => {
        let score = 0;
        let matchReasons = [];
        
        // Score based on vibe
        if (preferences.vibe === 'comfort' && 
            (dish.attributes.includes('comfort food') || restaurant.tags.includes('comfort food'))) {
          score += 30;
          matchReasons.push('Matches your comfort food mood');
        }
        
        if (preferences.vibe === 'healthy' && 
            (dish.attributes.includes('healthy') || dish.attributes.includes('fresh') || 
             restaurant.tags.includes('healthy'))) {
          score += 30;
          matchReasons.push('Perfect for your healthy mood');
        }
        
        if (preferences.vibe === 'adventurous' && 
            (dish.attributes.includes('adventurous') || dish.attributes.includes('spicy') ||
             !dish.tags.includes('classic'))) {
          score += 30;
          matchReasons.push('Great for your adventurous spirit');
        }
        
        if (preferences.vibe === 'quick' && restaurant.deliveryTime < 30) {
          score += 30;
          matchReasons.push('Quick delivery time');
        }
        
        if (preferences.vibe === 'celebration' && 
            (dish.attributes.includes('celebration') || dish.attributes.includes('premium') ||
             dish.tags.includes('premium'))) {
          score += 30;
          matchReasons.push('Perfect for celebration');
        }
        
        // Score based on craving
        if (preferences.craving === 'savory' && dish.attributes.includes('savory')) {
          score += 20;
          matchReasons.push('Satisfies your savory craving');
        }
        
        if (preferences.craving === 'sweet' && dish.attributes.includes('sweet')) {
          score += 20;
          matchReasons.push('Satisfies your sweet tooth');
        }
        
        if (preferences.craving === 'spicy' && 
            (dish.attributes.includes('spicy') || restaurant.tags.includes('spicy'))) {
          score += 20;
          matchReasons.push('Brings the heat you\'re craving');
        }
        
        if (preferences.craving === 'fresh' && 
            (dish.attributes.includes('fresh') || restaurant.tags.includes('fresh'))) {
          score += 20;
          matchReasons.push('Fresh ingredients as requested');
        }
        
        // Handle dietary restrictions
        if (preferences.restrictions.includes('vegetarian') && 
            !dish.attributes.includes('vegetarian') && !restaurant.tags.includes('vegetarian')) {
          score -= 100; // Major penalty for not meeting dietary restrictions
        }
        
        if (preferences.restrictions.includes('vegan') && 
            !dish.attributes.includes('vegan') && !restaurant.tags.includes('vegan options')) {
          score -= 100;
        }
        
        if (preferences.restrictions.includes('gluten-free') && 
            !dish.attributes.includes('gluten-free') && !restaurant.tags.includes('gluten-free')) {
          score -= 100;
        }
        
        // Small random factor to prevent exact same recommendations
        score += Math.random() * 10;
        
        // Only include dishes that meet dietary restrictions
        if (score > 0) {
          scoredDishes.push({
            ...dish,
            restaurant: restaurant.name,
            cuisine: restaurant.cuisine,
            rating: restaurant.rating,
            deliveryTime: restaurant.deliveryTime,
            price: dish.price,
            score: score,
            matchPercentage: Math.min(Math.floor(score), 99),
            matchReasons: matchReasons
          });
        }
      });
    });
    
    // Sort by score and return top recommendations
    const sortedDishes = scoredDishes.sort((a, b) => b.score - a.score);
    
    // If shuffle is requested, exclude the top recommendations
    if (shuffle && sortedDishes.length > 2) {
      return [
        sortedDishes[2], 
        sortedDishes.length > 3 ? sortedDishes[3] : sortedDishes[0]
      ];
    }
    
    // Return top 2 recommendations
    return [
      sortedDishes[0], 
      sortedDishes.length > 1 ? sortedDishes[1] : null
    ].filter(Boolean);
  };
  
  export { restaurants, getMockRecommendations };