import Header from './Header'
import Content from './Content'

const Course = ({ course }) => {
    const {parts} = course
    
    return (
        <div>
            <Header name={course.name} />
            <ul>
                {parts.map(part => 
                    <Content key={part.id} name={part.name} exercises={part.exercises}/>
                )}
            </ul>
            <p>Total exercises: {parts.map(part => part.exercises).reduce((acc, arr) => acc + arr)}</p>
        </div>
    )
}

export default Course