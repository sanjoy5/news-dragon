import moment from 'moment';
import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaEye, FaRegStar, FaStar } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'
import Rating from 'react-rating'

const NewsCard = ({ news }) => {

    const { _id, author, title, image_url, details, total_view, rating } = news;

    return (
        <div>

            <Card className="mb-4">
                <Card.Header>
                    <div className="d-flex align-items-center justify-content-between py-1">
                        <div className="d-flex align-items-center gap-4">
                            <img src={author.img} height={40} width={40} className='rounded-circle' alt={author.name} />
                            <div className="">
                                <h4 className="mb-1 fs-5">{author?.name}</h4>
                                <p className="mb-0 fs-6">{moment(author?.published_date).format('YYYY-MM-DD')}</p>
                            </div>
                        </div>
                        <div className="">
                            <FaRegBookmark className='fs-4 me-2' />
                            <FiShare2 className='fs-4' />
                        </div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='fs-4 fw-bolder mb-3'>{title}</Card.Title>
                    <Card.Img variant="bottom" src={image_url} className='mb-4' />
                    <Card.Text>
                        {details.length < 250 ? <> {details}</> : <>{details.slice(0, 250)}... <Link className='text-danger fw-semibold' to={`/news/${_id}`}>Read More</Link></>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted bg-white py-3">

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-2">
                            <Rating
                                readonly
                                placeholderRating={rating.number}
                                emptySymbol={<FaRegStar className='text-warning fs-5' />}
                                placeholderSymbol={<FaStar className='text-warning fs-5' />}
                                fullSymbol={<FaStar className='text-warning fs-5' />}
                            ></Rating>
                            <span className=' fs-5'>{rating.number}</span>
                        </div>

                        <div className="d-flex align-items-center gap-2 fs-5"><FaEye /> <span className='fs-5'>{total_view}</span> </div>
                    </div>

                </Card.Footer>
            </Card>
        </div>
    )
}

export default NewsCard