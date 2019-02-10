import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Header from './Header';
import Footer from './Footer';
class Home extends Component {


    render() {
        const renderArticles = this.props.articlesInfo.articles.map((article) => {
            return <div key={article._id}> {article.title} </div>
        });

        return (
            <div>
                <div id='main'>
                    <Header />
                    <div className="h-100">
                        <div className="col-12 offset-md-2 col-md-8">
                            {renderArticles}
                        </div>
                    </div>
                    askdfj;
                    {/* <Footer /> */}
                </div>


            </div >
        );
    }
}

export default Home;