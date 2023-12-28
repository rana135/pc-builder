import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";
import Singleproduct from "@/components/singleproduct/singleproduct";
import RootLayout from "@/layout/layout";
import React from "react";

const Products = ({ products }) => {
  return (
    <div>
      <SectinonBannar
        title="All Products"
        content="Our Exclusive All Products Here"
        bannar="https://images.pexels.com/photos/7639373/pexels-photo-7639373.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <div className="grid grid-cols-12 gap-4 mt-5">
        {products?.data.map((data) => (
          <Singleproduct key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Products;

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-six-psi.vercel.app/api/v1/pcparts"
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
Products.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
