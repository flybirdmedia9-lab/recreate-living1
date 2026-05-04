import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  CheckCircle,
  Zap,
  Shield,
  Award,
  Truck,
  PlayCircle
} from 'lucide-react';
import './LandingPage.css';

const WHATSAPP_NUMBER = '919949819132';
const CONTACT_PHONE = '+91 99498 19132';

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// --- Data ---

const HERO_IMAGES = [
  '/assets/lshape_premium.png',
  '/assets/sofa_set_premium.png',
  '/assets/custom_premium.png'
];

const CATEGORIES = [
  {
    id: 'l-shape',
    title: 'L-Shape Sofas',
    description: 'Designed for modern living rooms with spacious and comfortable seating.',
    images: [
      '/assets/lshape_premium.png',
      '/assets/lshape_2_1777355196505.png',
      '/assets/lshape_3_1777355212084.png',
      '/assets/lshape_sofa_1_1777354147446.png',
      '/assets/d45ea444-6ac3-4465-b1ff-52c86277912d.png'
    ]
  },
  {
    id: 'recliners',
    title: 'Recliners',
    description: 'Experience next-level comfort with smooth and relaxing recliner sofas.',
    images: [
      '/assets/recliner_luxury.png',
      '/assets/recliner_2_1777355235897.png',
      '/assets/recliner_3_1777355255036.png',
      '/assets/recliner_sofa_1_1777354165736.png'
    ]
  },
  {
    id: 'sofa-sets',
    title: 'Sofa Sets (3+2 / 3+1+1)',
    description: 'Classic combinations for complete family seating.',
    images: [
      '/assets/sofa_set_premium.png',
      '/assets/classic_2_1777355644500.png',
      '/assets/classic_3_1777355661512.png',
      '/assets/classic_sofa_1_1777354382396.png'
    ]
  },
  {
    id: 'sofa-cum-bed',
    title: 'Smart Sofa-Cum-Beds',
    description: 'Seamlessly transition from lounging to sleeping with our space-saving designs.',
    images: [
      '/assets/sofa_cum_bed_premium.png',
      '/assets/sofacumbed_2_1777355271573.png',
      '/assets/sofacumbed_3_1777355288408.png',
      '/assets/sofa_cum_bed_1_1777354186459.png'
    ]
  },
  {
    id: 'custom-sofas',
    title: 'Bespoke Custom Sofas',
    description: 'Handcrafted masterpieces built exactly to your vision and dimensions.',
    images: [
      '/assets/custom_premium.png',
      '/assets/custom_2_1777355679358.png',
      '/assets/custom_3_1777355695866.png',
      '/assets/custom_sofa_1_1777354400516.png'
    ]
  }
];

const WHY_CHOOSE_US = [
  { image: '/assets/feat_custom.png', text: 'Bespoke designs tailored for you' },
  { image: '/assets/feat_materials.png', text: 'Finest hand-picked materials' },
  { image: '/assets/feat_frames.png', text: 'Engineered for durability' },
  { image: '/assets/feat_comfort.png', text: 'Unmatched ergonomic comfort' },
  { image: '/assets/feat_legacy.png', text: '35+ Years Palagani Craftsmanship' },
  { image: '/assets/feat_factory.png', text: 'Direct from our design studio' }
];

const HOW_IT_WORKS = [
  { step: 1, title: 'Consultation', desc: 'Share your vision, space requirements, or reference designs with our experts.' },
  { step: 2, title: 'Design & Quote', desc: 'Receive a personalized design proposal and a transparent, direct price.' },
  { step: 3, title: 'Handcrafting', desc: 'Our master craftsmen bring your dream sofa to life with precision and care.' }
];

const REVIEWS = [
  {
    name: 'Srinivas R.',
    location: 'Vijayawada',
    text: 'The premium finish and comfort exceeded our expectations. Our custom L-shape is the highlight of our home.'
  },
  {
    name: 'Meghana K.',
    location: 'Tadepalli',
    text: 'They brought our Pinterest inspiration to life perfectly. The quality of the velvet and the frame is outstanding.'
  },
  {
    name: 'Rahul & Family',
    location: 'Guntur',
    text: 'A truly premium experience. The 35 years of Palagani legacy is evident in every stitch and detail.'
  }
];

// --- Components ---

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="sandria-category-carousel">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`View ${idx + 1}`}
          className={`sandria-category-img ${idx === currentIndex ? 'active' : ''}`}
        />
      ))}
      
      {images.length > 1 && (
        <>
          <button className="sandria-carousel-nav prev" onClick={prev}><ChevronLeft size={20} /></button>
          <button className="sandria-carousel-nav next" onClick={next}><ChevronRight size={20} /></button>
          <div className="sandria-carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`sandria-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// --- Main Page ---

export default function LandingPage() {
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="sandria-shell">
      {/* Topbar */}
      <header className="sandria-topbar">
        <div className="sandria-container sandria-topbar-inner">
          <div className="sandria-topbar-left">
            <span>The Palagani Legacy — Crafting Comfort for 35+ Years</span>
          </div>
          <div className="sandria-topbar-contact">
            <a href={`tel:${CONTACT_PHONE}`}><Phone size={14} /> {CONTACT_PHONE}</a>
          </div>
        </div>
      </header>

      {/* Navbar */}
      <nav className="sandria-nav">
        <div className="sandria-container sandria-nav-inner">
          <a href="#" className="sandria-brand">
            <img src="/assets/full_logo_gold.png" alt="ReCreate Living" className="sandria-logo-img" />
          </a>
          <div className="sandria-menu">
            <a href="#collections">Collections</a>
            <a href="#about">Legacy</a>
            <a href="#how-it-works">Process</a>
            <a href="#location">Studio</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="sandria-hero">
        <div className="sandria-hero-bg">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className={`sandria-hero-slide ${idx === heroSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="sandria-hero-overlay"></div>
        </div>
        
        <div className="sandria-container sandria-hero-content">
          <div className="sandria-hero-text-wrap">
            <span className="sandria-kicker">ReDefine Your Living Space</span>
            <h1>Premium Handcrafted Sofas.</h1>
            <p className="sandria-hero-subtitle">Elegance in Every Stitch</p>
            <p>Bespoke L-shape sofas, recliners, and luxury sets designed to elevate your home comfort.</p>
            
            <a
              href={whatsappLink('Hi ReCreate Living, I want to order a sofa.')}
              target="_blank"
              rel="noreferrer"
              className="sandria-btn sandria-btn-whatsapp"
            >
              <MessageCircle size={20} />
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sandria-section sandria-why-us">
        <div className="sandria-container">
          <div className="sandria-section-head">
            <h2>Why Choose Us</h2>
            <p>Quality and craftsmanship that stands the test of time.</p>
          </div>
          <div className="sandria-features-grid">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="sandria-feature-item">
                <div className="sandria-feature-image">
                  <img src={item.image} alt={item.text} />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="collections" className="sandria-section">
        <div className="sandria-container">
          <div className="sandria-section-head">
            <h2>Our Collections</h2>
            <p>Browse our beautiful collections and find the one that feels like home.</p>
          </div>
          
          <div className="sandria-product-banner">
            <p>✨ Masterpieces Crafted for You | 100% Customizable Sofas ✨</p>
            <span>Choose your fabric, density, size, and style to match your vision.</span>
          </div>

          <div className="sandria-categories">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="sandria-category-card">
                <div className="sandria-category-image-wrapper">
                  <ImageCarousel images={cat.images} />
                </div>
                <div className="sandria-category-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <a
                    href={whatsappLink(`Hi ReCreate Living, I want to order a ${cat.title} sofa.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="sandria-btn-pricing"
                  >
                    Get Pricing
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="sandria-section sandria-how-it-works">
        <div className="sandria-container">
          <div className="sandria-section-head">
            <h2>How It Works</h2>
            <p>Your journey to the perfect sofa is simple and transparent.</p>
          </div>
          <div className="sandria-steps-grid">
            {HOW_IT_WORKS.map((step) => (
              <div key={step.step} className="sandria-step-card">
                <div className="sandria-step-number">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Showcase */}
      <section className="sandria-section sandria-videos">
        <div className="sandria-container">
          <div className="sandria-section-head">
            <h2>Craftsmanship in Motion</h2>
            <p>See how we bring your designs to life.</p>
          </div>
          <div className="sandria-videos-grid">
            <div className="sandria-video-placeholder">
              <div className="sandria-video-overlay">
                <PlayCircle size={48} color="white" />
                <span>Showcase Video 1</span>
              </div>
            </div>
            <div className="sandria-video-placeholder">
              <div className="sandria-video-overlay">
                <PlayCircle size={48} color="white" />
                <span>Showcase Video 2</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sandria-section sandria-about-bg">
        <div className="sandria-container sandria-about-grid">
          <div className="sandria-about-image">
            <img src="/assets/custom_premium.png" alt="Luxurious Sofa" />
            <div className="sandria-legacy-badge">
              <span>35+</span>
              <span>Years of<br/>Legacy</span>
            </div>
          </div>
          
          <div className="sandria-about-content">
            <h2>At ReCreate Living, we don’t just make sofas — we craft comfort for your everyday life.</h2>
            <p>
              With a legacy of 35+ years under the Palagani name, we combine experience, craftsmanship, and modern design to create sofas that truly fit your home.
            </p>
            <p>
              Every sofa is made to order, designed based on your space, comfort preference, and style. From compact homes to premium living spaces — we build what suits you best.
            </p>
            <br/>
            <a
              href={whatsappLink('Hi, I have a custom furniture requirement. Can we discuss?')}
              target="_blank"
              rel="noreferrer"
              className="sandria-btn sandria-btn-whatsapp"
            >
              Discuss a Custom Project
            </a>
          </div>
        </div>
      </section>

      {/* Custom Enquiry */}
      <section className="sandria-section">
        <div className="sandria-container">
          <div className="sandria-wa-cta">
            <h2>Looking for a custom sofa?</h2>
            <p>Send your design on WhatsApp — we’ll build it for you.</p>
            <p className="sandria-response-time">⏱️ We will respond within 10–15 minutes on WhatsApp</p>
            <a
              href={whatsappLink('Hi! I want to share some reference images for a sofa I need.')}
              target="_blank"
              rel="noreferrer"
              className="sandria-btn sandria-btn-whatsapp"
              style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}
            >
              <MessageCircle size={24} />
              Message Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="sandria-section" style={{ background: '#f8fafc' }}>
        <div className="sandria-container">
          <div className="sandria-section-head">
            <h2>What Our Customers Say</h2>
            <p>Don't just take our word for it. Here's what families across our region think about their ReCreate Living furniture.</p>
          </div>
          
          <div className="sandria-reviews">
            {REVIEWS.map((review, idx) => (
              <div key={idx} className="sandria-review-card">
                <div className="sandria-stars">
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                  <Star fill="currentColor" size={18} />
                </div>
                <p className="sandria-review-text">"{review.text}"</p>
                <div className="sandria-reviewer">
                  <h4>{review.name}</h4>
                  <span>{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="sandria-section">
        <div className="sandria-container">
          <div className="sandria-section-head">
            <h2>Visit Our Studio</h2>
            <p>Experience our craftsmanship firsthand at our showroom.</p>
          </div>
          <div className="sandria-location">
            <div className="sandria-address">
              <h3>ReCreate Living Studio</h3>
              
              <div className="sandria-address-item">
                <MapPin size={24} />
                <div>
                  <strong>Our Exact Location</strong>
                  <p>12-456, Beside Andhra Bank,<br/>Tadepalli, Vijayawada Region,<br/>Andhra Pradesh 522501</p>
                </div>
              </div>
              
              <div className="sandria-address-item">
                <Phone size={24} />
                <div>
                  <strong>Contact Numbers</strong>
                  <p>{CONTACT_PHONE}</p>
                </div>
              </div>
              
              <br/>
              <a 
                href="https://maps.app.goo.gl/YourExactLink" 
                target="_blank" 
                rel="noreferrer"
                className="sandria-btn sandria-btn-outline" 
                style={{ borderColor: 'var(--gold-500)', color: 'var(--gold-500)', alignSelf: 'flex-start' }}
              >
                <MapPin size={18} /> Get Directions
              </a>
            </div>
            
            <div className="sandria-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122410.15545041076!2d80.55171739504547!3d16.510165039230554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4f0260!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Shop Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sandria-footer">
        <div className="sandria-container">
          <div className="sandria-footer-top">
            <div className="sandria-footer-brand">
              <img src="/assets/full_logo_gold.png" alt="ReCreate Living" className="sandria-logo-img" />
              <p className="sandria-footer-tagline">Crafted for Comfort & The Palagani Legacy</p>
            </div>
            
            <div className="sandria-social">
              <a href="#" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>
          
          <div className="sandria-footer-bottom">
            <p>&copy; 2026 ReCreate Living. 35+ Years Palagani Legacy.</p>
            <p>Handcrafted in India with ❤️</p>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        href={whatsappLink('Hi, I am visiting your website and need some help.')}
        target="_blank"
        rel="noreferrer"
        className="sandria-float-wa"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle fill="white" size={32} />
      </a>
    </div>
  );
}
