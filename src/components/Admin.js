import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Media } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Loading } from './Loading';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteArticle } from '../redux/ActionCreators';
import TinyEditorComponent from './TinyEditor';
import Header from './Header';
import Footer from './Footer';
import { logoutAdmin } from '../redux/ActionAuth';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';


const mapDispatchToProps = (dispatch) => ({
  deleteArticle: (id) => dispatch(deleteArticle(id)),
  logoutAdmin: () => dispatch(logoutAdmin())
});

const RenderItems = (props) => {

  const handleDelete = (id) => {
    var message = "Are you sure?\nArticle will be deleted";
    if (window.confirm(message))
      props.deleteArticle(id);

  }
  if (props.articles.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.articles.errMess) {
    return (
      <div className='container'>
        <div className='row'>
          <h4>{props.articles.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      props.articles.articles.map(article => {
        return (
          <div key={article.id} className='row mt-5'>
            <Link className="col-12 col-md-10 link-article" to={`/articles/${article._id}`} style={{ textDecoration: 'none' }}>
              <Media tag='li' className=''>
                <Media left middle className="col-4 col-md-3">
                  <Media object src={article.image} alt={article.title} />
                </Media>
                <Media body className='col-8 col-md-9'>
                  <Media heading>{article.title}</Media>
                  <p className="d-none d-md-block">{article.description}</p>
                </Media>
              </Media>
            </Link>
            <div className="col-12 col-md-2">
              <Button color='danger' className='mt-3' onClick={() => handleDelete(article._id)}> Delete article</Button>
              <Button color='primary' className='mt-3' onClick={() => props.updateArticle(article)} > Edit article</Button>
            </div>
          </div>
        );
      })
    );
  }
}

const CHECK_INTERVAL = 5000 // in ms
class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isPosting: false,
      isUpdating: null
    }
    this.changeState = this.changeState.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.logout = this.logout.bind(this);
    this.initInterval();
  }

  logout = () => {
    this.props.logoutAdmin();
    this.props.history.push('/home');
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, CHECK_INTERVAL);
  }

  check() {
    const jwtToken = localStorage.getItem("token");
    // console.log(jwtToken);
    // console.log(jwtToken.exp);
    if(jwtToken !== null){
      const jt = jwt_decode(jwtToken);
      const now = new Date().getTime();
      const timeleft = jt.exp * 1000 - now;
      console.log(timeleft);
      if (timeleft < 0) {
        alert('Your session is expired'); // Call here logout function, expire session
        this.props.logoutAdmin();
      }
    }
    else if(localStorage.getItem('token') !==null ){
      alert('Your session is expired null'); // Call here logout function, expire session
      this.props.logoutAdmin();
      return;
    }

  }

  changeState = () => {
    this.setState({ isPosting: !this.state.isPosting });
  }

  updateArticle = (article) => {
    this.setState({ isPosting: true, isUpdating: article });
  }
  render() {
    return (
      <React.Fragment>
        <Header logoutPage={true} logoutAdmin={this.logout} />
        {this.state.isPosting ?
          <TinyEditorComponent articles={this.props.articles} article={this.state.isUpdating} />
          :
          <div className='container'>
            <div className='row'>
              <Button color='primary' className='offset-1 mt-3' onClick={this.changeState}> Post a new article</Button>
            </div>
            <div className='row'>
              <div className="col-12">
                <Media list>
                  <RenderItems articles={this.props.articles} updateArticle={this.updateArticle} deleteArticle={this.props.deleteArticle} />
                </Media>
              </div>
            </div>
          </div>}
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Admin));