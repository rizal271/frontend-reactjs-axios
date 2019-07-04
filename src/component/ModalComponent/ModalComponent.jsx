import React from 'react';
import { } from 'reactstrap';
import Button from '../../component/ButonComponent/ButtonComponent';

const ModalComponent = (props) => {
    return(
        <Modal isOpen={props.isopen} toggle={props.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{props.titlemodal}</ModalHeader>
                <ModalBody>
                    <form >
                        <div className="form-group">
                            <label className="control-label" for="imageUrl">URL Image</label>
                            <input type="text" name="imageUrl" className="form-control" id="imageUrl" required />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="title">Title</label>
                            <input type="text" name="title" className="form-control" id="title" required />
                        </div>
                        <div className="form-group">
                            <label className="control-label" for="desc">Description</label>
                            <textarea name="desc" className="form-control" id="desc" required ></textarea>
                        </div>
                    </form>	
                </ModalBody>
                <ModalFooter>
                    <Button class="btn btn-warning" onClick={this.toggle}>Save</Button>
                </ModalFooter>
                </Modal>
    )
}

export default ModalComponent