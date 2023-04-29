import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useLoaderData } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import EditorInsignt from '../EditorInsight/EditorInsignt'

const News = () => {

    const news = useLoaderData()
    const { title, image_url, details, category_id } = news;

    return (
        <div>

            <Card className='mb-5'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='fs-4 fw-semibold'>{title}</Card.Title>
                    <Card.Text className='py-3'>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger" className='rounded-0 btn-lg'><AiOutlineArrowLeft /> All news in this category</Button>
                    </Link>

                </Card.Body>
            </Card>

            <EditorInsignt></EditorInsignt>

        </div>
    )
}

export default News