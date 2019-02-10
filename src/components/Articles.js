import React, { Component } from 'react';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Header from './Header';
import Footer from './Footer';

const RenderItem = ({ article }) => {
    return (
        <div>
            <Card className='col-12 col-md-4'>
                <Link className="link-article" to={`/articles/${article._id}`} style={{ textDecoration: 'none' }}>
                    <CardImg top src={article.image} alt={article.title} />
                    <CardBody>
                        <CardTitle><h4>{article.title}</h4></CardTitle>
                        {article.subtitle ? <CardSubtitle>{article.subtitle}</CardSubtitle> : null}
                        <CardText>{article.description}</CardText>
                    </CardBody>
                </Link>
            </Card>
        </div>
    );
}

const Articles = (props) => {

    const articles = props.articlesInfo.articles.map(article => {
        return (
            <div key={article.id}>
                <RenderItem article={article} />
            </div>);
    })
    if (props.articlesInfo.isLoading) {
        return (
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    } else if (props.articlesInfo.errMess) {
        return (
            <div className='container'>
                <div className='row'>
                    <h4>{props.articlesInfo.errMess}</h4>
                </div>
            </div>
        );
    } else {
        return (
            <React.Fragment>
                <Header />
                <div className='container'>
                    <div className='row'>
                        {articles}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }


}

export default Articles;