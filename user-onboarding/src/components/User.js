import React from "react";

export default function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friends details...</h3>;
  }
  return (
    <div className="user container">
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>Agreed to Terms?: {details.terms}</p>
    </div>
  );
}
