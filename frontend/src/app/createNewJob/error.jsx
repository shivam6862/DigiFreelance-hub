"use client";

export default function Error({ error, reset }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2
        style={{
          color: "var(--white-color)",
          fontSize: "3rem",
        }}
      >
        Something went wrong!
      </h2>
      <button
        onClick={() => reset()}
        style={{
          all: "unset",
          padding: "1rem",
          color: "var(--white-color)",
          fontSize: "3rem",
          border: "1px solid var(--white-color)",
          borderRadius: "0.5rem",
        }}
      >
        Try again
      </button>
    </div>
  );
}
