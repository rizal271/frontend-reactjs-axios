import React, { Component, Fragment } from 'react';
import history from '../../history'
import ListContent from '../../component/ContentComponent/ListContent';
import axios from 'axios'

function text(text) {
    if(text.length > 25){
        let textSplit = text.substr(0, 25)
        return `${textSplit} ...`    
    }else{
        let textSplit = text
        return `${textSplit}`
    }    
}

class Content extends Component {
    state = {
            list:[]
    }
    componentDidMount(){
        axios.get('http://localhost:3336/book')
        .then((res) => {
            this.setState({
                list: res.data.result
            })
        })
    }
    // handleDetail = (id) =>{
    //     console.log(id)
    //     // this.props.history.push(`/Detailpage/${id}`); // fungsi dari router dom untuk berpindah halaman
    // }
    render(){
        return(
            <Fragment>
                {
                    this.state.list.map(list =>{
                        return <ListContent key={list.id_book} idb={list.id_book} imgsrc={list.img_url} title={list.title} desc={text(list.description)} goDetail={this.handleDetail}/>
                    })
                }
            </Fragment>

            
        )
    }
}

export default Content
