import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
   const collegeInfo = useLoaderData();
   console.log(collegeInfo);
  
    return (
        <div>
            <h2>This is a details section:</h2>
          
        </div>
    );
};

export default CollegeDetails;