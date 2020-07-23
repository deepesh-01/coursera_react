import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle,
         Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import {Loading} from './LoadingComponent';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen 
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    
    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="Rating" md={6}>Rating</Label>
                                <Col md={12}>
                                    <Control.select
                                        model=".rating" id="rating"
                                        name="rating" className="form-control"
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="author" md={6}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text 
                                        model=".author" id="author" name="author" rows="12"
                                        placeholder="Your Name" className="form-control"
                                        validators={{minLength: minLength(3),
                                                     maxLength: maxLength(15)}}
                                        />
                                    <Errors
                                        className="text-danger" model=".author" show="touched"
                                        messages={{
                                            minLength: 'Name should be at least three characters long',
                                            maxLength: 'Name should be less than or equal to 15 characters'
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment" md={6}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea
                                        model=".comment" id="comment" name="comment"
                                        rows="6" className="form-control"
                                        />
                                </Col>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
 
const RenderDish = ({dish}) => {
    if(dish != null)
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return(
            <div></div>  
        );
};
    
const RenderComments = ({comments, addComment, dishId}) => {
    if(comments != null) {
        const commentView = comments.map((c) => 
        <li key={c.id}>
            {c.comment}<br/>-- {c.author}, {new Intl.DateTimeFormat('en-US', 
            { year: 'numeric', 
            month: 'short', 
            day: '2-digit'}).format(new Date(Date.parse(c.date)))}
        </li>);
        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentView}
                </ul>
                <CommentForm dishId={dishId} addComment={addComment}/>
            </div>
        );
    } else {
        return(
            <div></div>  
        );
    }
};
    
const Dishdetail = (props) => {
    if (props.isLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading></Loading>
                </div>
            </div>
        );
    }
    else if (props.errMess){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if(props.dish != null) {   
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} 
                            addComment={props.addComment}
                            dishId={props.dish.id}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return(<div></div>)   
    }
};

export default Dishdetail;