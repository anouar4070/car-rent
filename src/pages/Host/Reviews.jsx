import React from "react"
import { BsStarFill } from "react-icons/bs"
import review from "../../assets/images/reviews-graph.png"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src={review}
                alt="Review graph"
            />
            <h3>Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id}>
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="info">
                            <p className="name">{review.name}</p>
                            <p className="date">{review.date}</p>
                        </div>
                        <p>{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}

/**
 * {[...Array(review.rating)].map((_, i) => (

[...Array(review.rating)] : Cette expression crée un tableau dont la longueur est égale à la note (rating) de la critique. Par exemple, si review.rating est 5, alors [...Array(5)] crée un tableau avec 5 éléments undefined.
.map((_, i) => ...) : On mappe sur ce tableau pour générer un élément pour chaque étoile. Le premier paramètre _ n'est pas utilisé (car chaque élément est undefined), et i est l'index de l'élément, utilisé pour la key.
 */