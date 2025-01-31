import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { NewsContext } from "./NewsContext";

const NewsDetail = () => {
  const { id } = useParams();
  const { news } = useContext(NewsContext);
  const noticia = news[id];

  return (
    <Container className="mt-4 news-detail-card">
      {noticia && (
        <Card>
          <Card.Body>
            <Card.Title>{noticia.titulo}</Card.Title>
            <Card.Text>{noticia.contenido}</Card.Text>
            <Card.Footer>
              <Card.Text>
                <strong>Categoría: </strong>
                {noticia.categoria}
              </Card.Text>
              <Card.Text>
                <strong>Autor: </strong>
                {noticia.autor}
              </Card.Text>
              <Card.Text>
                <strong>Fecha: </strong>
                {noticia.fecha}
              </Card.Text>
            </Card.Footer>
          </Card.Body>
        </Card>
      )}
      <Button variant="primary" className="mt-3" as={Link} to="/">
        Volver al listado
      </Button>
    </Container>
  );
};

export default NewsDetail;
