import {Button, Card} from 'react-bootstrap';

function Cards({image, title, description, rating}){
    return(
        <Card>
        <Card.Img variant="top" src="https://placehold.co/80x80" alt="palceholder"/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
}
export default Cards;