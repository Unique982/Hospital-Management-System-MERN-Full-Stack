const Loader = () => {
  return (
    <>
      <div className="relative flex items-center justify-center">
        <div className="absolute h-32 w-32 animate-spin items-center rounded-full border-b-4 border-t-4 border-purple-500" />
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="h-28 w-28 rounded-full"
        />
      </div>
    </>
  );
};

export default Loader;
