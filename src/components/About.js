import React from "react";
import { Link } from "react-router-dom";

const aboutHighlights = [
  {
    number: "01",
    title: "Useful by design",
    description:
      "Everyday pieces should be practical, considered, and easy to make your own.",
  },
  {
    number: "02",
    title: "A simpler browse",
    description:
      "Clear choices and a straightforward experience make finding something good feel easy.",
  },
  {
    number: "03",
    title: "Room to discover",
    description:
      "From familiar essentials to fresh finds, there is always something worth a closer look.",
  },
];

const About = () => (
  <main className="about-page">
    <section className="about-intro">
      <div className="about-copy">
        <p className="about-eyebrow">A little about us</p>
        <h1>Thoughtful finds for everyday living.</h1>
        <p className="about-lede">
          React R is a simple place to discover useful things for your daily
          routine. Browse at your own pace and find pieces that feel right for
          you.
        </p>
        <Link className="about-shop-link" to="/">
          Explore the home page <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <img
        className="about-image"
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
        alt="Calm, sunlit living room with thoughtfully arranged furnishings"
      />
    </section>

    <section className="about-highlights" aria-label="What matters to us">
      {aboutHighlights.map((highlight) => (
        <article className="about-highlight" key={highlight.number}>
          <span className="about-number">{highlight.number}</span>
          <h2>{highlight.title}</h2>
          <p>{highlight.description}</p>
        </article>
      ))}
    </section>
  </main>
);

export default About;
