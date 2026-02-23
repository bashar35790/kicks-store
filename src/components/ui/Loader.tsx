export const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-100 w-full">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-gray-500 font-medium tracking-wide animate-pulse">
        LOADING...
      </p>
    </div>
  );
};
