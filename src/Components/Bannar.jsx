import React from "react";
import bannarImg from "../assets/books.jpg"

const Bannar = () => {
  return (
    <div>
      <div className="hero  h-[80%] w-11/12 mx-auto rounded-lg mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src={bannarImg}
            className=" rounded-lg shadow-2xl"
          />
          <div> 
            <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
            <button className="btn btn-primary bg-[#23BE0A] mt-8">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
