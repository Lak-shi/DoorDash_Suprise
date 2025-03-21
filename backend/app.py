# app.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import random
import json
from datetime import datetime
from fastapi.staticfiles import StaticFiles
from flask import Flask, send_from_directory

app = FastAPI(title="Surprise Me Friday API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, you would restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models for request/response validation
class UserPreferences(BaseModel):
    vibe: str
    craving: str
    restrictions: List[str]

class Dish(BaseModel):
    id: int
    name: str
    price: str
    description: str
    tags: List[str]
    imageUrl: Optional[str]
    restaurant: str
    cuisine: str
    rating: float
    deliveryTime: int
    matchPercentage: int
    matchReasons: Optional[List[str]]

class RecommendationResponse(BaseModel):
    recommendations: List[Dish]

# Load mock data
# In a real application, this would be in a database
with open("mock_data.json", "r") as f:
    RESTAURANTS = json.load(f)

# Simple recommendation algorithm
def get_recommendations(preferences: UserPreferences, shuffle: bool = False) -> List[Dish]:
    scored_dishes = []
    
    for restaurant in RESTAURANTS:
        for dish in restaurant["dishes"]:
            score = 0
            match_reasons = []
            
            # Score based on vibe
            if preferences.vibe == "comfort" and ("comfort food" in dish.get("attributes", []) or "comfort food" in restaurant.get("tags", [])):
                score += 30
                match_reasons.append("Matches your comfort food mood")
            
            if preferences.vibe == "healthy" and (
                "healthy" in dish.get("attributes", []) or 
                "fresh" in dish.get("attributes", []) or
                "healthy" in restaurant.get("tags", [])
            ):
                score += 30
                match_reasons.append("Perfect for your healthy mood")
            
            if preferences.vibe == "adventurous" and (
                "adventurous" in dish.get("attributes", []) or 
                "spicy" in dish.get("attributes", []) or
                "classic" not in dish.get("tags", [])
            ):
                score += 30
                match_reasons.append("Great for your adventurous spirit")
            
            if preferences.vibe == "quick" and restaurant.get("deliveryTime", 100) < 30:
                score += 30
                match_reasons.append("Quick delivery time")
            
            if preferences.vibe == "celebration" and (
                "celebration" in dish.get("attributes", []) or 
                "premium" in dish.get("attributes", []) or
                "premium" in dish.get("tags", [])
            ):
                score += 30
                match_reasons.append("Perfect for celebration")
            
            # Score based on craving
            if preferences.craving == "savory" and "savory" in dish.get("attributes", []):
                score += 20
                match_reasons.append("Satisfies your savory craving")
            
            if preferences.craving == "sweet" and "sweet" in dish.get("attributes", []):
                score += 20
                match_reasons.append("Satisfies your sweet tooth")
            
            if preferences.craving == "spicy" and (
                "spicy" in dish.get("attributes", []) or
                "spicy" in restaurant.get("tags", [])
            ):
                score += 20
                match_reasons.append("Brings the heat you're craving")
            
            if preferences.craving == "fresh" and (
                "fresh" in dish.get("attributes", []) or
                "fresh" in restaurant.get("tags", [])
            ):
                score += 20
                match_reasons.append("Fresh ingredients as requested")
            
            # Handle dietary restrictions
            if "vegetarian" in preferences.restrictions and (
                "vegetarian" not in dish.get("attributes", []) and
                "vegetarian" not in restaurant.get("tags", [])
            ):
                score -= 100  # Major penalty for not meeting dietary restrictions
            
            if "vegan" in preferences.restrictions and (
                "vegan" not in dish.get("attributes", []) and
                "vegan options" not in restaurant.get("tags", [])
            ):
                score -= 100
            
            if "gluten-free" in preferences.restrictions and (
                "gluten-free" not in dish.get("attributes", []) and
                "gluten-free" not in restaurant.get("tags", [])
            ):
                score -= 100
            
            # Small random factor to prevent exact same recommendations
            score += random.random() * 10
            
            # Only include dishes that meet dietary restrictions
            if score > 0:
                scored_dishes.append({
                    **dish,
                    "restaurant": restaurant["name"],
                    "cuisine": restaurant["cuisine"],
                    "rating": restaurant["rating"],
                    "deliveryTime": restaurant["deliveryTime"],
                    "matchPercentage": min(int(score), 99),
                    "matchReasons": match_reasons
                })
    
    # Sort by score
    sorted_dishes = sorted(scored_dishes, key=lambda x: x.get("matchPercentage", 0), reverse=True)
    
    # If shuffle is requested, exclude the top recommendations
    if shuffle and len(sorted_dishes) > 2:
        return [
            sorted_dishes[2],
            sorted_dishes[3] if len(sorted_dishes) > 3 else sorted_dishes[0]
        ]
    
    # Return top 2 recommendations
    return [
        sorted_dishes[0] if sorted_dishes else None,
        sorted_dishes[1] if len(sorted_dishes) > 1 else None
    ]

@app.post("/api/recommendations", response_model=RecommendationResponse)
async def get_meal_recommendations(preferences: UserPreferences, shuffle: bool = False):
    try:
        recommendations = get_recommendations(preferences, shuffle)
        # Filter out None values
        recommendations = [r for r in recommendations if r is not None]
        
        if not recommendations:
            raise HTTPException(status_code=404, detail="No suitable recommendations found")
        
        return {"recommendations": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

# Generate mock_data.json file if it doesn't exist
if __name__ == "__main__":
    import os
    import json
    
    if not os.path.exists("mock_data.json"):
        # This is the same data as in the frontend mockData.js
        data = [
            {
            "id": 1,
            "name": "Burger Empire",
            "cuisine": "American",
            "rating": 4.7,
            "priceRange": "$$",
            "deliveryTime": 25,
            "tags": ["burgers", "comfort food", "fast casual"],
            "dishes": [
                {
                "id": 101,
                "name": "Classic Cheeseburger",
                "price": "$12.99",
                "description": "Juicy beef patty with melted American cheese, lettuce, tomato, and special sauce on a brioche bun.",
                "tags": ["bestseller", "comfort food"],
                "attributes": ["savory", "comfort food"]
                },
                {
                "id": 102,
                "name": "Bacon Avocado Burger",
                "price": "$15.99",
                "description": "Premium beef patty topped with crispy bacon, fresh avocado, lettuce, and chipotle mayo.",
                "tags": ["premium", "popular"],
                "attributes": ["savory", "rich", "spicy"]
                }
            ]
            },
            {
            "id": 2,
            "name": "Green Garden",
            "cuisine": "Vegetarian",
            "rating": 4.8,
            "priceRange": "$$",
            "deliveryTime": 30,
            "tags": ["healthy", "vegetarian", "vegan options"],
            "dishes": [
                {
                "id": 201,
                "name": "Buddha Bowl",
                "price": "$14.99",
                "description": "Nutritious bowl with quinoa, roasted sweet potatoes, avocado, chickpeas, and tahini dressing.",
                "tags": ["healthy", "vegan"],
                "attributes": ["healthy", "fresh", "light", "vegetarian", "vegan"]
                },
                {
                "id": 202,
                "name": "Mediterranean Wrap",
                "price": "$12.99",
                "description": "Hummus, falafel, cucumber, tomato, and tzatziki wrapped in a whole wheat tortilla.",
                "tags": ["quick", "lunch favorite"],
                "attributes": ["healthy", "savory", "vegetarian"]
                }
            ]
            },
            {
            "id": 3,
            "name": "Spice Kingdom",
            "cuisine": "Indian",
            "rating": 4.6,
            "priceRange": "$$$",
            "deliveryTime": 40,
            "tags": ["spicy", "authentic", "curry"],
            "dishes": [
                {
                "id": 301,
                "name": "Butter Chicken",
                "price": "$16.99",
                "description": "Tender chicken in a rich tomato and butter sauce with aromatic spices. Served with basmati rice.",
                "tags": ["popular", "staff pick"],
                "attributes": ["spicy", "rich", "comfort food"]
                },
                {
                "id": 302,
                "name": "Vegetable Biryani",
                "price": "$14.99",
                "description": "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
                "tags": ["vegetarian", "authentic"],
                "attributes": ["spicy", "vegetarian", "savory"]
                }
            ]
            },
            {
            "id": 4,
            "name": "Sushi Wave",
            "cuisine": "Japanese",
            "rating": 4.9,
            "priceRange": "$$$",
            "deliveryTime": 35,
            "tags": ["sushi", "fresh", "healthy"],
            "dishes": [
                {
                "id": 401,
                "name": "Dragon Roll Combo",
                "price": "$22.99",
                "description": "Signature Dragon Roll with avocado and eel, plus a California Roll. Served with miso soup.",
                "tags": ["premium", "popular"],
                "attributes": ["fresh", "healthy", "adventurous"]
                },
                {
                "id": 402,
                "name": "Bento Box",
                "price": "$18.99",
                "description": "Assorted sushi, teriyaki chicken, vegetable tempura, and seaweed salad.",
                "tags": ["value", "variety"],
                "attributes": ["variety", "balanced"]
                }
            ]
            },
            {
            "id": 5,
            "name": "Pizza Palace",
            "cuisine": "Italian",
            "rating": 4.5,
            "priceRange": "$$",
            "deliveryTime": 30,
            "tags": ["pizza", "comfort food", "family friendly"],
            "dishes": [
                {
                "id": 501,
                "name": "Supreme Pizza",
                "price": "$16.99",
                "description": "Loaded with pepperoni, sausage, bell peppers, onions, olives, and mushrooms on our hand-tossed crust.",
                "tags": ["bestseller", "loaded"],
                "attributes": ["savory", "comfort food", "rich"]
                },
                {
                "id": 502,
                "name": "Margherita Pizza",
                "price": "$14.99",
                "description": "Classic pizza with fresh mozzarella, tomato sauce, and basil on a thin, crispy crust.",
                "tags": ["classic", "vegetarian"],
                "attributes": ["comfort food", "simple", "vegetarian"]
                }
            ]
            },
            {
            "id": 6,
            "name": "Taco Fiesta",
            "cuisine": "Mexican",
            "rating": 4.7,
            "priceRange": "$$",
            "deliveryTime": 25,
            "tags": ["tacos", "quick", "spicy"],
            "dishes": [
                {
                "id": 601,
                "name": "Street Taco Platter",
                "price": "$15.99",
                "description": "Four authentic street-style tacos with your choice of meat, topped with onions, cilantro, and lime.",
                "tags": ["authentic", "popular"],
                "attributes": ["spicy", "savory", "quick"]
                },
                {
                "id": 602,
                "name": "Loaded Nachos",
                "price": "$13.99",
                "description": "Crispy tortilla chips topped with queso, seasoned beef, beans, jalapeños, guacamole, and sour cream.",
                "tags": ["shareable", "loaded"],
                "attributes": ["spicy", "comfort food", "rich"]
                }
            ]
            },
            {
            "id": 7,
            "name": "Sweet Treats Bakery",
            "cuisine": "Desserts",
            "rating": 4.8,
            "priceRange": "$$",
            "deliveryTime": 20,
            "tags": ["desserts", "sweet", "bakery"],
            "dishes": [
                {
                "id": 701,
                "name": "Chocolate Lava Cake",
                "price": "$8.99",
                "description": "Warm chocolate cake with a molten center, served with vanilla ice cream.",
                "tags": ["decadent", "hot & cold"],
                "attributes": ["sweet", "indulgent", "celebration"]
                },
                {
                "id": 702,
                "name": "New York Cheesecake",
                "price": "$7.99",
                "description": "Classic creamy cheesecake with a graham cracker crust and berry compote.",
                "tags": ["classic", "popular"],
                "attributes": ["sweet", "rich", "comfort food"]
                }
            ]
            },
            {
            "id": 8,
            "name": "Noodle House",
            "cuisine": "Asian Fusion",
            "rating": 4.6,
            "priceRange": "$$",
            "deliveryTime": 35,
            "tags": ["noodles", "soup", "comfort food"],
            "dishes": [
                {
                "id": 801,
                "name": "Spicy Ramen",
                "price": "$14.99",
                "description": "Rich vegetable broth with ramen noodles, marinated tofu, soft-boiled egg (omit for vegan), bamboo shoots, and spicy miso paste.",
                "tags": ["spicy", "popular"],
                "attributes": ["spicy", "comfort food", "savory"]
                },
                {
                "id": 802,
                "name": "Pad Thai",
                "price": "$13.99",
                "description": "Stir-fried rice noodles with tofu, bean sprouts, eggs, and peanuts in a tangy tamarind sauce.",
                "tags": ["classic", "vegetarian option"],
                "attributes": ["tangy", "savory", "balanced", "vegetarian"]
                }
            ]
            },
            {
            "id": 11,
            "name": "Korean Kitchen",
            "cuisine": "Korean",
            "rating": 4.9,
            "priceRange": "$$$",
            "deliveryTime": 35,
            "tags": ["korean", "spicy", "grilled"],
            "dishes": [
                {
                "id": 1101,
                "name": "Bibimbap",
                "price": "$13.99",
                "description": "Steamed rice topped with assorted vegetables, bulgogi beef, and a fried egg.",
                "tags": ["balanced", "popular"],
                "attributes": ["savory", "spicy", "healthy"]
                },
                {
                "id": 1102,
                "name": "Korean Fried Chicken",
                "price": "$15.99",
                "description": "Crispy double-fried chicken tossed in a sweet and spicy gochujang glaze.",
                "tags": ["crispy", "flavorful"],
                "attributes": ["spicy", "crispy", "juicy"]
                }
            ]
            },
            {
            "id": 12,
            "name": "French Bistro",
            "cuisine": "French",
            "rating": 4.7,
            "priceRange": "$$$",
            "deliveryTime": 45,
            "tags": ["french", "fine dining", "elegant"],
            "dishes": [
                {
                "id": 1201,
                "name": "Coq au Vin",
                "price": "$19.99",
                "description": "Slow-cooked chicken in a rich red wine sauce with mushrooms and pearl onions.",
                "tags": ["classic", "hearty"],
                "attributes": ["savory", "rich"]
                },
                {
                "id": 1202,
                "name": "Crème Brûlée",
                "price": "$8.99",
                "description": "Silky vanilla custard topped with a caramelized sugar crust.",
                "tags": ["dessert", "classic"],
                "attributes": ["sweet", "creamy"]
                }
            ]
            }
        ]

        
        with open("mock_data.json", "w") as f:
            json.dump(data, f, indent=2)
    
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

@app.get("/")
async def root():
    return {"message": "Welcome to Surprise Me Friday API"}


# Ensure FastAPI serves static files correctly
image_directory = os.path.abspath("backend/images")  # Adjusted for proper path
if not os.path.exists(image_directory):
    raise Exception(f"Image directory not found: {image_directory}")

# Mount the images directory for static serving
app.mount("/images", StaticFiles(directory=image_directory), name="images")