import React, { useContext } from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NewsContext } from './NewsContext';

const NewsList = () => {
    const { news } = useContext(NewsContext);

    return (
        <Container className="mt-4">
            <h2>Lista de Noticias</h2>
            <ListGroup>
                {news.map((noticia, index) => (
                    <ListGroup.Item key={index}>
                        <Link to={`/news/${index}`}>{noticia.titulo}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default NewsList;