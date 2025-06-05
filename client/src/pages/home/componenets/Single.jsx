import Navbar from "../../../globals/components/navbar/Navbar";

const SinglePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center p-12">
          <div className="w-full md:w-3/4 px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos nihil harum sint repellendus quas odio in sed quia
              maiores unde!
            </h1>
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt="Blog Featured Image"
              className="mb-8 rounded-3xl"
            />
            <div className="prose max-w-none">
              <p className="text-black text-4sm font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur dicta adipisci consectetur incidunt autem eaque in
                iste laborum dolorum debitis? Fugiat dolore neque obcaecati
                error nisi quod eligendi aut cupiditate delectus voluptate?
                Doloremque reprehenderit ex, itaque pariatur ab error corporis
                maiores rem harum nihil similique quam animi cumque quas
                blanditiis natus adipisci deleniti. Facere voluptates nostrum
                impedit debitis obcaecati quasi porro magnam culpa eius
                inventore! Facere distinctio dolorem vero odit corporis iste
                eligendi dolore, libero esse eius atque veniam asperiores
                necessitatibus voluptate aspernatur. Inventore dolor eaque
                similique id beatae ut, excepturi vero alias aperiam
                voluptatibus explicabo eligendi. Blanditiis, in aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
