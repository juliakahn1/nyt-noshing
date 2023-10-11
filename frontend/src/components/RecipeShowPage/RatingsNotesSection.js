import RatingStarRadios from "./RatingStarRadios"

const RatingsNotesSection = ({ recipe }) => {

    return(
        <>
            <div className="show-ratings-notes-wrapper">
                <div className="show-ratings-wrapper">
                    <h2 className="show-recipe-header">ratings</h2>
                    <div className="show-recipe-avg-rating-wrapper">
                        <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="store-recipe-avg-rating-big-star"><path d="M7.5.297 9.184 5.48h5.449l-4.408 3.203 1.683 5.182L7.5 10.662l-4.408 3.203 1.683-5.182L.367 5.48h5.45L7.5.297Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"></path></svg>
                        <div className="show-recipe-avg-rating-text">
                            <h3 className="show-recipe-avg-rating-text avg-rating-score">4 out of 5</h3>
                            <p className="show-recipe-avg-rating-text num-ratings">12 user ratings</p>
                        </div>
                    </div>
                    <div className="show-recipe-your-rating-wrapper">
                        <h4 className="show-recipe-your-rating-header">Your rating</h4>
                        <div className="show-recipe-your-rating-stars-wrapper">
                            <RatingStarRadios />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RatingsNotesSection
