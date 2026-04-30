$html = Get-Content "c:\Users\ATHUL NANDHU\Desktop\portfolioo\index.html" -Raw

$newGrid = @"
                <div class="portfolio-grid">
                    <div class="portfolio-item fade-up delay-1">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574571/dtd_lm6xac.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>DTD</h3>
                                    <p>A stunning showcase of dtd with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574570/christmania_sssimp.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>CHRISTMANIA</h3>
                                    <p>A stunning showcase of christmania with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574576/techpromo_wv7crt.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>TECHPROMO</h3>
                                    <p>A stunning showcase of techpromo with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574455/CARS2_kiwkut.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>CARS 2</h3>
                                    <p>A stunning showcase of cars 2 with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574478/banner_q4swup.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>BANNER</h3>
                                    <p>A stunning showcase of banner with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574654/CARS_dfsucg.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>CARS</h3>
                                    <p>A stunning showcase of cars with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574649/WILD_wykvpi.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>WILD</h3>
                                    <p>A stunning showcase of wild with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574456/MEHH_tj2eyk.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>MEHH</h3>
                                    <p>A stunning showcase of mehh with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574494/ARTS_pxbt3u.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>ARTS</h3>
                                    <p>A stunning showcase of arts with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574385/VIHARA_kjvzv0.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>VIHARA</h3>
                                    <p>A stunning showcase of vihara with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto" style="transform: rotate(-90deg);">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574438/farewell_ltickq.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>FAREWELL</h3>
                                    <p>A stunning showcase of farewell with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574221/get_mkc9kn.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>GET</h3>
                                    <p>A stunning showcase of get with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574255/RAMPWLK_bh5r1k.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>RAMPWLK</h3>
                                    <p>A stunning showcase of rampwlk with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574267/JOYL_qep8pr.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>BIKE</h3>
                                    <p>A stunning showcase of bike with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574305/ONAM_gcvnws.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>ONAM</h3>
                                    <p>A stunning showcase of onam with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574326/GIVEAWAY_bhgbbu.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>GIVEAWAY</h3>
                                    <p>A stunning showcase of giveaway with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item fade-up delay-1 hide">
                        <div class="item-inner">
                            <div class="visual-side">
                                <video loop muted playsinline autoplay preload="auto">
                                    <source src="https://res.cloudinary.com/dzcapez5d/video/upload/v1777574334/IFTAR_tl5fot.mp4" type="video/mp4">
                                </video>
                            </div>
                            <div class="item-details">
                                <div class="details-content">
                                    <h3>IFTAR</h3>
                                    <p>A stunning showcase of iftar with dynamic visuals, engaging storytelling, and professional editing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
"@

# Simple regex replacement to grab <div class="portfolio-grid"> ... </div> up to the next <div class="fade-up delay-2"
$html = $html -replace '(?s)<div class="portfolio-grid">.*?</div>\s*<div class="fade-up delay-2"', "$newGrid`r`n                <div class=`"fade-up delay-2`""
Set-Content "c:\Users\ATHUL NANDHU\Desktop\portfolioo\index.html" $html
