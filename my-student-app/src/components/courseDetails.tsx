type CourseDetailsProps = {
    nombre: string;
  }
  
  const CourseDetails = (props: CourseDetailsProps) => {
    return (
      <>
        <div className="course">
          <div>Nombre: {props.nombre}</div>
        </div>
      </>
    )
  }
  export default CourseDetails;