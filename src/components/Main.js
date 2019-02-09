import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Articles from './Articles';
import ArticleId from './ArticleId';
import Contact from './Contact';
import Footer from './Footer';
import Admin from './Admin';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { fetchArticles, postArticle, putArticle, deleteArticle } from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => dispatch(fetchArticles())
});

const mapStateToProps = (state) => ({
  articles: state.articles
});


class Main extends Component {

  componentDidMount(){
    this.props.fetchArticles();
  }


  render() {
    const ArticleWithID = ({match}) => {
      return (
        <ArticleId 
          article={this.props.articles.articles.filter(article => article._id === match.params.articleId)[0]}
          isLoading={this.props.articles.isLoading}
          errMess={this.props.articles.errMess} />
      );
    }

    return (
      <div>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path='/home' component={() => <Home articlesInfo={this.props.articles}/>} />
          <Route exact path='/articles' component={() => <Articles articlesInfo={this.props.articles}/>} />
          <Route path='/articles/:articleId' component={ArticleWithID} />
          <Route path='/about' component={() => <About />} />
          <Route path='/contact' component={() => <Contact />} />
          <Route exact path='/admin' component={() => <Admin articles={this.props.articles}/>} />
          <Redirect to='home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));