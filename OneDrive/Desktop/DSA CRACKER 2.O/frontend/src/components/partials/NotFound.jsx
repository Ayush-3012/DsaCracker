/* eslint-disable react/no-unescaped-entities */
const NotFound = () => {
  return (
    <div className="flex flex-col h-[85vh] text-center bg-slate-600 mx-4 rounded-md max-sm:mx-2">
      <h1 className="text-5xl mb-4 text-slate-50 my-4">404 - Not Found</h1>
      <p className="text-4xl text-slate-200">
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
