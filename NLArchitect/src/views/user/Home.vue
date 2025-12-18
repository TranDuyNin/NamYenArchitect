<template>
    <div>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, index) in slides" :key="index"
                    :style="{ backgroundImage: `url(${slide.image})` }">
                    <div class="slide-overlay"></div>
                    <div class="slide-content">
                        <h1>{{ slide.title }}</h1>
                        <p>{{ slide.subtitle }}</p>
                        <a href="#">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const slides = [
    {
        image: new URL('@/assets/images/banner1.jpg', import.meta.url).href,
        title: 'Da Nang Concept House',
        subtitle: 'Winner at competition 2024'
    },
    {
        image: new URL('@/assets/images/banner2.jpeg', import.meta.url).href,
        title: 'Da Nang Concept Hotel',
        subtitle: 'Hospitality study – 2023'
    },
    {
        image: new URL('@/assets/images/banner3.jpeg', import.meta.url).href,
        title: 'Da Nang Opera House',
        subtitle: 'Cultural project 2022'
    },
    {
        image: new URL('@/assets/images/banner4.jpg', import.meta.url).href,
        title: 'Da Nang Opera House',
        subtitle: 'Cultural project 2022'
    },
    {
        image: new URL('@/assets/images/banner5.jpg', import.meta.url).href,
        title: 'Da Nang Opera House',
        subtitle: 'Cultural project 2022'
    },
    {
        image: new URL('@/assets/images/banner6.jpg', import.meta.url).href,
        title: 'Da Nang Opera House',
        subtitle: 'Cultural project 2022'
    }
]

onMounted(() => {
    new Swiper('.swiper', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })
})
</script>

<style scoped>
.swiper {
    height: 100vh;
}

.swiper-slide {
    position: relative;
    background-size: cover;
    background-position: center;

}

.slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 2;
}

.slide-content h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 50px;
    letter-spacing: 10px;
    font-weight: 400;
    text-transform: uppercase;
}

.slide-content p {
    font-size: 20px;
    letter-spacing: 2px;
    margin-bottom: 30px;

}


.slide-content a {
    border: 1px solid white;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 15px;
    transition: 0.9s;
    text-transform: uppercase;
}

.slide-content a:hover {
    background-color: white;
    color: black;
}



/* Intro section */
.intro-section {
    padding: 80px 20px;
    max-width: 1000px;
    margin: auto;
    text-align: center;
}

.intro-section h2 {
    font-size: 28px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.intro-section p {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
}

.about-section {
    padding: 100px 0;
    background-color: #fff;
    color: #1e1e1e;
    font-family: 'Helvetica Neue', sans-serif;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.studio-intro {
    text-align: center;
    margin-bottom: 60px;
}

.studio-intro h2 {
    font-size: 2.4rem;
    font-weight: 400;
    margin-bottom: 20px;
}

.studio-intro p {
    font-size: 1.1rem;
    color: #555;
    max-width: 800px;
    margin: 0 auto;
}

.director {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    margin-bottom: 80px;
}

.director-image {
    flex: 1 1 300px;
}

.director-image img {
    width: 100%;
    object-fit: cover;
}

.director-bio {
    flex: 2 1 200px;
    font-family: Proxima Nova, sans-serif;
}

.director-bio h3 {
    font-size: 1.8rem;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 5px;
    margin-bottom: 5px;
    color: #a38e4a;
    text-transform: uppercase;
}


.director-bio p {
    font-size: 1rem;
    color: #868585;
    line-height: 1.6;
}

.highlight-projects h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 40px;
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
}

.project {
    background: #f8f8f8;
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.project:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.project img {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.project-info {
    padding: 20px;
}

.project-info h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.project-info p {
    font-size: 0.95rem;
    color: #555;
}

.vision-mission {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    margin-bottom: 80px;
}

.vision,
.mission {
    flex: 1 1 45%;
}

.vision h3,
.mission h3 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.vision p,
.mission p {
    color: #555;
    line-height: 1.6;
    font-size: 1rem;
}
</style>
