// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile Menu Toggle
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');
    
//     if (menuToggle && navLinks) {
//         menuToggle.addEventListener('click', function() {
//             navLinks.classList.toggle('active');
//             const icon = menuToggle.querySelector('i');
//             if (icon) {
//                 icon.classList.toggle('fa-times');
//                 icon.classList.toggle('fa-bars');
//             }
//         });
//     }
    
//     // Close mobile menu when clicking on a link
//     const navLinksAll = document.querySelectorAll('.nav-links a');
//     navLinksAll.forEach(link => {
//         link.addEventListener('click', () => {
//             if (navLinks) navLinks.classList.remove('active');
//             const icon = menuToggle?.querySelector('i');
//             if (icon) {
//                 icon.classList.remove('fa-times');
//                 icon.classList.add('fa-bars');
//             }
//         });
//     });
    
//     // Header scroll effect
//     const header = document.querySelector('header');
//     if (header) {
//         window.addEventListener('scroll', function() {
//             header.classList.toggle('scrolled', window.scrollY > 50);
//         });
//     }
    
//     // Smooth scrolling for anchor links
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const targetId = this.getAttribute('href');
//             if (targetId === '#') return;
            
//             const targetElement = document.querySelector(targetId);
            
//             if (targetElement) {
//                 const headerHeight = document.querySelector('header')?.offsetHeight || 80;
//                 window.scrollTo({
//                     top: targetElement.offsetTop - headerHeight,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
    
//     // Project filtering
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const projectCards = document.querySelectorAll('.project-card');
    
//     if (filterButtons.length && projectCards.length) {
//         filterButtons.forEach(button => {
//             button.addEventListener('click', function() {
//                 // Remove active class from all buttons
//                 filterButtons.forEach(btn => btn.classList.remove('active'));
                
//                 // Add active class to clicked button
//                 this.classList.add('active');
                
//                 const filterValue = this.getAttribute('data-filter');
                
//                 projectCards.forEach(card => {
//                     if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
//                         card.style.display = 'block';
//                     } else {
//                         card.style.display = 'none';
//                     }
//                 });
//             });
//         });
//     }
    
//     // Animate elements when scrolling
//     const animateOnScroll = function() {
//         const elements = document.querySelectorAll('.skill-category, .project-card, .about-image, .about-text, .contact-info, .contact-form');
        
//         elements.forEach(element => {
//             const elementPosition = element.getBoundingClientRect().top;
//             const windowHeight = window.innerHeight;
            
//             if (elementPosition < windowHeight - 100) {
//                 element.style.opacity = '1';
//                 element.style.transform = 'translateY(0)';
//             }
//         });
//     };
    
//     // Set initial state for animated elements
//     const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-image, .about-text, .contact-info, .contact-form');
//     animatedElements.forEach(element => {
//         element.style.opacity = '0';
//         element.style.transform = 'translateY(50px)';
//         element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
//     });
    
//     // Run animation on load and scroll
//     window.addEventListener('load', animateOnScroll);
//     window.addEventListener('scroll', animateOnScroll);
    
//     // Form submission
//     const contactForm = document.querySelector('.contact-form form');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             // Here you would typically add form submission logic
//             alert('Form submitted! (This is a demo)');
//             this.reset();
//         });
//     }
// });