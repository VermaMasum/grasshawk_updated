// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import LanguageToggle from "./LanguageToggle";
// // import "./Navbar.css";

// // // Simple SVG icons to replace lucide-react
// // const MenuIcon = () => (
// //   <svg
// //     className="mobile-menu-icon"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //   >
// //     <line x1="3" y1="12" x2="21" y2="12"></line>
// //     <line x1="3" y1="6" x2="21" y2="6"></line>
// //     <line x1="3" y1="18" x2="21" y2="18"></line>
// //   </svg>
// // );

// // const XIcon = () => (
// //   <svg
// //     className="mobile-menu-icon"
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="2"
// //   >
// //     <line x1="18" y1="6" x2="6" y2="18"></line>
// //     <line x1="6" y1="6" x2="18" y2="18"></line>
// //   </svg>
// // );

// // const Navbar = ({ language, setLanguage }) => {
// //   const [menuVisible, setMenuVisible] = useState(false);

// //   const navItems = [
// //     { id: 1, label: language === "fr" ? "Accueil" : "Home", route: "/" },
// //     { id: 2, label: language === "fr" ? "À propos" : "About", route: "/about" },
// //     {
// //       id: 3,
// //       label: language === "fr" ? "Product" : "Product",
// //       route: "/Product",
// //     },
// //     {
// //       id: 4,
// //       label: language === "fr" ? "Contact" : "Contact",
// //       route: "/contact",
// //     },
// //   ];

// //   const toggleMenu = () => {
// //     setMenuVisible((prev) => !prev);
// //   };

// //   return (
// //     <header className="navbar">
// //       <div className="navbar-container">
// //         {/* Logo Section */}
// //         <Link to="/" className="navbar-logo">
// //           GrassHawk
// //         </Link>

// //         {/* Desktop Navigation */}
// //         <nav className="navbar-nav">
// //           {navItems.map((item) => (
// //             <Link key={item.id} to={item.route} className="navbar-link">
// //               {item.label}
// //             </Link>
// //           ))}
// //           <div className="language-toggle-container">
// //             <LanguageToggle language={language} setLanguage={setLanguage} />
// //           </div>
// //         </nav>

// //         {/* Mobile Menu Toggle */}
// //         <button onClick={toggleMenu} className="mobile-menu-toggle">
// //           {menuVisible ? <XIcon /> : <MenuIcon />}
// //         </button>
// //       </div>

// //       {/* Mobile Dropdown Menu */}
// //       <div className={`mobile-menu ${menuVisible ? "active" : ""}`}>
// //         <nav className="mobile-nav">
// //           {navItems.map((item) => (
// //             <Link
// //               key={item.id}
// //               to={item.route}
// //               onClick={() => setMenuVisible(false)}
// //               className="mobile-nav-link"
// //             >
// //               {item.label}
// //             </Link>
// //           ))}
// //           <div className="mobile-language-toggle">
// //             <LanguageToggle language={language} setLanguage={setLanguage} />
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import LanguageToggle from "./LanguageToggle";
// import "./Navbar.css";

// // Simple SVG icons to replace lucide-react
// const MenuIcon = () => (
//   <svg
//     className="mobile-menu-icon"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <line x1="3" y1="12" x2="21" y2="12"></line>
//     <line x1="3" y1="6" x2="21" y2="6"></line>
//     <line x1="3" y1="18" x2="21" y2="18"></line>
//   </svg>
// );

// const XIcon = () => (
//   <svg
//     className="mobile-menu-icon"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//   >
//     <line x1="18" y1="6" x2="6" y2="18"></line>
//     <line x1="6" y1="6" x2="18" y2="18"></line>
//   </svg>
// );

// const Navbar = ({ language, setLanguage }) => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const navItems = [
//     { id: 1, label: language === "fr" ? "Accueil" : "Home", route: "/" },
//     { id: 2, label: language === "fr" ? "À propos" : "About", route: "/about" },
//     {
//       id: 3,
//       label: language === "fr" ? "Produits" : "Products",
//       route: "/mole-trap", // Link to the new mole trap product page
//     },
//     {
//       id: 4,
//       label: language === "fr" ? "Contact" : "Contact",
//       route: "/contact",
//     },
//   ];

//   const toggleMenu = () => {
//     setMenuVisible((prev) => !prev);
//   };

//   return (
//     <header className="navbar">
//       <div className="navbar-container">
//         {/* Logo Section */}
//         <Link to="/" className="navbar-logo">
//           GrassHawk
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="navbar-nav">
//           {navItems.map((item) => (
//             <Link key={item.id} to={item.route} className="navbar-link">
//               {item.label}
//             </Link>
//           ))}
//           <div className="language-toggle-container">
//             <LanguageToggle language={language} setLanguage={setLanguage} />
//           </div>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <button onClick={toggleMenu} className="mobile-menu-toggle">
//           {menuVisible ? <XIcon /> : <MenuIcon />}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div className={`mobile-menu ${menuVisible ? "active" : ""}`}>
//         <nav className="mobile-nav">
//           {navItems.map((item) => (
//             <Link
//               key={item.id}
//               to={item.route}
//               onClick={() => setMenuVisible(false)}
//               className="mobile-nav-link"
//             >
//               {item.label}
//             </Link>
//           ))}
//           <div className="mobile-language-toggle">
//             <LanguageToggle language={language} setLanguage={setLanguage} />
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LanguageToggle from "./LanguageToggle";
import logo from "../assets/logo.png";
import logoVibgyor from "../assets/logo_vibgyor.png";
import "./Navbar.css";

// Simple SVG icons
const MenuIcon = () => (
  <svg
    className="mobile-menu-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg
    className="mobile-menu-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// Login Form Component
const LoginForm = ({ onLogin, onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    console.log('Login form submitted with:', { email, password });
    const result = await onLogin(email, password);
    console.log('Login result:', result);
    
    if (!result.success) {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <p className="toggle-link">
        Don't have an account?{' '}
        <button type="button" onClick={onSwitchToRegister} className="link-btn">
          Register here
        </button>
      </p>
    </form>
  );
};

// Register Form Component
const RegisterForm = ({ onRegister, onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const result = await onRegister({
      name: formData.name,
      email: formData.email,
      password: formData.password
    });
    
    if (!result.success) {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? 'Registering...' : 'Register'}
      </button>
      <p className="toggle-link">
        Already have an account?{' '}
        <button type="button" onClick={onSwitchToLogin} className="link-btn">
          Login here
        </button>
      </p>
    </form>
  );
};

const Navbar = ({ language, setLanguage }) => {
  const [cartCount, setCartCount] = useState(() => {
    // Load cart count from localStorage
    return parseInt(localStorage.getItem('cartCount') || '0');
  });
  const [menuVisible, setMenuVisible] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  // Debug modal state changes
  useEffect(() => {
    console.log('Login modal state changed:', showLoginModal);
  }, [showLoginModal]);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [user, setUser] = useState(() => {
    // Load user from localStorage on component mount
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if user is logged in based on localStorage
    return !!localStorage.getItem('token');
  });

  const navItems = [
    { id: 1, label: language === "fr" ? "Accueil" : "Home", route: "/" },
    { id: 2, label: language === "fr" ? "À propos" : "About", route: "/about" },
    {
      id: 3,
      label: language === "fr" ? "Produits ▾" : "Products ▾",
      route: "/products",
      hasDropdown: true,
      dropdownItems: [
        { label: "Grasshawk Mole Trap", route: "/products?product=grasshawk" },
        { label: "EcoSeed Pro", route: "/products?product=ecoseed" },
        { label: "WinterShield", route: "/products?product=wintershield" },
        { label: "NatureFeed", route: "/products?product=naturefeed" }
      ]
    },
    {
      id: 4,
      label: language === "fr" ? "Certificats et Confiance" : "Certificate and Trust",
      route: "/certificate-trust",
    },
    {
      id: 5,
      label: language === "fr" ? "Témoignages" : "Testimonials",
      route: "/testimonials",
    },
    {
      id: 6,
      label: language === "fr" ? "Contact" : "Contact",
      route: "/contact",
    },
  ];

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  // Authentication functions
  const handleLogin = async (email, password) => {
    try {
      console.log('Attempting login with:', { email, password });
      const response = await fetch('http://localhost:4242/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log('Login response status:', response.status);
      const data = await response.json();
      console.log('Login response data:', data);

      if (response.ok && data.token && data.user) {
        // Store in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setUser(data.user);
        setIsLoggedIn(true);
        setShowLoginModal(false);
        console.log('Login successful, user set:', data.user);
        return { success: true, message: 'Login successful!' };
      } else {
        console.log('Login failed:', data.message);
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const handleRegister = async (userData) => {
    try {
      const response = await fetch('http://localhost:4242/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok && data.token && data.user) {
        // Store in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        setUser(data.user);
        setIsLoggedIn(true);
        setShowRegisterModal(false);
        return { success: true, message: 'Registration successful!' };
      } else {
        return { success: false, message: data.message || 'Registration failed' };
      }
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await fetch('http://localhost:4242/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  // Check if user is logged in on component mount
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with backend
      fetch('http://localhost:4242/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUser(data.data.user);
          setIsLoggedIn(true);
        } else {
          localStorage.removeItem('token');
        }
      })
      .catch(error => {
        console.error('Auth check failed:', error);
        localStorage.removeItem('token');
      });
    }
  }, []);

  // Listen for cart updates
  React.useEffect(() => {
    const handleCartUpdate = (event) => {
      setCartCount(event.detail.count);
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  // Close profile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.profile-menu-container')) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-container">
            <div className="navbar-logo-icon">
              <img src={logoVibgyor} alt="VIBGYOR Maple Logo" className="navbar-logo-image" />
            </div>
            <span className="navbar-logo-text">VIBGYOR MAPLE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {navItems.map((item) => (
            <div key={item.id} className="navbar-item-container">
              {item.hasDropdown ? (
                <div 
                  className="navbar-link dropdown-trigger"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                >
                  {item.label}
                  {showProductsDropdown && (
                    <div className="navbar-dropdown">
                      {item.dropdownItems.map((dropdownItem, index) => (
                        <Link 
                          key={index} 
                          to={dropdownItem.route} 
                          className="dropdown-item"
                          onClick={() => setShowProductsDropdown(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.route} className="navbar-link">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          
          {/* Cart Icon */}
          <Link to="/cart-backend" className="navbar-cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="m1 1 4 4 13 0 3 8-13 0"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {/* Profile Icon - Always visible */}
          <div className="profile-menu-container">
            <div className="profile-icon" onClick={() => {
              console.log('Profile icon clicked!');
              setShowProfileMenu(!showProfileMenu);
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            
            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="profile-dropdown">
                {isLoggedIn ? (
                  <>
                    <div className="profile-user-info">
                      <div className="profile-avatar">
                        {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </div>
                      <div className="profile-details">
                        <div className="profile-name">{user?.name || 'User'}</div>
                        <div className="profile-email">{user?.email}</div>
                      </div>
                    </div>
                    <div className="profile-divider"></div>
                    <button onClick={handleLogout} className="profile-menu-item logout-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16,17 21,12 16,7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={() => {
                        console.log('Login button clicked!');
                        setShowLoginModal(true);
                        setShowProfileMenu(false);
                      }} 
                      className="profile-menu-item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                        <polyline points="10,17 15,12 10,7"></polyline>
                        <line x1="15" y1="12" x2="3" y2="12"></line>
                      </svg>
                      Login
                    </button>
                    <button 
                      onClick={() => {
                        setShowRegisterModal(true);
                        setShowProfileMenu(false);
                      }} 
                      className="profile-menu-item"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                      </svg>
                      Register
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="language-toggle-container">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className={`mobile-menu-toggle ${menuVisible ? "active" : ""}`}>
          <div className="hamburger-icon">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`mobile-menu ${menuVisible ? "active" : ""}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.route}
              onClick={() => setMenuVisible(false)}
              className="mobile-nav-link"
            >
              {item.label}
            </Link>
          ))}
          
          {/* Mobile Cart Link */}
          <Link
            to="/cart-backend"
            onClick={() => setMenuVisible(false)}
            className="mobile-nav-link mobile-cart-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="m1 1 4 4 13 0 3 8-13 0"></path>
            </svg>
            Cart {cartCount > 0 && `(${cartCount})`}
          </Link>

          {/* Mobile Profile Section */}
          <div className="mobile-profile-section">
            {isLoggedIn ? (
              <>
                <div className="mobile-user-info">
                  <div className="mobile-user-avatar">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <div className="mobile-user-details">
                    <div className="mobile-user-name">{user?.name || 'User'}</div>
                    <div className="mobile-user-email">{user?.email}</div>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    handleLogout();
                    setMenuVisible(false);
                  }} 
                  className="mobile-nav-link mobile-logout-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16,17 21,12 16,7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => {
                    setShowLoginModal(true);
                    setMenuVisible(false);
                  }} 
                  className="mobile-nav-link mobile-auth-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10,17 15,12 10,7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  Login
                </button>
                <button 
                  onClick={() => {
                    setShowRegisterModal(true);
                    setMenuVisible(false);
                  }} 
                  className="mobile-nav-link mobile-auth-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                  Register
                </button>
              </>
            )}
          </div>

          <div className="mobile-language-toggle">
            <LanguageToggle language={language} setLanguage={setLanguage} />
          </div>
        </nav>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Login</h2>
              <button 
                className="modal-close" 
                onClick={() => setShowLoginModal(false)}
              >
                ×
              </button>
            </div>
            <LoginForm 
              onLogin={handleLogin}
              onClose={() => setShowLoginModal(false)}
              onSwitchToRegister={() => {
                setShowLoginModal(false);
                setShowRegisterModal(true);
              }}
            />
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className="modal-overlay" onClick={() => setShowRegisterModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Register</h2>
              <button 
                className="modal-close" 
                onClick={() => setShowRegisterModal(false)}
              >
                ×
              </button>
            </div>
            <RegisterForm 
              onRegister={handleRegister}
              onClose={() => setShowRegisterModal(false)}
              onSwitchToLogin={() => {
                setShowRegisterModal(false);
                setShowLoginModal(true);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
