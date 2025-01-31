import React, { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
                const response = await fetch('/noticias.json');
                const data = await response.json();
                setNews(data); 
        };
        fetchNews();
    }, []);

    return (
        <NewsContext.Provider value={{ news }}>
            {children}
        </NewsContext.Provider>
    );
};