import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";
import Singleproduct from "@/components/singleproduct/singleproduct";
import RootLayout from "@/layout/layout";

import { useRouter } from "next/router";
import React from "react";

const CategoryName = ({ allData }) => {
  const router = useRouter();
  const query = router.query.name;

  //logic to find the data
  const catagory = query[0];
  const catagoryProducts = allData.data.filter(
    (val) => val.category === catagory
  );

  return (
    <div className="">
      <SectinonBannar
        title={catagory}
        content={`Best ${catagory} you can buy from here`}
        bannar="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="grid grid-cols-12 gap-8 mx-10 py-12">
        {catagoryProducts.map((data) => (
          <Singleproduct data={data} key={data._id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryName;

CategoryName.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://pc-builder-server-six-psi.vercel.app/api/v1/pcparts"
  );
  const data = await res.json();
  return {
    props: {
      allData: data,
    },
  };
};
