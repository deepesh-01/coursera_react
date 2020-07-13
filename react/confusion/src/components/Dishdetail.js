import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


function RenderComments({ comments }) {
    const cmnts = comments.map(comment => {
        console.log("RCD")
        return (

            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
        )
    });
    return (
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className='list-unstyled'>
                {cmnts}
            </ul>
        </div>
    )
}

function RenderDish({ dish }) {
    console.log("Render Comments Called")
    return (
        <div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle> <h4> {dish.name} </h4></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </div>

    )

}

const Dishdetail = (props) => {
    if (props.dish == null) {
        return (
            <div></div>
        )
    }
    if (props.dish != null) {
        return (
            <div className="container">
                <div className='row'>
                    
                        <RenderDish dish={props.dish} ></RenderDish>
                        <RenderComments comments={props.dish.comment}></RenderComments>
                    
                </div>
            </div>);
    }

}
export default Dishdetail;