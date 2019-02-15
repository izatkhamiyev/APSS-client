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
        <div>
            <Card className='col-12'>
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
class Home extends Component {


    render() {
        const renderArticles = this.props.articlesInfo.articles.map((article) => {
            return <RenderItem article={article} />
        });

        return (
            <React.Fragment>
                <Header />
                <div id="homeImg">
                    <div>
                        <h1>See our new articles</h1>
                        <Link to='/articles' className='btn'>Articles</Link>
                    </div>
                </div>
                <div className='container mt-3 mb-3'>
                    <div className="col-12 col-md-4">
                        {renderArticles}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;