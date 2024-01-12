"use client";
import classes from "@/styles/page.module.css";
import Header from "@/components/Header";
import HomeCategories from "@/components/HomeCategories";

export default function App() {
  return (
    <main>
      <Header />
      <div className={classes.container}>
        <div>
          <HomeCategories />
        </div>
      </div>
    </main>
  );
}
