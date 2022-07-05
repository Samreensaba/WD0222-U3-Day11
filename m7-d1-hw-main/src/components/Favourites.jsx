import { Component } from "react";
import { connect } from "react-redux";
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import { StarFill } from "react-bootstrap-icons";
import { removeFromFav } from "../store/actions";

const mapDispatchToProps= (dispatch)=>({
    removeFromFav: (f) => {dispatch(removeFromFav(f))}
})

class Favourites extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                            {
                                this.props.favourites.map(f=>(
                                    <ListGroupItem>
                                        <StarFill onClick={()=>this.props.removeFromFav(f)}/>
                                        <span>{ f }</span>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                         
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default connect(s=>s, mapDispatchToProps)(Favourites)