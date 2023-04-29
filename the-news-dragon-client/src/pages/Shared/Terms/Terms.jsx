import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Terms = () => {
    return (
        <Container className='my-4'>
            <h2>Terms and conditions</h2>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae reprehenderit nihil earum quaerat quo fugiat temporibus iusto, perspiciatis et dignissimos vero neque fuga officia, blanditiis iste aliquid. Error, necessitatibus sint! Ullam assumenda expedita quos enim suscipit aperiam maiores? Deserunt dolores eveniet officiis corrupti quia quod ipsa necessitatibus, adipisci, ad neque odit quibusdam fugit. Iure et ipsa placeat veniam deleniti repellat odit omnis tempora vel nihil maxime neque unde, nobis, facilis dicta repellendus quam, aliquam doloremque ullam expedita aspernatur rerum impedit minus. Sunt aspernatur ex officiis. Natus sed maiores veritatis explicabo eligendi inventore perferendis soluta nemo facere minima ex quam commodi dolore consequuntur aliquid culpa, esse iste quae corporis, placeat iure autem libero in reprehenderit. Voluptatum iure quasi at itaque repellendus inventore suscipit culpa maiores cumque ad, quas quis quidem, reprehenderit nobis autem? Et architecto amet id magni, odit quis ullam, atque in consequatur quia placeat dolorem. Officiis libero natus rerum facere autem perspiciatis eos cumque sapiente quod nulla quam molestiae atque accusantium, deserunt ab voluptatibus deleniti excepturi est. Est, blanditiis voluptas. Harum vel eius dolorum officia maiores et quibusdam modi ad? Nemo dicta ducimus qui eligendi iste, architecto totam quis sequi voluptate quos libero, vel cumque? Hic perspiciatis nulla fugiat.</p>
            <p>Go back to <Link className='px-0 text-primary' to="/register">Register</Link></p>
        </Container>
    )
}

export default Terms