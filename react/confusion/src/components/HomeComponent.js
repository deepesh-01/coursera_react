import React from'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
function RenderCard({item, isLoading, errMess}){
    if(isLoading){
        return(
            <Loading></Loading>
        );
    }
    else if(errMess){
        return(
        <h4>{errMess}</h4>
        );
    }
    else {
        return(
            <Card>
                <CardImg src={item.image} alt={item.name}></CardImg>
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
                    <RenderCard item={props.promotions}></RenderCard>
               </div>
               <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}></RenderCard>
               </div>
           </div>
        </div>
    )
}

export default Home;