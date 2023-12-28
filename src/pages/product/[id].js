import SectinonBannar from "@/components/shared/sectionbannar/sectionbannar";
import RootLayout from "@/layout/layout";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const ProductID = ({ product }) => {
  const router = useRouter();
  const query = router.query.id;
  const { img, name, category, price, status, rating, description } =
    product.data;
  return (
    <div>
      <SectinonBannar
        title="Product Detail Page"
        content="Discover the Perfect Blend of Style and Functionality!"
        bannar="https://images.pexels.com/photos/7639373/pexels-photo-7639373.jpeg?auto=compress&cs=tinysrgb&w=600"
      />

      <div className="grid grid-cols-12 mx-auto">
        <div className="lg:col-span-4 col-span-6 ">
          <Image
            src={img}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="lg:col-span-8 col-span-6 p-4 text-left">
          <div className="px-4 py-5">
            <h2 className="text-blue-500 font-bold mt-2 lg:text-4xl text-2xl">
              {name}
            </h2>
            <h4 className="font-bold py-1 text-[#5420e2] lg:text-xl text-lg">
              Cagetory: <span className="text-black">{category}</span>
            </h4>
            <div className="flex my-1 lg:text-xl text-lg">
              <p className="font-bold mr-2">Price:</p>
              <p className="text-gray-500 font-bold mr-2">
                <span className="mr-1">{price}</span>Tk
              </p>
              <p className="text-gray-500 font-bold line-through">
                <span className="mr-1">{(price / 100) * 120}</span>Tk
              </p>
            </div>
            <div className="flex lg:text-xl text-lg py-1">
              <p className="mr-3">
                <span className="font-bold">Status:</span> <span>{status}</span>
              </p>
              <p>
                <span className="font-bold">Rating:</span> <span>{rating}</span>{" "}
                Star
              </p>
            </div>
            <div className="lg:text-lg text-md">
              <p>
                <span className="font-bold"> Warranty:</span> <span>{12}</span>{" "}
                Month
              </p>
            </div>

            <div className="flex lg:text-xl text-lg py-1">
              <p className="mr-3">
                <span className="font-bold">Individual Rating:</span>
                <span>{Math.floor((rating / 5) * 4.2)} Star</span>
              </p>
              <p>
                <span className="font-bold">Average Rating:</span>{" "}
                <span>{Math.floor((rating / 5) * 4.5)}</span>
                Star
              </p>
            </div>
            <h2 className="lg:text-lg text-md">
              <span className="font-bold">Reviews:</span> No reviews Found
            </h2>
            <h3 className="text-lg">
              <span className="font-bold">Description:</span> {description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductID;

ProductID.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://pc-builder-server-six-psi.vercel.app/api/v1/pcparts"
  );
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.data.map((post) => ({
    params: { id: post._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
// This function gets called at build time
export async function getStaticProps({ params }) {
  // Call an external API endpoint to get posts
  const res = await fetch(
    `https://pc-builder-server-six-psi.vercel.app/api/v1/pcparts/${params.id}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}
