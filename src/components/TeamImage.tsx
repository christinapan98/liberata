import React, { useState, useEffect } from 'react';
import './TeamImage.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type Member = {
    name: string;
    role: string;
    bio?: string | null;
    image?: string | null;
    linkedin?: string;
};

type TeamImageProps = {
    id: string;
    title: string;
    tagline: string;
    members: Member[];
    useCarousel?: boolean;
    itemsPerSlide?: number;
};

function useVisibleCount(defaultCount: number): number {
    const getCount = () => {
        if (window.innerWidth <= 600) return 2;
        return defaultCount;
    };

    const [count, setCount] = useState(getCount);

    useEffect(() => {
        const handler = () => setCount(getCount());
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, [defaultCount]);

    return count;
}

function TeamImage({
    id,
    title,
    tagline,
    members,
    useCarousel = true,
    itemsPerSlide = 3,
}: TeamImageProps) {
    const total = members.length;
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = useVisibleCount(itemsPerSlide);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
    const goToSlide = (index: number) => setCurrentIndex(index);

    const getVisibleMembers = () =>
        Array.from({ length: visibleCount }, (_, i) => members[(currentIndex + i) % total]);

    const resolveImage = (name: string) => {
        if (!name) return '/images/team_images/default.png';
        const formatted = name.toLowerCase().replace(/\s+/g, '_');
        const extensions = ['png', 'jpg', 'jpeg'];
        for (const ext of extensions) {
            try {
                return require(`../images/team_images/${formatted}.${ext}`);
            } catch {}
        }
        return '/images/team_images/default.png';
    };

    const MemberCard = ({ m }: { m: Member }) => (
        <div className="team-card">
            <div className="card-img-wrap">
                <img
                    src={resolveImage(m.image || m.name)}
                    alt={m.name}
                    loading="lazy"
                />
                {m.bio && (
                    <div className="card-overlay">
                        <p className="card-bio">{m.bio}</p>
                    </div>
                )}
            </div>
            <div className="card-info">
                <div className="member-name">{m.name}</div>
                {/* <div className="member-role">{m.role}</div> */}
                <div className="member-role-wrap">
                    <div className="member-role">{m.role}</div>

                    {m.linkedin ? (
                        <LinkedInIcon className="linkedIcon" fontSize="small"/>
                    ):(
                        <LinkedInIcon className="linkedIcon" fontSize="small"/>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="team-wrapper" id={id}>
            <div className="team-title">{title}</div>
            <div className="team-tagline">{tagline}</div>

            {useCarousel ? (
                <div className="carousel-outer">
                    <div className="carousel-wrapper">
                        <div className="carousel-slide">
                            <div
                                className="team-row"
                                style={{ gridTemplateColumns: `repeat(${visibleCount}, 1fr)` }}
                            >
                                {getVisibleMembers().map((m, idx) => (
                                    <MemberCard key={`item-${currentIndex}-${idx}`} m={m} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="ap-nav">
                        <button className="ap-arrowBtn" onClick={prevSlide}>←</button>
                        {/* <div className="ap-dots">
                            {members.map((_, i) => (
                                <button
                                    key={i}
                                    className={`ap-dot ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => goToSlide(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div> */}
                        <button className="ap-arrowBtn" onClick={nextSlide}>→</button>
                    </div>
                </div>
            ) : (
                <div className="grid-wrapper">
                    {members.map((m, idx) => (
                        <MemberCard key={idx} m={m} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TeamImage;
