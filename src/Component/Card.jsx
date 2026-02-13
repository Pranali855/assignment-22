import React from "react";

export default function Card({ title, description, imageUrl }) {
  return (
    <div
      style={{
        width: "300px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <h3 style={{ margin: "0 0 10px" }}>{title}</h3>
        <p style={{ margin: 0 }}>{description}</p>
      </div>
    </div>
  );
}
