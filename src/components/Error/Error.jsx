

const Error = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <div className="container px-6 py-12 mx-auto text-center">
                <div className="max-w-md mx-auto">
                    {/* Icon */}
                    <div className="p-3 bg-blue-50 text-blue-500 dark:bg-gray-800 rounded-full mx-auto inline-flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h1 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                    
                    {/* Message */}
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        The page you are looking for doesnt exist. Here are some helpful links
                    </p>

                    {/* Buttons */}
                    <div className="flex mt-6 gap-3 justify-center">
                        {/* Go Back Button */}
                        <button className="flex items-center px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            Go back
                        </button>

                        {/* Take Me Home Button */}
                        <button onClick={() => window.history.back()} className="px-5 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 transition">
                            Take me home
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Error;