import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { CiCalendar } from 'react-icons/ci'
import first_img from '../../../assets/1.png'
import second_img from '../../../assets/2.png'
import third_img from '../../../assets/3.png'

const EditorInsignt = () => {
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="g-4">

                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={first_img} />
                        <Card.Body className='px-0'>
                            <Card.Title className='mb-3'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                            <div className="d-flex align-items-center gap-2">
                                <CiCalendar className='text-secondary fs-5' />
                                <span className='text-secondary'>Jan 4, 2022</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={second_img} />
                        <Card.Body className='px-0'>
                            <Card.Title className='mb-3'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                            <div className="d-flex align-items-center gap-2">
                                <CiCalendar className='text-secondary fs-5' />
                                <span className='text-secondary'>Jan 4, 2022</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='border-0'>
                        <Card.Img variant="top" src={third_img} />
                        <Card.Body className='px-0'>
                            <Card.Title className='mb-3'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>

                            <div className="d-flex align-items-center gap-2">
                                <CiCalendar className='text-secondary fs-5' />
                                <span className='text-secondary'>Jan 4, 2022</span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default EditorInsignt