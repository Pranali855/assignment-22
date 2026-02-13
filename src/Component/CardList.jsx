import React, { useState } from "react";
import Card from "./Card.jsx";

export default function CardList() {
    const [cards, setCards] = useState([
        {
            id: 1,
            title: "Beautiful Mountain",
            description: "A scenic view of mountains during sunset.",
            imageUrl: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
        },
        {
            id: 2,
            title: "Nature Forest",
            description: "Green trees and peaceful environment.",
            imageUrl: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
        },
        {
            id: 3,
            title: "City Lights",
            description: "Night view of modern city buildings.",
            imageUrl: "https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg",
        },
        {
            id: 4,
            title: "Ocean View",
            description: "Blue ocean and calm waves.",
            imageUrl: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
        },
        {
            id: 5,
            title: "Desert",
            description: "Golden sand and clear sky.",
            imageUrl: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
        },
        {
            id: 6,
            title: "Sunrise Lake",
            description: "A peaceful sunrise by the lake.",
            imageUrl: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
        },
        {
            id: 7,
            title: "Elephant Family",
            description: "Elephants walking together in the wild.",
            imageUrl: "https://images.pexels.com/photos/667205/pexels-photo-667205.jpeg",
        },
        {
            id: 8,
            title: "Butterfly on Flower",
            description: "A colorful butterfly resting on a flower.",
            imageUrl: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg",
        },
        {
            id: 9,
            title: "Beautiful River",
            description: "A calm flowing river in the forest.",
            imageUrl: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg",
        },
        {
            id: 10,
            title: "Wild Horse",
            description: "A strong wild horse running freely.",
            imageUrl: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg",
        }
    ]);

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#0f172a", // optional: full-page background
                padding: "20px",
            }}
        >
            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center", // centers the cards horizontally
                }}
            >
                {cards.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}
