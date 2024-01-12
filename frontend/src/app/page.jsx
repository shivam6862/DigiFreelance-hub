"use client";
import classes from "@/styles/page.module.css";
import Header from "@/components/Header";

export default function App() {
  return (
    <main>
      <Header />
      <div className={classes.container}>
        <div>Home Page</div>
      </div>
    </main>
  );
}
