import React from'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item, isLoading, errorMess}){
    if(isLoading){
        return(
            <Loading></Loading>
        );
    }
    else if(errorMess){
        return(
        <h4>{errorMess}</h4>
        );
    }
    else {
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name}></CardImg>
                    <CardBody>
                        <CardTitle>
                            {item.name}
                        </CardTitle>
                        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>:null}
                        <CardText>{item.description}</CardText>
                    </CardBody>   
            </Card>
        );
    }
}

function Home(props){
    console.log("HomePropsCalled");
    return(
        
        <div className="container">
           <div className = "row aling-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                                isLoading={props.dishesLoading}
                                errorMess={props.dishesErrMess}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotions}
                                isLoading={props.promosLoading}
                                errorMess={props.promosErrMess}></RenderCard>
               </div>
               <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}></RenderCard>
               </div>
           </div>
        </div>
    )
}

export default Home;