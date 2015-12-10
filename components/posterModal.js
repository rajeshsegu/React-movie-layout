import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Actors from './actors'

class PosterModal extends React.Component {

  handleClose() {
    this.props.handleClose();
  }

  render(){
    return (
      <Modal show={this.props.showModal} onHide={this.handleClose.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.movie.original_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-3">
            <div className="poster">
              <img className="posterImage" src= {this.props.url}/>
            </div>
          </div>
          <div className="col-lg-9">
            <h2>{this.props.movie.original_title }</h2>
            <p><span >{this.props.movie.vote_average}</span>/10
            <span>({this.props.movie.vote_count} votes)</span>
            <span>{this.props.movie.overview}</span></p>
            <Actors id={this.props.movie.id}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default PosterModal;