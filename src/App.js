import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Card from "react-bootstrap/Card"; // Importamos el componente
import Button from "react-bootstrap/Button"; // Importamos el componente
import Header from './Header.jsx';
import CardSite from './CardSite.jsx';
import FooterComp from './FooterComp.jsx';
import MultipleAddonsExample from './FormComp.jsx';
import AccordionComp from './AccordionComp.jsx';

function App() {
    return (

        <div className='container'  >

            < Header title="Galería de acuarelas" />
            <br />

            <div className='container1' >


                <Card style={{ width: "22rem", marginBottom: "2rem"}}>
                    <Card.Img variant="top" src="https://glopezimpresiones.files.wordpress.com/2019/06/img_3325.jpg?w=1480" />
                    <Card.Body>
                        < CardSite titulo="Jardín Japonés" />
                        < CardSite descripción="Acuarela in situ pintada en Parque Metropolitano" />

                        <Button variant="success">Ver precio</Button>
                    </Card.Body>
                </Card>
            
                <Card style={{ width: "22rem", marginBottom: "2rem" }}>
                    <Card.Img variant="top" src="https://glopezimpresiones.files.wordpress.com/2018/11/img_9876-1.jpg" />
                    <Card.Body>
                        < CardSite titulo="Casablanca" />
                        < CardSite descripción="Acuarela in situ pintada en Plaza de Armas de Casablanca" />

                        <Button variant="success">Ver precio</Button>
                    </Card.Body>
                </Card>
            
                <Card style={{ width: "22rem", marginBottom: "2rem" }}>
                    <Card.Img variant="top" src="https://glopezimpresiones.files.wordpress.com/2019/06/img_3586.jpg?w=1480" />
                    <Card.Body>
                        < CardSite titulo="Paseo Bandera" />
                        < CardSite descripción="Acuarela in situ pintada en Paseo Bandera, Santiago Centro" />

                        <Button variant="success">Ver precio</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "22rem", marginBottom: "2rem" }}>
                    <Card.Img variant="top" src="https://glopezimpresiones.files.wordpress.com/2018/11/img_1517.jpg" />
                    <Card.Body>
                        < CardSite titulo="Gallo de perfil" />
                        < CardSite descripción="Gallo realizado en base a imagen de referencia" />

                        <Button variant="success">Ver precio</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "22rem", marginBottom: "2rem" }}>
                    <Card.Img variant="top" src="https://glopezimpresiones.files.wordpress.com/2018/01/img_9263.jpg?w=1038&h=782" />
                    <Card.Body>
                        < CardSite titulo="Tagua Chilena" />
                        < CardSite descripción="Acuarela en base a imagen de referencia" />

                        <Button variant="success">Ver precio</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "22rem", marginBottom: "2rem" }}>
                    <Card.Img variant="top" src="https://glopezimpresiones.files.wordpress.com/2018/01/img_9349-1.jpg" />
                    <Card.Body>
                        < CardSite titulo="Chuncho" />
                        < CardSite descripción="Acuarela en base a imagen de referencia" />

                        <Button variant="success">Ver precio</Button>
                    </Card.Body>
                </Card>


            </div>

            <div className="footercontainer">
                <AccordionComp />
                <br />
                <MultipleAddonsExample />
                <Button variant="secondary">Enviar consulta</Button>
                <br />
                <FooterComp />
            </div>


        </div>

    );
};

export default App