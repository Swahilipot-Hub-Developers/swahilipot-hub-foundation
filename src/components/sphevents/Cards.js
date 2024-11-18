import { useState } from 'react';

const Cards = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 3;
    const cardData = [
        { title: 'Talent to Income Entrepreneurship Training', badgeText: '29.08.2024', href: '#', description: 'Learn more' },
        { title: 'Heritage FDG', badgeText: '29.08.2024', href: '#', description: 'Learn more' },
        { title: 'Case Managers On boarding', badgeText: '29.08.2024', href: '#', description: 'Learn more' },
        { title: 'Website Design Training', badgeText: '27.08.2024 - 29.08.2024', href: '#', description: 'Learn more' }, 
        { title: 'Business Idea Competition', badgeText: '24.08.2024 - 28.08.2024', href: '#', description: 'Learn more' },
        { title: 'KIEP SKIES', badgeText: '26.08.2024 - 31.08.2024', href: '#', description: 'Learn more' },
        { title: 'Mega Dance Battle', badgeText: '30.08.2024 - 31.08.2024', href: '#', description: 'Learn more' },
    ];

    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const currentCards = cardData.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            {/* Blog */}
            <div className="container content-space-1">
                {/* Heading */}
                <div className="w-lg-65 text-center mx-lg-auto mb-10">
                    <h2 className="text-primary mb-5">
                        Past Events at<br />
                        <h3><span className="text-warning">Swahilipothub</span></h3>
                    </h2>
                    <p className="fs-6">
                        SwahiliPotHub has a rich history of hosting dynamic and impactful 
                        events that have significantly contributed to the growth of the local 
                        tech and creative communities. These events have not only served as 
                        platforms for knowledge sharing but also fostered collaboration, 
                        innovation, and cultural exchange among participants.
                    </p>
                </div>
                {/* End Heading */}
                <div className="row mb-5 mb-sm-5">
                    {currentCards.map((card, index) => (
                        <div key={index} className="col-sm-6 col-lg-4 mb-3 mb-lg-5">
                            <a
                                className="card card-lg card-transition bg-primary-dark"
                                href={card.href}
                                style={{ minHeight: "22rem" }}
                            >
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="badge bg-soft-light">{card.badgeText}</span>
                                    </div>
                                    <h4 className="text-center text-white mb-5">
                                        {card.title}
                                    </h4>
                                    <span className="card-link link-light">
                                        {card.description} <i className="bi-chevron-right small ms-1" />
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}
                    
                </div>
                {/* End Row */}
                {/* Pagination Controls */}
                <div className="flex justify-center items-center space-x-2 mt-4">
                        <button
                            onClick={handlePrevPage}
                            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary flex items-center justify-center"
                            disabled={currentPage === 0}
                        >
                            <i className="bi bi-chevron-left"></i> {/* Left Icon */}
                        </button>
                        <span className="flex items-center">
                            Page {currentPage + 1} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary flex items-center justify-center"
                            disabled={currentPage === totalPages - 1}
                        >
                            <i className="bi bi-chevron-right"></i> {/* Right Icon */}
                        </button>
                </div>
                </div>
            {/* End Blog */}
        </>
    );
};

export default Cards;
