type PersonDetailsProps = {
    nombre: string;
    apellido: string;
  }
  
  const PersonDetails = (props: PersonDetailsProps) => {
    return (
      <>
        <div className="persona">
          <div>Nombre: {props.nombre}</div>
          <div>Apellido: {props.apellido}</div>
        </div>
      </>
    )
  }
  export default PersonDetails;