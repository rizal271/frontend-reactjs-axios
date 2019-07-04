import React, { Component, Fragment } from 'react';
import InputComp from '../../component/InputComponent/InputComponent';
import Button from '../../component/ButonComponent/ButtonComponent';
import TextareaComp from '../../component/TextareaComponent/TextareaComponent';
import {ModalBody, ModalFooter, Modal, ModalHeader,} from 'reactstrap';
import './Detailpage.css';
import swal from 'sweetalert';
import Axios from 'axios';

class Detailpage extends Component {
    state = {
        book: {
            id_book: '',
            title: '',
            description: '',
            img_url: '',
            created_at: '',
            updated_at: ''
        },

        modal:false,

        formupdateBook: {
            title: '',
            description: '',
            img_url: '',
            created_at: '',
            updated_at: ''
        }
    }
    toggle = this.toggle.bind(this);

    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
      handlechangeformupdate = (event) => {
        let formupdatebookbaru = {...this.state.formupdateBook}
        formupdatebookbaru[event.target.name] = event.target.value
        this.setState({
            formupdateBook: formupdatebookbaru
        })
    }
    handleupdate = (id) => {
        this.dataToAPI(id)
    }

    dataToAPI = (id) =>{
        Axios.petch(`http://localhost:3336/book/${id}`, this.state.formupdateBook).then((res) =>{
            console.log(res)
        }, (err)=>{
            console.log('errornya: ',err)
        })

    }
    componentDidMount(){
        let id = this.props.match.params.id
        Axios.get(`http://localhost:3336/book/detail/${id}`).then(res =>{
            let book = res.data.result[0]
            this.setState({
                book:{
                    id_book: book.id_book,
                    title: book.title,
                    description: book.description,
                    img_url: book.img_url,
                    created_at: book.created_at,
                    updated_at: book.updated_at
                }
            })
        })
    }
    handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                Axios.delete(`http://localhost:3336/book/${id}`)
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
          })
    }
    render(){
        return(
                <Fragment>
 <div className="jumbotron" style={{backgroundImage: `url(`+this.state.book.img_url+')'}}>
                    <div className="row">
                        {/* <ModalEdit/> */}
                        <Button clik={this.toggle} class="btn btn-success" value="Edit"/>
                        <input type="button" className="btn btn-outline-light btn-sm ml-3" value="Delete" onClick={() => this.handleDelete(this.state.book.id_book)}/>
                    </div>
                    <div className="card cardBook" style={{maxWidth: '15rem'}}>
                        <img src={this.state.book.img_url} style={{height:"299px"}} className="card-img-top" alt="..." />
                    </div>                  
                </div>
                <div className="row">
                    <div className="col-sm-8">
                        <h4>{this.state.book.title}</h4>
                        <p>{this.state.book.created_at}</p>
                        <p>{this.state.book.description}</p>
                    </div>  
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Edit Book</ModalHeader>
                <ModalBody>
                <form >
                    <InputComp labelname="URL Image" forlabel="imageURL" inputname="img_url" value={this.state.book.img_url} idinput="imageURL" ubah={this.handlechangeformupdate}/>
                    <InputComp labelname="Tilte" forlabel="title" inputname="title" idinput="title" value={this.state.book.title} ubah={this.handlechangeformupdate}/>
                    <TextareaComp labelname="Description" forlabel="desc" inputname="description" value={this.state.book.description} idinput="desc" ubah={this.handlechangeformupdate} />
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button clik={this.handleupdate} class="btn btn-warning" value="Save" />
                    {/* <Button className="btn btn-warning" onClick={this.toggle}>Save</Button> */}
                </ModalFooter>
                </Modal>
                </Fragment>
                 

        )
    }
}

export default Detailpage