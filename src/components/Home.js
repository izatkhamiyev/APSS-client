import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const RenderItem = ({ article }) => {
    return (
        <>

            <Link className="link-article" to={`/articles/${article._id}`} style={{ textDecoration: 'none' }}>
                <CardImg top src={article.image} alt={article.title} />
                <CardBody>
                    <CardTitle><h4>{article.title}</h4></CardTitle>
                    {article.subtitle ? <CardSubtitle>{article.subtitle}</CardSubtitle> : null}
                    <CardText className='d-none d-md-block'>{article.description}</CardText>
                </CardBody>
            </Link>
        </>
    );
}
class Home extends Component {


    render() {
        const renderArticles = this.props.articlesInfo.articles.map((article) => {
            if(article.featured)
            return (
                <Card className='col-auto col-md-5 home-article m-1'>
                    <RenderItem article={article} />
                </Card>
            );
            else 
            return (
                <Card className='col-auto col-md-3 home-article m-1'>
                    <RenderItem article={article} />
                </Card>
            );
        });

        return (
            <React.Fragment>
                <Header />
                <div className='m-1' id="homeImg">
                    <div>
                        <h1>See our new articles</h1>
                        <Link to='/articles' className='btn'>Articles</Link>
                    </div>
                </div>
                    <div className="d-flex flex-wrap">
                        {renderArticles}
                    </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;