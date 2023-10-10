const RecipesHero = ({ recipe }) => {
    return(
        <>
            <div className="recipe-index-hero-wrapper">
                <div className="recipe-index-hero-image">
                    <img className="recipe-index-hero-image-photo" src="https://static01.nyt.com/images/2019/09/25/dining/23eggrex2/23eggrex2-master768.jpg?w=1280&q=75"></img>
                </div>
                <div className="recipe-index-hero-content">
                    <p className="recipe-index-hero-byeline">recipe of the day</p>
                    <h2 className='recipe-index-hero-name'>{recipe.name}</h2>
                    <h3 className='recipe-index-hero-author'>By {recipe.author}</h3>
                    <p className='recipe-index-hero-blurb'>
                        If your goal is perfectly smooth, blemish-free boiled eggs that jump out of their shells
                        every single time, I’ve got bad news: No technique in the world can promise that level of perfection.
                    </p>
                    <button className="recipe-index-hero-save-button">Save
                        {/* <span className="recipe-index-hero-save-button-text">Save</span> */}
                        <svg className="recipe-index-hero-button-icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.706 4.294H6.294v10.587l4.206-2.669 4.206 2.67V4.293ZM5 3h11v14.235l-5.5-3.49-5.5 3.49V3Z" fill="#fff"></path></svg>
                    </button>
                </div>
            </div>
        </>
    )

}

export default RecipesHero
