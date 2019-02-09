
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Media } from 'reactstrap';
import { Editor } from '@tinymce/tinymce-react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { postArticle, putArticle } from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => ({
    postArticle: (article) => dispatch(postArticle(article)),
    putArticle: (id, article) => dispatch(putArticle(id, article)),
});

class TinyEditorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            update: false,
            _id: "",
            title: "",
            imageFile: null,
            category: "",
            featured: false,
            description: "",
            content: ""
        };
        this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    componentDidMount() {
        if (this.props.article != null) {
            this.setState({
                update: true,
                _id: this.props.article._id,
                title: this.props.article.title,
                category: this.props.article.category,
                featured: this.props.article.featured,
                description: this.props.article.description,
                content: this.props.article.content
            });
        }
    }

    handleEditorChange = (e) => {
        this.setState({ content: e });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let formData = new FormData();

        formData.append('title', this.state.title);
        formData.append('imageFile', this.state.imageFile);
        formData.append('category', this.state.category);
        formData.append('featured', this.state.featured);
        formData.append('description', this.state.description);
        formData.append('content', this.state.content);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]); 
        }
         if (this.state.update) {
            this.props.putArticle(this.state._id, formData);
        } else {
            this.props.postArticle(formData);
        }
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if(name === 'imageFile')
            value = target.files[0];
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container admin-page">
                    <div className='row'>
                        <Form className='col-8'>
                            <Row className='form-group'>
                                <Label for='title' md={2}>Title</Label>
                                <Col md={10}>
                                    <Input type='text' name='title' id='title' placeholder='Title' value={this.state.title} onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label for='imageFile' md={2}>Image</Label>
                                <Col md={10}>
                                    <Input type='file' name='imageFile' id='imageFile' onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label for='category' md={2}>Category</Label>
                                <Col md={10}>
                                    <Input type='text' name='category' id='category' placeholder='Category' value={this.state.category} onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row check className='form-group'>
                                <Col md={{ size: 3, offset: 2 }}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Input type="checkbox" name="featured"
                                                value={this.state.featured} onChange={this.handleInputChange} />
                                            Featured ?
                                        </Label>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label for='description' md={2}>Description</Label>
                                <Col md={10}>
                                    <Input type='text' name='description' id='description' placeholder='Description' value={this.state.description} onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className='row'>
                        <div className="col-12">
                            {this.props.articles.articles.name}
                            <Editor
                                value={this.state.content}
                                initialValue="<p>This is the initial content of the editor</p>"
                                init={{
                                    plugins: 'link image code importcss advlist table emoticons autoresize link media lists pagebreak paste preview',
                                    toolbar: 'undo redo paste| bold italic underline | alignleft aligncenter alignright | code link | emoticons numlist bullist | image media forecolor backcolor',
                                    image_caption: true,
                                    image_advtab: true,
                                    media_live_embeds: true,
                                    color_cols: "5",
                                    content_css: '/content.css'
                                }}
                                onEditorChange={this.handleEditorChange}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <Button className='ml-auto' onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-12 offset-md-2 col-md-8">
                        <div><h1>{this.state.title}</h1></div>
                        <div><img src={this.state.image} alt={this.state.title}></img></div>
                        <div>{ReactHtmlParser(this.state.content)}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default connect(null, mapDispatchToProps)(TinyEditorComponent);