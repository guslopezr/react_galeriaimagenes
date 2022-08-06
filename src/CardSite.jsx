//Card

const Images = (props) => {

    return (

        <div>
            <img src={props.images} alt="" />
            <h3> {props.titulo}</h3>
            <p>{props.descripción}</p>

        </div>
    );
};


export default Images;