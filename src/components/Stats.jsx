import React from 'react'

export const Stats = () => {
    return (
        <div className='stats'>

            <div className='stat_left'>
                <h2>About Us</h2>
                <p className='about_us_tagline'>Learn & Grow Your Skills From Anywhere</p>
                <p className='about_us_tagline2'>Slog solutions is your ideal destination for mastering software development, offering flexible, online courses that adapt to your schedule. With practical projects and a vibrant community, you gain hands-on experience and ongoing support. Whether you're a beginner or a seasoned pro, we empower your career journey.</p>
                <div className='features'>
                    <div className='feature'>Affordable pricing</div>
                    <div className='feature'>Job placement support</div>
                    <div className='feature'>Lifetime access to course materials</div>
                </div>
            </div>

            <div className='stat_right'>
                <div class="stats-grid">
                    <div class="stats-card">
                        <h2>50%</h2>
                        <p>Reduction in identity<br />management costs</p>
                    </div>
                    <div class="stats-card">
                        <h2>98%</h2>
                        <p>Improvement in<br />Employee satisfaction Indices</p>
                    </div>
                    <div class="stats-card">
                        <h2>97%</h2>
                        <p>Fewer security<br />related incidences</p>
                    </div>
                    <div class="stats-card">
                        <h2>3X</h2>
                        <p>Lightning fast<br />authentication</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
