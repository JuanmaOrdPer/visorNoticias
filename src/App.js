import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import NewsList from './components/NewsList';
import NewsDetail from './components/NewsDetail';
import { NewsProvider } from './components/NewsContext';

function App() {
    return (
        <NewsProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout><NewsList /></Layout>} />
                    <Route path="/news/:id" element={
                        <Layout>
                            <NewsDetail />
                        </Layout>
                    } />
                </Routes>
            </Router>
        </NewsProvider>
    );
}

export default App;