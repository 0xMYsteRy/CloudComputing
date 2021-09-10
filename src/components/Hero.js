import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Vaccination Programs</h2>
            
            <Link className="btn" to="/books">View All Vaccine</Link>
        </section>
    )
}

export default Hero
