import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  Wrench,
  Settings,
  Star,
  CheckCircle,
  Calendar,
  Search,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
  Menu,
  Waves,
  Wind,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { translations } from './translations';
import heroImg from './assets/hero.png';

const Navbar = ({ lang, setLang, t }) => {
  return (
    <header>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Settings className="logo-icon" />
          <span>QuickFix Repairs</span>
        </Link>
        <nav className="nav-links">
          <a href="#services">{t.nav_services}</a>
          <a href="#how-it-works">{t.nav_how_it_works}</a>
          <a href="#reviews">{t.nav_reviews}</a>
          <Link to="/contact">{t.nav_contact}</Link>
        </nav>
        <div className="header-actions">
          <button className="lang-toggle" onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}>
            {lang === 'ar' ? 'English' : 'العربية'}
          </button>
          <button className="btn-primary">{t.btn_book_now}</button>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ t }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="logo">
              <Settings className="logo-icon" />
              <span>QuickFix Repairs</span>
            </div>
            <p>{t.footer_desc}</p>
            <div className="footer-socials">
              <a href="#" className="social-icon"><Instagram size={18} /></a>
              <a href="#" className="social-icon"><Facebook size={18} /></a>
              <a href="#" className="social-icon"><Twitter size={18} /></a>
            </div>
          </div>
          <div className="footer-column">
            <h4>{t.contact_title}</h4>
            <ul className="footer-contact">
              <li><Phone size={16} /> {t.footer_phone}</li>
              <li><Mail size={16} /> {t.footer_email}</li>
              <li><MapPin size={16} /> {t.footer_address}</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t.hours_title}</h4>
            <ul className="footer-hours">
              <li>{t.hours_mon_fri}</li>
              <li>{t.hours_sat}</li>
              <li>{t.hours_sun}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 QuickFix Repairs. {t.rights_reserved}</p>
        </div>
      </div>
    </footer>
  );
};

const Home = ({ t }) => {
  return (
    <main>
      {/* Hero */}
      <section className="container hero">
        <div className="hero-content">
          <h1 className="hero-heading">{t.hero_heading}</h1>
          <p className="hero-subheading">{t.hero_subheading}</p>
          <div className="hero-action-simple">
            <a href={`tel:${t.footer_phone}`} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', width: 'auto', textDecoration: 'none' }}>
              <Phone size={20} />
              <span>{t.btn_call_now}</span>
            </a>
          </div>
          <div className="hero-badges">
            <div className="badge">
              <CheckCircle className="badge-icon" />
              {t.badge_no_hidden_fees}
            </div>
            <div className="badge">
              <CheckCircle className="badge-icon" />
              {t.badge_certified_pros}
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Technician repairing washing machine" />
        </div>
      </section>

      {/* Stats */}
      <section className="container stats">
        <div className="stat-card">
          <p className="stat-label">{t.stat_technicians_label}</p>
          <p className="stat-value">{t.stat_technicians_value}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">{t.stat_warranty_label}</p>
          <p className="stat-value">{t.stat_warranty_value}</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">{t.stat_rating_label}</p>
          <p className="stat-value">
            {t.stat_rating_value.split(' ')[0]} <span>★</span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container services-section">
        <div className="section-header">
          <h2>{t.services_title}</h2>
          <p>{t.services_subtitle}</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon-wrapper"><Waves /></div>
            <h3>{t.service_washing_machines_title}</h3>
            <p>{t.service_washing_machines_desc}</p>
            <a href="#" className="learn-more">{t.learn_more} <ArrowRight size={16} /></a>
          </div>
          <div className="service-card">
            <div className="service-icon-wrapper"><MessageSquare /></div>
            <h3>{t.service_dishwashers_title}</h3>
            <p>{t.service_dishwashers_desc}</p>
            <a href="#" className="learn-more">{t.learn_more} <ArrowRight size={16} /></a>
          </div>
          <div className="service-card">
            <div className="service-icon-wrapper"><Wind /></div>
            <h3>{t.service_dryers_title}</h3>
            <p>{t.service_dryers_desc}</p>
            <a href="#" className="learn-more">{t.learn_more} <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container how-it-works">
        <div className="section-header">
          <h2>{t.how_it_works_title}</h2>
          <p>{t.how_it_works_subtitle}</p>
        </div>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon-wrapper"><Phone /></div>
            <h3>{t.step_1_title}</h3>
            <p>{t.step_1_desc}</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrapper"><Search /></div>
            <h3>{t.step_2_title}</h3>
            <p>{t.step_2_desc}</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrapper"><ShieldCheck /></div>
            <h3>{t.step_3_title}</h3>
            <p>{t.step_3_desc}</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="container testimonials">
        <div className="section-header">
          <h2>{t.testimonials_title}</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t.testimonial_1}</p>
            <div className="user-info">
              <div className="user-avatar">SJ</div>
              <span>Sarah Jenkins</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t.testimonial_2}</p>
            <div className="user-info">
              <div className="user-avatar">MR</div>
              <span>Mike Ross</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">{t.testimonial_3}</p>
            <div className="user-info">
              <div className="user-avatar">EL</div>
              <span>Emily Larson</span>
            </div>
          </div>
        </div>
      </section>

      <a href="tel:5551234567" className="floating-call">
        <Phone size={20} />
        <span>Call Now</span>
      </a>
    </main>
  );
};

const Contact = ({ t }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container contact-page">
      <div className="section-header">
        <h2>{t.contact_us_heading}</h2>
        <p>{t.contact_us_subheading}</p>
      </div>
      <div className="contact-layout">
        <div className="contact-form">
          {submitted ? (
            <div className="form-success-msg">
              {t.form_success}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>{t.form_name}</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>{t.form_email}</label>
                <input type="email" required />
              </div>
              <div className="form-group">
                <label>{t.form_phone}</label>
                <input type="tel" required />
              </div>
              <div className="form-group">
                <label>{t.form_message}</label>
                <textarea rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                {t.form_submit}
              </button>
            </form>
          )}
        </div>
        <div className="contact-info">
          <div className="footer-column">
            <h4>{t.contact_title}</h4>
            <ul className="footer-contact">
              <li><Phone size={20} /> {t.footer_phone}</li>
              <li><Mail size={20} /> {t.footer_email}</li>
              <li><MapPin size={20} /> {t.footer_address}</li>
            </ul>
          </div>
          <div className="footer-column" style={{ marginTop: '2rem' }}>
            <h4>{t.hours_title}</h4>
            <ul className="footer-hours">
              <li>{t.hours_mon_fri}</li>
              <li>{t.hours_sat}</li>
              <li>{t.hours_sun}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
      </Routes>
      <Footer t={t} />
    </Router>
  );
};

export default App;
