import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Sidebar } from '../components/Sidenav/Sidebar';
import { Course } from '../components/Course';
import { Footer } from '../components/Footer';
import { Partners } from '../components/Partners';
import { Stats } from '../components/Stats';
import { Testimonials } from '../components/Testimonials';
export const Home = () => {
    return (
        <div>
            <Sidebar />
            <Header />
            <section id="intro" className="scroll-section"><Hero /></section>
            <section id="course" className="scroll-section"><Course/></section>
            <section id="partners" className="scroll-section"><Partners/></section>
            <section id="stats" className="scroll-section"><Stats/></section>
            <section id="testimonials" className="scroll-section"><Testimonials/></section>
            <section id="footer" className="scroll-section"><Footer/></section>
        </div>
    );
};
