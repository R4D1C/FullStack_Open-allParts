import Header from "./components/Header"
import Content from "./components/Content"
import Total from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
    <Header course={course.name}/>
    <Content
      part1={course.parts[0].name}
      exercises1={course.parts[0].exercises}
      part2={course.parts[1].name}
      exercises2={course.parts[1].exercises}
      part3={course.parts[2].name}
      exercises3={course.parts[2].exercises}
    />
    <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  );
};

export default App

//    <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>