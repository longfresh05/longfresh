/**
 * Long Fresh - Main JavaScript File
 * Handles smooth scrolling, form submissions, and interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===========================
    // Smooth Scroll for Anchor Links
    // ===========================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    
    // ===========================
    // Distributor Form Handling
    // ===========================
    const distributorForm = document.getElementById('distributor-form');
    const distributorSuccess = document.getElementById('distributor-success');
    
    if (distributorForm) {
        distributorForm.addEventListener('submit', function(e) {
            // If using a form service like Formspree, this will handle it automatically
            // If you want custom handling, uncomment below and comment out the default submission
            
            /*
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            
            // Here you can send to your backend or form service
            // Example with fetch:
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show success message
                distributorSuccess.classList.remove('hidden');
                this.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    distributorSuccess.classList.add('hidden');
                }, 5000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to submit form. Please try again.');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
            */
        });
    }

    
    // ===========================
    // Contact Form Handling
    // ===========================
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // If using a form service like Formspree, this will handle it automatically
            // If you want custom handling, uncomment below and comment out the default submission
            
            /*
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            
            // Here you can send to your backend or form service
            // Example with fetch:
            fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show success message
                contactSuccess.classList.remove('hidden');
                this.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    contactSuccess.classList.add('hidden');
                }, 5000);
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to send message. Please try again.');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
            */
        });
    }

    
    // ===========================
    // Form Validation Enhancement
    // ===========================
    const allForms = document.querySelectorAll('form');
    
    allForms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            // Add real-time validation
            input.addEventListener('blur', function() {
                if (!this.value.trim()) {
                    this.classList.add('border-red-500');
                } else {
                    this.classList.remove('border-red-500');
                }
            });
            
            // Remove error on input
            input.addEventListener('input', function() {
                this.classList.remove('border-red-500');
            });
        });
    });

    
    // ===========================
    // Phone Number Formatting (Optional)
    // ===========================
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            // Remove non-numeric characters
            let value = e.target.value.replace(/\D/g, '');
            
            // Format as +91 XXXXX XXXXX
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            
            if (value.length > 5) {
                value = value.slice(0, 5) + ' ' + value.slice(5);
            }
            
            if (value && !value.startsWith('+91')) {
                value = '+91 ' + value;
            }
            
            e.target.value = value;
        });
    });

    
    // ===========================
    // Scroll Animation (Fade in on scroll)
    // ===========================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    
    // ===========================
    // Navigation Active State
    // ===========================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    
    // ===========================
    // Back to Top Button (Optional)
    // ===========================
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    
    // ===========================
    // Lazy Loading Images (Optional)
    // ===========================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    
    // ===========================
    // Console Welcome Message
    // ===========================
    console.log('%cLong Fresh 🍃', 'color: #FF8C00; font-size: 24px; font-weight: bold;');
    console.log('%cIndia\'s 1st Flavoured Clove Mouth Freshener', 'color: #4CAF50; font-size: 14px;');
    console.log('Website: https://longfresh.com');
    console.log('Email: longfresh05@gmail.com');
    
});


// ===========================
// Utility Functions
// ===========================

/**
 * Show success message
 * @param {string} elementId - ID of the element to show
 * @param {number} duration - Duration to show in milliseconds
 */
function showSuccessMessage(elementId, duration = 5000) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove('hidden');
        setTimeout(() => {
            element.classList.add('hidden');
        }, duration);
    }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Validate phone number (Indian format)
 * @param {string} phone - Phone number to validate
 * @returns {boolean} - True if valid
 */
function isValidPhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone.replace(/\s/g, ''));
}

/**
 * Format currency (Indian Rupees)
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR'
    }).format(amount);
}

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


// ===========================
// Export functions for global use (if needed)
// ===========================
window.LongFresh = {
    showSuccessMessage,
    isValidEmail,
    isValidPhone,
    formatCurrency,
    debounce
};
