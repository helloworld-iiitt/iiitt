/**
 *
 * Library Page
 */

"use client";

import Image from "next/image";
import nextConfig from "../../../next.config";
import styles from "./library.module.css";
import MainCarousel from "@/components/Carousel/MainCarousel";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function Library() {
  const [carouselData, setCarouselData] = useState<{ data: any[] }>({
    data: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carouselRes] = await Promise.all([
          fetch("/json/library/library_carousel.json").then((res) =>
            res.json(),
          ),
        ]);

        setCarouselData(carouselRes);
      } catch (error) {
        console.error("Error loading JSON data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        className={styles.themeText}
      >
        <Box component="span" fontWeight={380}>
          Library
        </Box>
      </Typography>
      <div style={{ padding: "0 200px", margin: "20px 0" }}>
        <MainCarousel images={carouselData.data} repeat={false} height={700} />
      </div>
      <div className={styles.aboutus}>
        <h1>About us</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.column}>
          <iframe
            width="70%"
            height="200"
            src="https://www.youtube.com/embed/KCrvIJOxigY"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.column}>
          <p className={styles.about}>
            The institute boasts a well-stocked library with a growing
            collection of over 2,400 books that support students in excelling
            across their respective fields of study. Regularly updated with new
            and relevant titles, the library empowers users to expand their
            knowledge, stay academically enriched, and keep pace with evolving
            disciplines. Designed to inspire learning, the library offers a
            welcoming and supportive study environment.
          </p>
          <p className={styles.about}>
            Users can browse the open stacks, access the web center for research
            and digital resources, or enjoy focused study in the spacious and
            quiet reading room. Our friendly, knowledgeable, and experienced
            library staff are always available to assist in locating resources
            and making the best use of library facilities. Students and faculty
            are warmly encouraged to become active and engaged members of our
            vibrant library community, taking full advantage of the library’s
            resources to support lifelong learning, research excellence, and
            academic success.
          </p>
        </div>

        <div className={`${styles.column} ${styles.buttons}`}>
          <a href="#" className={styles.blue}>
            Login →
          </a>
          <a href="resources.html" className={styles.blue}>
            Inventory →
          </a>
          <a href="ones.html" className={styles.blue}>
            ONOS E-Resources →
          </a>
        </div>
      </div>
      <div className={styles.librarytimings}>
        <Image
          width={900}
          height={600}
          src={`${nextConfig.env?.IMAGE}/Library_photo_2026/LT1.png`}
          alt={"Library Timings"}
        />
      </div>

      <div className={styles.cardscontainer}>
        <div className={styles.card}>
          <i className="fas fa-university fa-3x"></i>
          <h3>Library Administration</h3>
          <p>
            <strong>Library-in-charge:</strong> Dr. S. Padmathilagam
          </p>
          <p>
            <strong>Contact:</strong> library@iiitt.ac.in
          </p>
          <p>
            <strong>Librarian:</strong> Dr. J. Issac Arputharaj
          </p>
          <p>
            <strong>Contact:</strong> librarian@iiitt.ac.in
          </p>
        </div>

        <div className={styles.card}>
          <i className="fas fa-book-open fa-3x"></i>
          <h3>Services</h3>
          <p>Find out whether the desired book is available or not.</p>
          <p>Keep track of your dues and borrowed books easily.</p>
        </div>

        <div className={styles.card}>
          <i className="fas fa-hand-holding fa-3x"></i>
          <h3>Book Borrowing</h3>
          <p>Borrow up for a duration of one month.</p>
        </div>
      </div>

      <div className={styles.Misc}>
        <i className="fa-solid fa-newspaper"></i>&nbsp;
        <a
          href="http://store.iiitt.ac.in/images/facilities/Library%20Rules%20IIIT%20Tiruchirappalli_2026.pdf"
          style={{
            color: "#1d6b3a",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Rules & Regulations
        </a>
      </div>

      <div className={styles.Newscard}>
        <div className={styles.Newsheader}>
          <h3>Latest News & Notifications</h3>
          <div className={styles.Newsbody}>
            <ul style={{ margin: "16px 0", paddingLeft: "40px", listStyle: "initial" }}>
              <li>Libary is now open from Monday to Saturday!</li>
              {/* <li>Plagiarism detection reports are available upon request by emailing at <a href="mailto:librarian@iiitt.ac.in">librarian@iiitt.ac.in</a></li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
