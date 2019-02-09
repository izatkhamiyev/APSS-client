import React, { Component } from 'react';
import { Loading } from './Loading';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const ArticleId = (props) => {
    if (props.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.article != null)
        return (
            <div className="container">
                <div className="col-12 offset-md-2 col-md-8">
                    <div><h1>{props.article.title}</h1></div>
                    <div><img src={props.article.image} alt={props.article.title}></img></div>
                    <div>{ReactHtmlParser(props.article.content)}</div>
                </div>
            </div>
        );
}

export default ArticleId;