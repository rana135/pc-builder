import React from "react";
import Singleproduct from "../singleproduct/singleproduct";

const Featuredproduct = ({ allProduct }) => {
  return (
    <>
      <div className="md:w-3/12 mx-auto text-center mt-12 mb-10">
        <h4 className=" mb-3 text-lg">Check & Get Your Desired Product!</h4>
        <h2 className="text-3xl uppercase border-y-4 py-3 text-[#0000ff]">
          Featured Products
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mx-20">
        {allProduct
          ? allProduct
              .sort(() => Math.random() - 5)
              .slice(0, 6)
              .map((data) => <Singleproduct data={data} key={data._id} />)
          : "Loading"}
      </div>
    </>
  );
};

export default Featuredproduct;
