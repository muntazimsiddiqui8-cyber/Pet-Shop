// Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handler
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
        });

        // Pet card interactions
        document.querySelectorAll('.pet-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Donation button interactions
        document.querySelectorAll('.donation-card .btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const amount = this.textContent.match(/\$\d+/);
                if (amount) {
                    alert(`Thank you for your ${amount[0]} donation! Redirecting to payment...`);
                }
            });
        });

        // Custom donation handler
        document.querySelector('.donation-form .btn').addEventListener('click', function() {
            const input = document.querySelector('.donation-form input');
            const amount = input.value;
            if (amount && amount > 0) {
                alert(`Thank you for your $${amount} donation! Redirecting to payment...`);
                input.value = '';
            } else {
                alert('Please enter a valid donation amount.');
            }
        });

        // Search functionality
        document.querySelector('.search-filters .btn').addEventListener('click', function() {
            const petType = document.querySelector('.search-filters select:nth-child(1)').value;
            const age = document.querySelector('.search-filters select:nth-child(2)').value;
            const size = document.querySelector('.search-filters select:nth-child(3)').value;
            
            alert(`Searching for: ${petType}, Age: ${age}, Size: ${size}`);
        });

        // Add scroll effect to navbar
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            } else {
                navbar.style.background = 'white';
                navbar.style.backdropFilter = 'none';
            }
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections for animation
        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });