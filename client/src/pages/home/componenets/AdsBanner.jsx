const AdsBanner = () => {
  return (
    <>
      <div className="py-6 lg:mx-4">
        <div className="bg-gradient-to-r from-red-900 to-red-600 text-white p-8 flex flex-col lg:flex-row rounded-2xl items-center lg:items-start lg:justify-between">
          <div className="lg:w-1/2 space-y-6 flex flex-col justify-start">
            <h2 className="text-sm uppercase font-semibold tracking-widest text-start">
              Life-Saving Initiative
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-start">
              Join our mission to{" "}
              <span className="text-red-300">save lives</span> through blood
              donation
            </h1>
            <p className="text-lg text-gray-300 text-start">
              Every donation can save up to 3 lives. Become a hero in someone's
              story by giving the gift of life.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-start">
                <span className="text-red-300">✓</span>
                <span>Quick and painless process (only 10-15 minutes)</span>
              </li>
              <li className="flex items-center space-x-2 text-start">
                <span className="text-red-300">✓</span>
                <span>Free health screening with every donation</span>
              </li>
              <li className="flex items-center space-x-2 text-start">
                <span className="text-red-300">✓</span>
                <span>Track your donations and impact through our app</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-red-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
                Find a Donation Center
              </button>
              <button className="border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition">
                Learn About Donation
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/2 mt-8 lg:mt-0 justify-center">
            <img
              src="https://imgs.search.brave.com/G3NdDNkuuOsBAZeQhT_VvLHCV3P0b5bngFWmroSLhRQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM1/MDQ1NDc4MC9waG90/by9ibG9vZC1kb25h/dGlvbi13b3JsZC1i/bG9vZC1kb25vci1k/YXktbWFuLWFuZC13/b21hbi1hZnRlci1n/aXZpbmctYmxvb2Qt/c2F2ZS1saXZlcy1j/b25jZXB0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1fNmxN/eDItR21EU2FrOTlq/em1jSzBGbEhpa2tM/eDNPVlhQSW9GUk5y/aW53PQ"
              alt="Blood donation process"
              className="rounded-lg shadow-lg h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdsBanner;
