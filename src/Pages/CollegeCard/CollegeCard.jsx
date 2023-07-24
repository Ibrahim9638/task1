import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCard = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("/public/Data/data.json")
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 gap-6
    
    ">
        {
            info.map((info) =>
            <div key={info.id} className="card w-full h-full bg-base-100 shadow-xl border">
            <figure>
              <img
                src={info.collegeImage}
                alt="college"
              />
            </figure>
            <div className="card-body text-md">
              <h2 className="card-title">{info.collegeName}</h2>
              <p><b>Admission dates:</b> {info.admissionDates}</p>
              <p><b>Events:</b> {info.events}</p>
              <p><b>Research history:</b> {info.researchHistory}</p>
              <p><b>Sports:</b> {info.sports}</p>
              <div className="card-actions justify-end">
                <Link className="btn btn-neutral btn-sm" to={`college-details/ ${info.id}`}  >Details</Link>
              </div>
            </div>
          </div>)
        }
      
    </div>
  );
};

export default CollegeCard;
