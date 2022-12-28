import gsap from 'gsap'

const HERO_IMAGE_DURATION = .5
const HERO_IMAGE_DELAY = 0.1
const H1_DURATION = 1.5
const H1_LETTER_STAGGER = 0.12
const H1_UNDERLINE_DURATION = 0.2
const BADGE_DURATION = 0.5
const CONTENT_DURATION = 0.5
const H2_DURATION = 0.4
const H2_WORD_STAGGER = 0.3
const SECTION_DURATION = .7
const SECTION_STAGGER = 0.3
const CTA_DURATION = 0.4
const TESTIMONIAL_CAROUSEL_DURATION = 0.4
const WORK_DURATION = 0.5
const WORK_DELAY_INCREMENT = .05
const HOME_PAGE_TECHNOLOGIES_IMG_DURATION = 1
const HOME_PAGE_TECHNOLOGIES_IMG_STAGGER = .2
const TESTIMONIAL_DURATION = .7
const TESTIMONIAL_STAGGER = .3

function animateHeroImage() {
    return gsap.to("#hero-image", {
        opacity: 1, 
        x: 0, 
        duration: HERO_IMAGE_DURATION,
        delay: HERO_IMAGE_DELAY
    })
}

function animateH1Letters() {
    return gsap.to(".name-letter-span", {
        x: 0,
        y: 0,
        opacity: 1,
        duration: H1_DURATION,
        ease: 'elastic',
        stagger: H1_LETTER_STAGGER
    })
}

function animateH1Underline() {
    return gsap.to(".underline", {
        width: '25px',
        ease: 'elastic',
        duration: H1_UNDERLINE_DURATION
    })
}

function animateBadge() {
    return gsap.to(".badge", {
        scale: 1,
        opacity: 1,
        duration: BADGE_DURATION
    })
}

function animateCta() {
    return gsap.to(".cta", {
        x: 0,
        opacity: 1,
        duration: CTA_DURATION,
        ease: 'elastic',
    })
}

function animateTestimonialCarousel() {
    return gsap.to("#testimonialCarousel", {
        x: 0,
        opacity: 1,
        duration: TESTIMONIAL_CAROUSEL_DURATION,
        ease: 'elastic',
    })
}

function animateContent() {
    return gsap.to(".content", {
        opacity: 1,
        duration: CONTENT_DURATION,
        ease: 'elastic',
    })
}

function animateH2() {
    return gsap.to(".word", {
        opacity: 1,
        duration: H2_DURATION,
        ease: 'elastic',
        stagger: H2_WORD_STAGGER
    })
}

function animateSections() {
    return gsap.to("section", {
        opacity: 1,
        duration: SECTION_DURATION,
        ease: 'elastic',
        stagger: SECTION_STAGGER
    })
}

function animateWorkCard(id, delayFactor) {
    return gsap.to(id, {
        scrollTrigger: {
            trigger: id,
            delay: delayFactor * WORK_DELAY_INCREMENT,
            start: 'top bottom-=100px'
        },
        x: 0,
        opacity: 1,
        duration: WORK_DURATION,
        ease: 'circ'
    })
}

function animateHomePageTechnologiesBackgroundAndImgs() {
    return gsap.to("#technologies-bg img", {
        scrollTrigger: "#technologies-bg",
        transform: "scale(1)",
        opacity: 1,
        duration: HOME_PAGE_TECHNOLOGIES_IMG_DURATION,
        stagger: HOME_PAGE_TECHNOLOGIES_IMG_STAGGER
    })
}

function animateTestimonial(id) {
    return gsap.to(id, {
        scrollTrigger: id,
        opacity: 1,
        duration: TESTIMONIAL_DURATION,
        stagger: TESTIMONIAL_STAGGER
    })
}

export {
    animateHeroImage,
    animateH1Letters,
    animateH1Underline,
    animateBadge,
    animateContent,
    animateH2,
    animateSections,
    animateCta,
    animateTestimonialCarousel,
    animateWorkCard,
    animateHomePageTechnologiesBackgroundAndImgs,
    animateTestimonial
}