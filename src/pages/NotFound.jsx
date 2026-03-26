import React from 'react'

function NotFound() {
return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-red-500">404</h1>
        <p className="text-xl mt-2">Página no encontrada</p>
    </div>
);
}

export default NotFound;