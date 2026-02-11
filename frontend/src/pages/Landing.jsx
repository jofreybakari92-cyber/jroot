import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/style/images/idurar-crm-erp.svg';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: '📊', title: 'Dashboard & Analytics', desc: 'Real-time insights and customizable dashboards' },
    { icon: '💰', title: 'Invoicing & Payments', desc: 'Create professional invoices and manage payments' },
    { icon: '👥', title: 'Customer Management', desc: 'Complete CRM to manage leads and contacts' },
    { icon: '📝', title: 'Quote Management', desc: 'Generate and convert quotes to invoices' },
    { icon: '🔒', title: 'Secure & Private', desc: 'Encrypted data with role-based access control' },
    { icon: '🌐', title: 'Multi-Language', desc: 'Support for multiple languages' }
  ];

  const testimonials = [
    { name: 'John Smith', role: 'CEO', company: 'TechCorp', quote: 'IDURAR has transformed how we manage our business. Saved us hours every week!', rating: 5 },
    { name: 'Sarah Johnson', role: 'Operations Manager', company: 'Global Solutions', quote: 'Open-source and customizable. Best decision we made!', rating: 5 },
    { name: 'Michael Brown', role: 'Founder', company: 'StartupXYZ', quote: 'Incredible value. Our sales increased by 40% in 3 months!', rating: 5 }
  ];

  const pricing = [
    { title: 'Starter', price: '$0', features: ['Up to 5 users', 'Basic CRM', 'Invoicing', 'Email support'] },
    { title: 'Professional', price: '$29', popular: true, features: ['Up to 25 users', 'All CRM features', 'Advanced invoicing', 'Priority support', 'API access'] },
    { title: 'Enterprise', price: '$99', features: ['Unlimited users', 'Dedicated support', 'Custom integrations', 'SLA guarantee'] }
  ];

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      {/* Animated Background */}
      <div className="landing-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        {/* Animated Logo */}
        <div className="animated-logo">
          <img src={logo} alt="IDURAR" className="logo-bg" />
        </div>
        <div className="animated-logo logo-2">
          <img src={logo} alt="IDURAR" className="logo-bg" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <span className="logo-icon">➤</span>
            <span className="logo-text">IDURAR</span>
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <div key={link.name} className="nav-link-wrapper">
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="nav-link"
                >
                  {link.name}
                </a>
                <div className="nav-link-underline"></div>
              </div>
            ))}
          </div>

          <div className="navbar-buttons">
            <Link to="/login" className="navbar-button-outline">
              Log in
            </Link>
            <Link to="/login" className="navbar-button">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Open Source ERP & CRM<br />
            <span className="gradient-text">All-in-One Business Solution</span>
          </h1>
          <p className="hero-subtitle">
            Streamline your business operations with our powerful, free, and open-source
            ERP & CRM platform. Built with modern technologies for maximum performance.
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="btn btn-primary btn-lg">Start Free Trial →</Link>
            <Link to="/login" className="btn btn-outline btn-lg">Learn More</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><h2>500+</h2><p>Active Users</p></div>
            <div className="stat"><h2>10K+</h2><p>Invoices</p></div>
            <div className="stat"><h2>99.9%</h2><p>Uptime</p></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to manage your business</p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">Trusted by businesses around the world</p>
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-card">
                <div className="rating">{'⭐'.repeat(item.rating)}</div>
                <p className="quote">&quot;{item.quote}&quot;</p>
                <div className="author">
                  <strong>{item.name}</strong>
                  <span>{item.role} at {item.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">Choose the plan that fits your business</p>
          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <span className="badge">Most Popular</span>}
                <h3>{plan.title}</h3>
                <div className="price"><span>{plan.price}</span><small>/month</small></div>
                <ul>
                  {plan.features.map((feat, i) => (
                    <li key={i}>✓ {feat}</li>
                  ))}
                </ul>
                <Link to="/login" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Get in Touch</h2>
            <p>Have questions? We&apos;d love to hear from you.</p>
            <div className="contact-info">
              <p>📧 Email: support@idurar.com</p>
              <p>🌐 Website: www.idurar.com</p>
              <p>💼 GitHub: github.com/idurar</p>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <Link to="/login" className="btn btn-primary">Send Message</Link>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>IDURAR</h3>
              <p>Open Source ERP & CRM for modern businesses.</p>
            </div>
            <div className="footer-links">
              <div><h4>Product</h4><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('#features'); }}>Features</a><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('#pricing'); }}>Pricing</a></div>
              <div><h4>Company</h4><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>About</a><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a></div>
              <div><h4>Legal</h4><a href="#">Privacy</a><a href="#">Terms</a></div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 IDURAR. Open Source ERP & CRM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
