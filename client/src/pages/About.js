import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <img
        src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBza3klMjBibHVlfGVufDB8fDB8dGVhbHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="building"
      />
      <aside className="about-displayright">
        <h3>About Us</h3>
        <h1>
          We provide the best <span>property</span> for you, we have got you
          covered.
        </h1>

        <button>Learn More</button>

        <div className="testimonials">
          <h3>Testimonials</h3>
          <h1>
            What Our <span>Customers</span> Have To Say
          </h1>
        </div>

        <section className="testimonial-grid">
          <div>
            <p>
              The team offers the largest dedicated real estate platform of any
              financier in sub-Saharan Africa and our expertise extends across
              the continent
            </p>
            <h2>
              Vincent Magnata: <span>Home - Owner, Nrb</span>
            </h2>
          </div>

          <div>
            <p>
              A premier real estate company in Kenya on a mission to enrich the
              quality of every persons life that we touch
            </p>

            <h2>
              Billy Jean: <span>Home - Owner, Nrb</span>
            </h2>

            <p>
              A premier real estate company in Kenya on a mission to enrich the
              quality of every persons life that we touch
            </p>
          </div>
        </section>
      </aside>
    </div>
  );
}
export default About;
