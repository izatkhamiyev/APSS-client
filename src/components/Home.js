import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

class Home extends Component {

    
    render() {
        const renderArticles = this.props.articlesInfo.articles.map((article) => {
            return <div key={article.id}> {article.name} </div>
        });

        return(
            <div>
                <div className='main'>
                </div>
                <div className="container">
                    <div className="col-12 offset-md-2 col-md-8">
                        {renderArticles}
                    </div>
                </div>
            </div >
        );
    }
}

export default  Home;