import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Star, StarFill} from 'react-bootstrap-icons'
import { addToFav, removeFromFav } from '../store/actions'

const mapStateToProps = s => s

const mapDispatchToProps = (dispatch)=> {
    addToFavourites: (company) =>dispatch(addToFav(company))
    removeFromFavourites: (company) =>dispatch(removeFromFav(company))
}

const JobResult = ({ data, favouriteCompanies, addToFavourites, removeFromFavourites }) => {
    const isFav = favouriteCompanies.includes(data.company_name)
    const toggleFavourite = isFav? addToFavourites : removeFromFavourites
return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3} className="d-flex">
    {
        isFav
        ?<StarFill color= "gold" className='mr-4' onClick={toggleFavourite}/>
        :<Star className='mr-4' onClick={toggleFavourite}/>
    }
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
)
}
export default JobResult
