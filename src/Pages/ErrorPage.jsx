import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="p-10 text-center h-screen flex-col flex items-center justify-center">
      <h1 className="text-7xl font-bold text-red-600">Oops!</h1>
      <p className="mt-4 text-3xl text-white">Something went wrong.</p>
      <p className="mt-2 text-sm text-gray-500">{error?.message}</p>
    </div>
  );
};

export default ErrorPage;
