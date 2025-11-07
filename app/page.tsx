'use client'

import { useState } from 'react'
import styles from './page.module.css'

const artworks = [
  {
    id: 1,
    title: "Ethereal Dreams",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: "120 × 150 cm",
    color: "#8b4513"
  },
  {
    id: 2,
    title: "Urban Solitude",
    medium: "Acrylic & Mixed Media",
    year: "2023",
    dimensions: "100 × 100 cm",
    color: "#2c3e50"
  },
  {
    id: 3,
    title: "Chromatic Symphony",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: "90 × 120 cm",
    color: "#e74c3c"
  },
  {
    id: 4,
    title: "Silent Conversations",
    medium: "Charcoal & Ink",
    year: "2023",
    dimensions: "70 × 100 cm",
    color: "#34495e"
  },
  {
    id: 5,
    title: "Golden Hour",
    medium: "Oil on Canvas",
    year: "2024",
    dimensions: "80 × 120 cm",
    color: "#f39c12"
  },
  {
    id: 6,
    title: "Metamorphosis",
    medium: "Mixed Media",
    year: "2024",
    dimensions: "110 × 140 cm",
    color: "#16a085"
  }
]

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <h1 className={styles.logo}>MAJSTOR NASTE</h1>
          <ul className={styles.navLinks}>
            <li>
              <button
                className={activeSection === 'home' ? styles.active : ''}
                onClick={() => setActiveSection('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'gallery' ? styles.active : ''}
                onClick={() => setActiveSection('gallery')}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'about' ? styles.active : ''}
                onClick={() => setActiveSection('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={activeSection === 'contact' ? styles.active : ''}
                onClick={() => setActiveSection('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>Contemporary Art</h2>
            <p className={styles.heroSubtitle}>Exploring the boundaries of expression through color, form, and emotion</p>
            <button
              className={styles.ctaButton}
              onClick={() => setActiveSection('gallery')}
            >
              View Gallery
            </button>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section className={styles.gallery}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Gallery</h2>
            <div className={styles.grid}>
              {artworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className={styles.artworkCard}
                  onClick={() => setSelectedArtwork(artwork.id)}
                  style={{ backgroundColor: artwork.color }}
                >
                  <div className={styles.artworkOverlay}>
                    <h3>{artwork.title}</h3>
                    <p>{artwork.medium}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className={styles.about}>
          <div className="container">
            <h2 className={styles.sectionTitle}>About the Artist</h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p>
                  Majstor Naste is a contemporary artist based in Belgrade, Serbia, whose work
                  explores the intersection of traditional techniques and modern expression.
                  With over 15 years of experience, Naste's portfolio spans various mediums
                  including oil painting, acrylics, charcoal, and mixed media.
                </p>
                <p>
                  Drawing inspiration from urban landscapes, human emotion, and the subtle
                  interplay of light and shadow, each piece invites viewers to discover their
                  own narrative within the canvas. The work has been exhibited in galleries
                  across Europe and is part of private collections worldwide.
                </p>
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <h3>15+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className={styles.stat}>
                    <h3>200+</h3>
                    <p>Works Created</p>
                  </div>
                  <div className={styles.stat}>
                    <h3>30+</h3>
                    <p>Exhibitions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className={styles.contact}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Get in Touch</h2>
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <h3>Commission Inquiries</h3>
                <p>Interested in commissioning a custom piece or purchasing available works?</p>
                <div className={styles.contactDetails}>
                  <p><strong>Email:</strong> info@majstornaste.art</p>
                  <p><strong>Studio:</strong> Belgrade, Serbia</p>
                  <p><strong>Available:</strong> Mon - Fri, 10:00 - 18:00 CET</p>
                </div>
              </div>
              <form className={styles.contactForm}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows={6} required></textarea>
                <button type="submit" className={styles.submitButton}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      )}

      {selectedArtwork && (
        <div className={styles.modal} onClick={() => setSelectedArtwork(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setSelectedArtwork(null)}>×</button>
            {artworks.find(a => a.id === selectedArtwork) && (
              <>
                <div
                  className={styles.modalImage}
                  style={{ backgroundColor: artworks.find(a => a.id === selectedArtwork)?.color }}
                ></div>
                <div className={styles.modalInfo}>
                  <h3>{artworks.find(a => a.id === selectedArtwork)?.title}</h3>
                  <p><strong>Medium:</strong> {artworks.find(a => a.id === selectedArtwork)?.medium}</p>
                  <p><strong>Year:</strong> {artworks.find(a => a.id === selectedArtwork)?.year}</p>
                  <p><strong>Dimensions:</strong> {artworks.find(a => a.id === selectedArtwork)?.dimensions}</p>
                  <button className={styles.inquireButton}>Inquire About This Piece</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <footer className={styles.footer}>
        <p>&copy; 2024 Majstor Naste Art. All rights reserved.</p>
      </footer>
    </div>
  )
}
