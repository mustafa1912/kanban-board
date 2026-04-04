// Task
import Card from 'react-bootstrap/Card';


function Task({ task }) {
    return (
        <>
            <Card key={task.id} className='my-2 mx-auto'  >
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Text>
                        {task.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <button className='btn-priority'>{task.priority}</button>
                        <div className="d-flex gap-2">
                            <button className='btn-edit'>edit</button>
                            <button className='btn-del'>del</button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Task
