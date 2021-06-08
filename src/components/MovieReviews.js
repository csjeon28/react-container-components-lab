// Code MovieReviews Here
import React from 'react';

const Review = ({
    headline,
    link
}) => {
    return (

        <div
            key={headline}
            className='review'
        >
            <header>
                <a
                    className='review-link'
                    href={link.url}
                >
                    {headline}
                </a>
                <br />
            </header>
        </div>
    );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
    reviews: []
};

export default MovieReviews;