import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa"; // Importing FontAwesome star icons

const Book = ({ bookCard }) => {
  const { image, author, bookName, tags, category, rating } = bookCard;

  return (
    <div className="p-4">
      <div className="card bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 h-full flex flex-col">
        <figure className="py-6 bg-gray-200 flex justify-center">
          <img className="h-40 object-contain" src={image} alt={bookName} />
        </figure>
        <div className="card-body p-6 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-1">{bookName}</h2>
          <p className="text-sm text-gray-600 border-b pb-2 mb-3">
            By: {author}
          </p>
          <div className="flex justify-between items-center mt-auto">
            <span className="text-sm text-gray-700 font-medium">
              {category}
            </span>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Rating: {rating} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
