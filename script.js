(function() {
    'use strict';

    // ----- DATA -----
    const cars = [
        { id:1, make:'Toyota', model:'Land Cruiser', year:2010, fuel:'Diesel', mileage:'211 376 km', transmission:'Manual', displacement:'4.0', type:'Bakkie/ Pick-up', images:['images/lc79/tlc1.jpeg','images/lc79/tlc2.jpeg','images/lc79/tlc3.jpeg','images/lc79/tlc4.jpeg'], price:'N$ 400,000', description:'Robust and reliable pickup, perfect for work and off-road adventure.' },
        { id:2, make:'BMW', model:'135i', year:2022, fuel:'Petrol', mileage:'63 873 km', transmission:'Automatic', displacement:'3.0', type:'Hatchback', images:['images/135m/b11.jpeg','images/135m/b12.jpeg','images/135m/b13.jpeg','images/135m/b14.jpeg','images/135m/b15.jpeg','images/135m/b16.jpeg','images/135m/b17.jpeg'], price:'N$ 679,000', description:'High-performance luxury compact with sharp handling and turbocharged power.' },
        { id:3, make:'Mercedes-Benz', model:'C-Class', year:2018, fuel:'Petrol', mileage:'114 641 km', transmission:'Automatic', displacement:'2.0', type:'sedan', images:['images/c250/mbc1.jpeg','images/c250/mbc2.jpeg','images/c250/mbc3.jpeg','images/c250/mb4.jpeg'], price:'N$ 340,000', description:'Luxury and performance combined with state-of-the-art technology.' },
        { id:4, make:'Isuzu', model:'D-Max', year:2014, fuel:'Diesel', mileage:'120 000 km', transmission:'Automatic', displacement:'1.9', type:'Bakkie/ Pick-up', images:['images/dmax/id1.jpeg','images/dmax/id2.jpeg','images/dmax/id3.jpeg','images/dmax/id4.jpeg','images/dmax/id5.jpeg'], price:'N$ 469,000', description:'Durable and fuel-efficient bakkie built for work and gravel roads.' },
        { id:5, make:'Volkswagen', model:'Golf R', year:2014, fuel:'Petrol', mileage:'65 297 km', transmission:'Automatic', displacement:'2.0', type:'Hatchback', images:['images/golfr/vwg7r1.jpeg','images/golfr/vwg7r2.jpeg','images/golfr/vwg7r3.jpeg','images/golfr/vwg7r4.jpeg','images/golfr/vwg7r5.jpeg'], price:'N$ 299,000', description:'Ultimate hot hatch with 4Motion all-wheel drive and iconic exhaust note.' },
        { id:6, make:'Volkswagen', model:'Polo', year:2022, fuel:'Petrol', mileage:'16 281 km', transmission:'Automatic', displacement:'1.0', type:'Hatchback', images:['images/polo/vwp1.jpeg','images/polo/vwp2.jpeg','images/polo/vwp3.jpeg','images/polo/vwp4.jpeg'], price:'N$ 315,000', description:'Modern stylish hatchback with excellent fuel economy and agile handling.' },
        { id:7, make:'Land Rover', model:'Range Rover Velar', year:2019, fuel:'Petrol', mileage:'93 054 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/velar/rrv1.jpeg','images/velar/rrv2.jpeg','images/velar/rrv3.jpeg','images/velar/rrv4.jpeg'], price:'N$ 679,000', description:'Avant-garde luxury SUV with striking design and supreme off-road capability.' },
        { id:8, make:'Mercedes-Benz', model:'GLA', year:2018, fuel:'Petrol', mileage:'107 726 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/gla/mbgla1.jpg','images/gla/mbgla2.jpg','images/gla/mbgla3.jpg','images/gla/mbgla4.jpg'], price:'N$ 310,000', description:'Sporty crossover with compact agility and Mercedes refinement.' },
        { id:9, make:'Mercedes-Benz', model:'GLC', year:2016, fuel:'Petrol', mileage:'113 000 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/glc/mbglc1.jpeg','images/glc/mbglc2.jpeg','images/glc/mbglc3.jpeg','images/glc/mbglc4.jpeg'], price:'N$ 299,000', description:'Spacious mid-size luxury SUV with top-tier safety engineering.' },
        { id:10, make:'Volkswagen', model:'Golf 7.5 tsi', year:2017, fuel:'Petrol', mileage:'57 000 km', transmission:'Automatic', displacement:'1.4', type:'Hatchback', images:['images/golftsi/vwgt1.jpeg','images/golftsi/vwgt2.jpeg','images/golftsi/vwgt3.jpeg','images/golftsi/vwgt4.jpeg'], price:'N$ 199,000', description:'Refined facelifted Golf TSI balancing efficiency and punchy performance.' },
        { id:11, make:'Haval', model:'Jolion', year:2017, fuel:'Petrol', mileage:'90 702 km', transmission:'Automatic', displacement:'1.5', type:'SUV', images:['images/jolion/hj1.jpeg','images/jolion/hj2.jpeg','images/jolion/hj3.jpeg','images/jolion/hj4.jpeg'], price:'N$ 269,000', description:'Feature-packed compact SUV with modern styling and generous space.' },
        { id:12, make:'Mini Cooper', model:'S', year:2017, fuel:'Petrol', mileage:'70 598 km', transmission:'Automatic', displacement:'2.0', type:'Hatchback', images:['images/miniCooper/mc1.jpeg','images/miniCooper/mc2.jpeg','images/miniCooper/mc3.jpeg','images/miniCooper/mc4.jpeg'], price:'N$ 175,000', description:'Iconic go-kart handling with spirited turbocharged engine.' },
        { id:13, make:'Mini Cooper', model:'JCW', year:2016, fuel:'Petrol', mileage:'48 600 km', transmission:'Automatic', displacement:'2.0', type:'Hatchback', images:['images/miniCooperJCW/mcjcw1.jpg','images/miniCooperJCW/mcjcw2.jpg','images/miniCooperJCW/mcjcw3.jpg','images/miniCooperJCW/mcjcw4.jpg'], price:'N$ 299,000', description:'John Cooper Works edition for track-inspired thrills.' },
        { id:14, make:'Audi', model:'Q5', year:2016, fuel:'Diesel', mileage:'44 770 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/q5/aq51.jpeg','images/q5/aq52.jpeg','images/q5/aq53.jpeg','images/q5/aq54.jpeg'], price:'N$ 349,000', description:'Versatile premium diesel SUV with Quattro all-wheel drive.' },
        { id:15, make:'Nissan', model:'Tiida', year:2016, fuel:'Petrol', mileage:'116 000 km', transmission:'Automatic', displacement:'1.5', type:'Hatchback', images:['images/tida/nt1.jpeg','images/tida/nt2.jpeg','images/tida/nt3.jpeg','images/tida/nt4.jpeg','images/tida/nt5.jpeg','images/tida/nt6.jpeg'], price:'N$ 79,000', description:'Affordable, reliable city runner with surprising interior space.' },
        { id:16, make:'Ford', model:'Ranger', year:2019, fuel:'Diesel', mileage:'22 316 km', transmission:'Automatic', displacement:'2.0', type:'Bakkie/ Pick-up', images:['images/ranger/fr1.jpeg','images/ranger/fr2.jpeg','images/ranger/fr3.jpeg','images/ranger/fr4.jpeg'], price:'N$ 399,000', description:'Commanding double-cab bakkie with modern convenience and off-road capability.' },
        { id:17, make:'Volkswagen', model:'Taigo', year:2023, fuel:'Petrol', mileage:'24 001 km', transmission:'Automatic', displacement:'1.0', type:'SUV', images:['images/taigo/vwt1.jpg','images/taigo/vwt2.jpg','images/taigo/vwt3.jpg','images/taigo/vwt4.jpg'], price:'N$ 429,000', description:'Sleek crossover coupe with digital cockpit and outstanding efficiency.' },
        { id:18, make:'Audi', model:'A3', year:2014, fuel:'Petrol', mileage:'67 814 km', transmission:'Automatic', displacement:'1.8', type:'Hatchback', images:['images/a3/aa31.jpeg','images/a3/aa32.jpeg','images/a3/aa33.jpeg','images/a3/aa34.jpeg'], price:'N$ 179,000', description:'Compact executive hatchback with smooth turbo performance.' }
    ];

    const services = [
        { icon:'fas fa-car-crash', title:'Vehicle Inspection', description:'150-point inspection for top quality and safety.' },
        { icon:'fas fa-shield-alt', title:'Warranty & Support', description:'Comprehensive warranty and dedicated after-sales support.' },
        { icon:'fas fa-money-check-alt', title:'Flexible Financing', description:'Competitive rates and tailored financing options.' },
        { icon:'fas fa-tools', title:'Maintenance & Repairs', description:'State-of-the-art service center for all your needs.' }
    ];

    const testimonials = [
        { content:'The transparency and quality at AutoDeals Namibia completely changed my mind. The Hilux is perfect!', author:'Johannes K.', rating:5 },
        { content:'Finding a reliable sedan was my priority, and AutoDeals delivered! My Jetta runs like new.', author:'Maria S.', rating:4 },
        { content:'The variety was impressive, and staff were helpful without being pushy. Drove away with my dream BMW X5.', author:'David L.', rating:5 },
        { content:'Great service and fair prices. Found a fantastic Ford Ranger. Knowledgeable team, will return!', author:'Penda M.', rating:4 }
    ];

    // ----- DOM refs -----
    const carGrid = document.getElementById('carGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const filterTags = document.querySelectorAll('.filter-tag');
    const testimonialSlider = document.getElementById('testimonialSlider');
    const servicesGrid = document.getElementById('servicesGrid');
    const interestSelect = document.getElementById('interest');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    // ----- Helpers -----
    function createCarCard(car) {
        const div = document.createElement('div');
        div.className = 'car-card';
        div.innerHTML = `
            <div class="car-images">
                <img src="${car.images[0]}" alt="${car.make} ${car.model}" loading="lazy">
                <img src="${car.images[1] || car.images[0]}" alt="${car.make} ${car.model}" loading="lazy">
            </div>
            <div class="car-info">
                <h3>${car.make} ${car.model}</h3>
                <div class="car-specs">${car.year} • ${car.fuel} • ${car.transmission}</div>
                <div class="car-description">${car.description}</div>
                <div class="car-price"><strong>${car.price}</strong></div>
                <a href="#contact" class="btn btn-primary inquire-btn" style="width:100%;justify-content:center;"><i class="fas fa-car"></i> Inquire now</a>
            </div>
        `;
        const btn = div.querySelector('.inquire-btn');
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior:'smooth' });
            if (interestSelect) {
                const val = car.make + ' ' + car.model;
                let opt = Array.from(interestSelect.options).find(function(o) { return o.value === val; });
                if (!opt) {
                    opt = document.createElement('option');
                    opt.value = val;
                    opt.textContent = val;
                    interestSelect.appendChild(opt);
                }
                interestSelect.value = val;
            }
        });
        return div;
    }

    function displayCars(filter, type) {
        filter = filter || '';
        type = type || 'all';
        if (!carGrid) return;
        carGrid.innerHTML = '';
        var f = filter.toLowerCase();
        var filtered = cars.filter(function(car) {
            var matchSearch = !f || car.make.toLowerCase().indexOf(f) !== -1 || car.model.toLowerCase().indexOf(f) !== -1 || car.description.toLowerCase().indexOf(f) !== -1;
            var matchType = type === 'all' || car.type === type;
            return matchSearch && matchType;
        });
        if (!filtered.length) {
            carGrid.innerHTML = '<div class="no-results"><i class="fas fa-info-circle" style="font-size:2.4rem;color:var(--accent);margin-bottom:16px;display:block;"></i><p style="font-size:1.1rem;">No vehicles found. Try adjusting your search.</p><button class="btn btn-primary" style="margin-top:16px;" onclick="resetFilters()">Show all cars</button></div>';
            return;
        }
        var frag = document.createDocumentFragment();
        filtered.forEach(function(c) {
            frag.appendChild(createCarCard(c));
        });
        carGrid.appendChild(frag);
    }

    window.resetFilters = function() {
        if (searchInput) searchInput.value = '';
        filterTags.forEach(function(t) { t.classList.remove('active'); });
        var allTag = document.querySelector('.filter-tag[data-filter="all"]');
        if (allTag) allTag.classList.add('active');
        displayCars();
    };

    function handleSearch() {
        var term = searchInput ? searchInput.value.trim() : '';
        var active = document.querySelector('.filter-tag.active');
        var type = active ? active.dataset.filter : 'all';
        displayCars(term, type);
    }

    function initServices() {
        if (!servicesGrid) return;
        servicesGrid.innerHTML = '';
        services.forEach(function(s) {
            var div = document.createElement('div');
            div.className = 'service-card';
            div.innerHTML = '<div class="service-icon"><i class="' + s.icon + '"></i></div><h3>' + s.title + '</h3><p>' + s.description + '</p>';
            servicesGrid.appendChild(div);
        });
    }

    function initTestimonials() {
        if (!testimonialSlider) return;
        testimonialSlider.innerHTML = '';
        testimonials.forEach(function(t) {
            var div = document.createElement('div');
            div.className = 'testimonial';
            var stars = '';
            for (var i = 0; i < t.rating; i++) stars += '<i class="fas fa-star"></i>';
            div.innerHTML = '<div class="testimonial-content">“' + t.content + '”</div><div class="testimonial-author">- ' + t.author + '</div><div class="testimonial-rating">' + stars + '</div>';
            testimonialSlider.appendChild(div);
        });
    }

    function populateInterest() {
        if (!interestSelect) return;
        interestSelect.innerHTML = '<option value="">Select a vehicle</option>';
        cars.forEach(function(c) {
            var opt = document.createElement('option');
            opt.value = c.make + ' ' + c.model;
            opt.textContent = c.make + ' ' + c.model;
            interestSelect.appendChild(opt);
        });
    }

    // ----- Form handlers -----
    function handleFormSubmit(e, type) {
        e.preventDefault();
        var form = e.target;
        var btn = form.querySelector('button[type="submit"]');
        var inputs = form.querySelectorAll('input, textarea, select');
        var valid = true;
        inputs.forEach(function(inp) {
            if (inp.hasAttribute('required') && !inp.value.trim()) {
                inp.style.borderColor = '#c00';
                valid = false;
            } else {
                inp.style.borderColor = '';
            }
        });
        if (!valid) {
            alert('Please fill in all required fields.');
            return;
        }
        if (btn) {
            btn.disabled = true;
            btn.textContent = 'Sending…';
        }
        setTimeout(function() {
            alert('Thank you! Your ' + (type === 'contact' ? 'message' : 'subscription') + ' was sent.');
            form.reset();
            if (btn) {
                btn.disabled = false;
                btn.textContent = type === 'contact' ? 'Send message' : 'Subscribe';
            }
        }, 800);
    }

    // ----- Carousel -----
    function initCarousel() {
        var slides = document.querySelectorAll('.carousel-slide');
        var dots = document.querySelectorAll('.dot');
        var prev = document.querySelector('.prev-btn');
        var next = document.querySelector('.next-btn');
        var index = 0;
        var interval;

        function show(i) {
            slides.forEach(function(s, idx) {
                s.classList.toggle('active', idx === i);
            });
            dots.forEach(function(d, idx) {
                d.classList.toggle('active', idx === i);
            });
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            show(index);
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            show(index);
        }

        function resetAuto() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);
        }

        if (dots.length) {
            dots.forEach(function(d, i) {
                d.addEventListener('click', function() {
                    index = i;
                    show(index);
                    resetAuto();
                });
            });
        }
        if (prev) {
            prev.addEventListener('click', function() {
                prevSlide();
                resetAuto();
            });
        }
        if (next) {
            next.addEventListener('click', function() {
                nextSlide();
                resetAuto();
            });
        }
        show(0);
        resetAuto();

        var hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', function() { clearInterval(interval); });
            hero.addEventListener('mouseleave', resetAuto);
        }
    }

    // ----- Mobile menu -----
    function toggleMenu() {
        var isOpen = mainNav.classList.toggle('active');
        mobileBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        mobileBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // ----- Init -----
    function init() {
        displayCars();
        initServices();
        initTestimonials();
        populateInterest();
        initCarousel();

        if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
        if (searchBtn) searchBtn.addEventListener('click', handleSearch);
        if (searchInput) {
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') handleSearch();
            });
        }
        filterTags.forEach(function(tag) {
            tag.addEventListener('click', function() {
                filterTags.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                handleSearch();
            });
        });
        if (contactForm) contactForm.addEventListener('submit', function(e) { handleFormSubmit(e, 'contact'); });
        if (newsletterForm) newsletterForm.addEventListener('submit', function(e) { handleFormSubmit(e, 'newsletter'); });

        document.querySelectorAll('a[href^="#"]').forEach(function(a) {
            a.addEventListener('click', function(e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                if (mainNav.classList.contains('active')) toggleMenu();
            });
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();

(function() {
    'use strict';

    // ----- LOADER SIMULATION -----
    function initLoader() {
        const pageLoader = document.getElementById('pageLoader');
        const loaderProgress = document.getElementById('loaderProgress');
        const loaderPercentage = document.getElementById('loaderPercentage');

        if (!pageLoader || !loaderProgress || !loaderPercentage) return;

        let progress = 0;
        const interval = setInterval(function() {
            progress += Math.floor(Math.random() * 12) + 5;

            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                loaderProgress.style.width = '100%';
                loaderPercentage.textContent = '100%';

                setTimeout(function() {
                    pageLoader.classList.add('fade-out');
                }, 300);
            } else {
                loaderProgress.style.width = progress + '%';
                loaderPercentage.textContent = progress + '%';
            }
        }, 60);
    }

    // Call loader startup immediately
    initLoader();

    // ----- DATA -----
    const cars = [
        { id:1, make:'Toyota', model:'Land Cruiser', year:2010, fuel:'Diesel', mileage:'211 376 km', transmission:'Manual', displacement:'4.0', type:'Bakkie/ Pick-up', images:['images/lc79/tlc1.jpeg','images/lc79/tlc2.jpeg','images/lc79/tlc3.jpeg','images/lc79/tlc4.jpeg'], price:'N$ 400,000', description:'Robust and reliable pickup, perfect for work and off-road adventure.' },
        { id:2, make:'BMW', model:'135i', year:2022, fuel:'Petrol', mileage:'63 873 km', transmission:'Automatic', displacement:'3.0', type:'Hatchback', images:['images/135m/b11.jpeg','images/135m/b12.jpeg','images/135m/b13.jpeg','images/135m/b14.jpeg','images/135m/b15.jpeg','images/135m/b16.jpeg','images/135m/b17.jpeg'], price:'N$ 679,000', description:'High-performance luxury compact with sharp handling and turbocharged power.' },
        { id:3, make:'Mercedes-Benz', model:'C-Class', year:2018, fuel:'Petrol', mileage:'114 641 km', transmission:'Automatic', displacement:'2.0', type:'sedan', images:['images/c250/mbc1.jpeg','images/c250/mbc2.jpeg','images/c250/mbc3.jpeg','images/c250/mb4.jpeg'], price:'N$ 340,000', description:'Luxury and performance combined with state-of-the-art technology.' },
        { id:4, make:'Isuzu', model:'D-Max', year:2014, fuel:'Diesel', mileage:'120 000 km', transmission:'Automatic', displacement:'1.9', type:'Bakkie/ Pick-up', images:['images/dmax/id1.jpeg','images/dmax/id2.jpeg','images/dmax/id3.jpeg','images/dmax/id4.jpeg','images/dmax/id5.jpeg'], price:'N$ 469,000', description:'Durable and fuel-efficient bakkie built for work and gravel roads.' },
        { id:5, make:'Volkswagen', model:'Golf R', year:2014, fuel:'Petrol', mileage:'65 297 km', transmission:'Automatic', displacement:'2.0', type:'Hatchback', images:['images/golfr/vwg7r1.jpeg','images/golfr/vwg7r2.jpeg','images/golfr/vwg7r3.jpeg','images/golfr/vwg7r4.jpeg','images/golfr/vwg7r5.jpeg'], price:'N$ 299,000', description:'Ultimate hot hatch with 4Motion all-wheel drive and iconic exhaust note.' },
        { id:6, make:'Volkswagen', model:'Polo', year:2022, fuel:'Petrol', mileage:'16 281 km', transmission:'Automatic', displacement:'1.0', type:'Hatchback', images:['images/polo/vwp1.jpeg','images/polo/vwp2.jpeg','images/polo/vwp3.jpeg','images/polo/vwp4.jpeg'], price:'N$ 315,000', description:'Modern stylish hatchback with excellent fuel economy and agile handling.' },
        { id:7, make:'Land Rover', model:'Range Rover Velar', year:2019, fuel:'Petrol', mileage:'93 054 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/velar/rrv1.jpeg','images/velar/rrv2.jpeg','images/velar/rrv3.jpeg','images/velar/rrv4.jpeg'], price:'N$ 679,000', description:'Avant-garde luxury SUV with striking design and supreme off-road capability.' },
        { id:8, make:'Mercedes-Benz', model:'GLA', year:2018, fuel:'Petrol', mileage:'107 726 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/gla/mbgla1.jpg','images/gla/mbgla2.jpg','images/gla/mbgla3.jpg','images/gla/mbgla4.jpg'], price:'N$ 310,000', description:'Sporty crossover with compact agility and Mercedes refinement.' },
        { id:9, make:'Mercedes-Benz', model:'GLC', year:2016, fuel:'Petrol', mileage:'113 000 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/glc/mbglc1.jpeg','images/glc/mbglc2.jpeg','images/glc/mbglc3.jpeg','images/glc/mbglc4.jpeg'], price:'N$ 299,000', description:'Spacious mid-size luxury SUV with top-tier safety engineering.' },
        { id:10, make:'Volkswagen', model:'Golf 7.5 tsi', year:2017, fuel:'Petrol', mileage:'57 000 km', transmission:'Automatic', displacement:'1.4', type:'Hatchback', images:['images/golftsi/vwgt1.jpeg','images/golftsi/vwgt2.jpeg','images/golftsi/vwgt3.jpeg','images/golftsi/vwgt4.jpeg'], price:'N$ 199,000', description:'Refined facelifted Golf TSI balancing efficiency and punchy performance.' },
        { id:11, make:'Haval', model:'Jolion', year:2017, fuel:'Petrol', mileage:'90 702 km', transmission:'Automatic', displacement:'1.5', type:'SUV', images:['images/jolion/hj1.jpeg','images/jolion/hj2.jpeg','images/jolion/hj3.jpeg','images/jolion/hj4.jpeg'], price:'N$ 269,000', description:'Feature-packed compact SUV with modern styling and generous space.' },
        { id:12, make:'Mini Cooper', model:'S', year:2017, fuel:'Petrol', mileage:'70 598 km', transmission:'Automatic', displacement:'2.0', type:'Hatchback', images:['images/miniCooper/mc1.jpeg','images/miniCooper/mc2.jpeg','images/miniCooper/mc3.jpeg','images/miniCooper/mc4.jpeg'], price:'N$ 175,000', description:'Iconic go-kart handling with spirited turbocharged engine.' },
        { id:13, make:'Mini Cooper', model:'JCW', year:2016, fuel:'Petrol', mileage:'48 600 km', transmission:'Automatic', displacement:'2.0', type:'Hatchback', images:['images/miniCooperJCW/mcjcw1.jpg','images/miniCooperJCW/mcjcw2.jpg','images/miniCooperJCW/mcjcw3.jpg','images/miniCooperJCW/mcjcw4.jpg'], price:'N$ 299,000', description:'John Cooper Works edition for track-inspired thrills.' },
        { id:14, make:'Audi', model:'Q5', year:2016, fuel:'Diesel', mileage:'44 770 km', transmission:'Automatic', displacement:'2.0', type:'SUV', images:['images/q5/aq51.jpeg','images/q5/aq52.jpeg','images/q5/aq53.jpeg','images/q5/aq54.jpeg'], price:'N$ 349,000', description:'Versatile premium diesel SUV with Quattro all-wheel drive.' },
        { id:15, make:'Nissan', model:'Tiida', year:2016, fuel:'Petrol', mileage:'116 000 km', transmission:'Automatic', displacement:'1.5', type:'Hatchback', images:['images/tida/nt1.jpeg','images/tida/nt2.jpeg','images/tida/nt3.jpeg','images/tida/nt4.jpeg','images/tida/nt5.jpeg','images/tida/nt6.jpeg'], price:'N$ 79,000', description:'Affordable, reliable city runner with surprising interior space.' },
        { id:16, make:'Ford', model:'Ranger', year:2019, fuel:'Diesel', mileage:'22 316 km', transmission:'Automatic', displacement:'2.0', type:'Bakkie/ Pick-up', images:['images/ranger/fr1.jpeg','images/ranger/fr2.jpeg','images/ranger/fr3.jpeg','images/ranger/fr4.jpeg'], price:'N$ 399,000', description:'Commanding double-cab bakkie with modern convenience and off-road capability.' },
        { id:17, make:'Volkswagen', model:'Taigo', year:2023, fuel:'Petrol', mileage:'24 001 km', transmission:'Automatic', displacement:'1.0', type:'SUV', images:['images/taigo/vwt1.jpg','images/taigo/vwt2.jpg','images/taigo/vwt3.jpg','images/taigo/vwt4.jpg'], price:'N$ 429,000', description:'Sleek crossover coupe with digital cockpit and outstanding efficiency.' },
        { id:18, make:'Audi', model:'A3', year:2014, fuel:'Petrol', mileage:'67 814 km', transmission:'Automatic', displacement:'1.8', type:'Hatchback', images:['images/a3/aa31.jpeg','images/a3/aa32.jpeg','images/a3/aa33.jpeg','images/a3/aa34.jpeg'], price:'N$ 179,000', description:'Compact executive hatchback with smooth turbo performance.' }
    ];

    const services = [
        { icon:'fas fa-car-crash', title:'Vehicle Inspection', description:'150-point inspection for top quality and safety.' },
        { icon:'fas fa-shield-alt', title:'Warranty & Support', description:'Comprehensive warranty and dedicated after-sales support.' },
        { icon:'fas fa-money-check-alt', title:'Flexible Financing', description:'Competitive rates and tailored financing options.' },
        { icon:'fas fa-tools', title:'Maintenance & Repairs', description:'State-of-the-art service center for all your needs.' }
    ];

    const testimonials = [
        { content:'The transparency and quality at AutoDeals Namibia completely changed my mind. The Hilux is perfect!', author:'Johannes K.', rating:5 },
        { content:'Finding a reliable sedan was my priority, and AutoDeals delivered! My Jetta runs like new.', author:'Maria S.', rating:4 },
        { content:'The variety was impressive, and staff were helpful without being pushy. Drove away with my dream BMW X5.', author:'David L.', rating:5 },
        { content:'Great service and fair prices. Found a fantastic Ford Ranger. Knowledgeable team, will return!', author:'Penda M.', rating:4 }
    ];

    // ----- DOM refs -----
    const carGrid = document.getElementById('carGrid');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const filterTags = document.querySelectorAll('.filter-tag');
    const testimonialSlider = document.getElementById('testimonialSlider');
    const servicesGrid = document.getElementById('servicesGrid');
    const interestSelect = document.getElementById('interest');
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');

    // ----- Helpers -----
    function createCarCard(car) {
        const div = document.createElement('div');
        div.className = 'car-card';
        div.innerHTML = `
            <div class="car-images">
                <img src="${car.images[0]}" alt="${car.make} ${car.model}" loading="lazy">
                <img src="${car.images[1] || car.images[0]}" alt="${car.make} ${car.model}" loading="lazy">
            </div>
            <div class="car-info">
                <h3>${car.make} ${car.model}</h3>
                <div class="car-specs">${car.year} • ${car.fuel} • ${car.transmission}</div>
                <div class="car-description">${car.description}</div>
                <div class="car-price"><strong>${car.price}</strong></div>
                <a href="#contact" class="btn btn-primary inquire-btn" style="width:100%;justify-content:center;"><i class="fas fa-car"></i> Inquire now</a>
            </div>
        `;
        const btn = div.querySelector('.inquire-btn');
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('contact').scrollIntoView({ behavior:'smooth' });
            if (interestSelect) {
                const val = car.make + ' ' + car.model;
                let opt = Array.from(interestSelect.options).find(function(o) { return o.value === val; });
                if (!opt) {
                    opt = document.createElement('option');
                    opt.value = val;
                    opt.textContent = val;
                    interestSelect.appendChild(opt);
                }
                interestSelect.value = val;
            }
        });
        return div;
    }

    function displayCars(filter, type) {
        filter = filter || '';
        type = type || 'all';
        if (!carGrid) return;
        carGrid.innerHTML = '';
        var f = filter.toLowerCase();
        var filtered = cars.filter(function(car) {
            var matchSearch = !f || car.make.toLowerCase().indexOf(f) !== -1 || car.model.toLowerCase().indexOf(f) !== -1 || car.description.toLowerCase().indexOf(f) !== -1;
            var matchType = type === 'all' || car.type === type;
            return matchSearch && matchType;
        });
        if (!filtered.length) {
            carGrid.innerHTML = '<div class="no-results"><i class="fas fa-info-circle" style="font-size:2.4rem;color:var(--accent);margin-bottom:16px;display:block;"></i><p style="font-size:1.1rem;">No vehicles found. Try adjusting your search.</p><button class="btn btn-primary" style="margin-top:16px;" onclick="resetFilters()">Show all cars</button></div>';
            return;
        }
        var frag = document.createDocumentFragment();
        filtered.forEach(function(c) {
            frag.appendChild(createCarCard(c));
        });
        carGrid.appendChild(frag);
    }

    window.resetFilters = function() {
        if (searchInput) searchInput.value = '';
        filterTags.forEach(function(t) { t.classList.remove('active'); });
        var allTag = document.querySelector('.filter-tag[data-filter="all"]');
        if (allTag) allTag.classList.add('active');
        displayCars();
    };

    function handleSearch() {
        var term = searchInput ? searchInput.value.trim() : '';
        var active = document.querySelector('.filter-tag.active');
        var type = active ? active.dataset.filter : 'all';
        displayCars(term, type);
    }

    function initServices() {
        if (!servicesGrid) return;
        servicesGrid.innerHTML = '';
        services.forEach(function(s) {
            var div = document.createElement('div');
            div.className = 'service-card';
            div.innerHTML = '<div class="service-icon"><i class="' + s.icon + '"></i></div><h3>' + s.title + '</h3><p>' + s.description + '</p>';
            servicesGrid.appendChild(div);
        });
    }

    function initTestimonials() {
        if (!testimonialSlider) return;
        testimonialSlider.innerHTML = '';
        testimonials.forEach(function(t) {
            var div = document.createElement('div');
            div.className = 'testimonial';
            var stars = '';
            for (var i = 0; i < t.rating; i++) stars += '<i class="fas fa-star"></i>';
            div.innerHTML = '<div class="testimonial-content">“' + t.content + '”</div><div class="testimonial-author">- ' + t.author + '</div><div class="testimonial-rating">' + stars + '</div>';
            testimonialSlider.appendChild(div);
        });
    }

    function populateInterest() {
        if (!interestSelect) return;
        interestSelect.innerHTML = '<option value="">Select a vehicle</option>';
        cars.forEach(function(c) {
            var opt = document.createElement('option');
            opt.value = c.make + ' ' + c.model;
            opt.textContent = c.make + ' ' + c.model;
            interestSelect.appendChild(opt);
        });
    }

    // ----- Form handlers -----
    function handleFormSubmit(e, type) {
        e.preventDefault();
        var form = e.target;
        var btn = form.querySelector('button[type="submit"]');
        var inputs = form.querySelectorAll('input, textarea, select');
        var valid = true;
        inputs.forEach(function(inp) {
            if (inp.hasAttribute('required') && !inp.value.trim()) {
                inp.style.borderColor = '#c00';
                valid = false;
            } else {
                inp.style.borderColor = '';
            }
        });
        if (!valid) {
            alert('Please fill in all required fields.');
            return;
        }
        if (btn) {
            btn.disabled = true;
            btn.textContent = 'Sending…';
        }
        setTimeout(function() {
            alert('Thank you! Your ' + (type === 'contact' ? 'message' : 'subscription') + ' was sent.');
            form.reset();
            if (btn) {
                btn.disabled = false;
                btn.textContent = type === 'contact' ? 'Send message' : 'Subscribe';
            }
        }, 800);
    }

    // ----- Carousel -----
    function initCarousel() {
        var slides = document.querySelectorAll('.carousel-slide');
        var dots = document.querySelectorAll('.dot');
        var prev = document.querySelector('.prev-btn');
        var next = document.querySelector('.next-btn');
        var index = 0;
        var interval;

        function show(i) {
            slides.forEach(function(s, idx) {
                s.classList.toggle('active', idx === i);
            });
            dots.forEach(function(d, idx) {
                d.classList.toggle('active', idx === i);
            });
        }

        function nextSlide() {
            index = (index + 1) % slides.length;
            show(index);
        }

        function prevSlide() {
            index = (index - 1 + slides.length) % slides.length;
            show(index);
        }

        function resetAuto() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);
        }

        if (dots.length) {
            dots.forEach(function(d, i) {
                d.addEventListener('click', function() {
                    index = i;
                    show(index);
                    resetAuto();
                });
            });
        }
        if (prev) {
            prev.addEventListener('click', function() {
                prevSlide();
                resetAuto();
            });
        }
        if (next) {
            next.addEventListener('click', function() {
                nextSlide();
                resetAuto();
            });
        }
        show(0);
        resetAuto();

        var hero = document.querySelector('.hero');
        if (hero) {
            hero.addEventListener('mouseenter', function() { clearInterval(interval); });
            hero.addEventListener('mouseleave', resetAuto);
        }
    }

    // ----- Mobile menu -----
    function toggleMenu() {
        var isOpen = mainNav.classList.toggle('active');
        mobileBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        mobileBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    // ----- Init -----
    function init() {
        displayCars();
        initServices();
        initTestimonials();
        populateInterest();
        initCarousel();

        if (mobileBtn) mobileBtn.addEventListener('click', toggleMenu);
        if (searchBtn) searchBtn.addEventListener('click', handleSearch);
        if (searchInput) {
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') handleSearch();
            });
        }
        filterTags.forEach(function(tag) {
            tag.addEventListener('click', function() {
                filterTags.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');
                handleSearch();
            });
        });
        if (contactForm) contactForm.addEventListener('submit', function(e) { handleFormSubmit(e, 'contact'); });
        if (newsletterForm) newsletterForm.addEventListener('submit', function(e) { handleFormSubmit(e, 'newsletter'); });

        document.querySelectorAll('a[href^="#"]').forEach(function(a) {
            a.addEventListener('click', function(e) {
                var target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
                if (mainNav.classList.contains('active')) toggleMenu();
            });
        });
    }

    document.addEventListener('DOMContentLoaded', init);
})();