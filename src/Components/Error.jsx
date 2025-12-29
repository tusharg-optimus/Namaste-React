import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>404 Error</h1>
            <h2>Page Not Found!</h2>
            <h3>{error?.statusText || error?.message}</h3>
        </div>
    );
};

export default Error;