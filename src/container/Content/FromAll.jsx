import React, { Component, Fragment } from 'react';
import InputComp from '../../component/InputComponent/InputComponent';
import Button from '../../component/ButonComponent/ButtonComponent';
import TextareaComp from '../../component/TextareaComponent/TextareaComponent';
import {ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios'

class FromAll extends Component {
    state = {
        forminputBook: {
            title: '',
            description: '',
            img_url: '',
            created_at: '',
            updated_at: ''
        }
    }
    handlechangeforminput = (event) => {
        let forminputbookbaru = {...this.state.forminputBook}
        forminputbookbaru[event.target.name] = event.target.value
        this.setState({
            forminputBook: forminputbookbaru
        })
    }
    handlesubmit = () => {
        this.dataToAPI()
    }

    dataToAPI = () =>{
        axios.post('http://localhost:3336/book', this.state.forminputBook).then((res) =>{
            console.log(res)
        }, (err)=>{
            console.log('errornya: ',err)
        })

    }
    
    componentDidMount(){
        axios.get('http://localhost:3336/book')
        .then((res) => {
            this.setState({
                list: res.data.result
            })
        })
    }
    render(){
        return(
            <Fragment>
                <ModalBody>
                <form >
                    <InputComp labelname="URL Image" forlabel="imageURL" inputname="img_url" idinput="imageURL" ubah={this.handlechangeforminput}/>
                    <InputComp labelname="Tilte" forlabel="title" inputname="title" idinput="title" ubah={this.handlechangeforminput}/>
                    <TextareaComp labelname="Description" forlabel="desc" inputname="description" idinput="desc" ubah={this.handlechangeforminput} />
                </form>
                </ModalBody>
                <ModalFooter>
                    <Button clik={this.handlesubmit} class="btn btn-warning" value="Save" />
                    {/* <Button className="btn btn-warning" onClick={this.toggle}>Save</Button> */}
                </ModalFooter>
            </Fragment>
        )
    }
}

export default FromAll