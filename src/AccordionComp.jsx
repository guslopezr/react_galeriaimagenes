//Accordion
import Accordion from 'react-bootstrap/Accordion';


function AccordionComp() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sobre Gustavo López y las acuarelas</Accordion.Header>
        <Accordion.Body>
        Soy psicólogo, pintor aficionado y músico. Titulado de la Universidad Central en Psicología, he sido alumno del taller de arte de Alejandro Ortiz.

        He creado este espacio para compartir mi arte en este proceso de descubrimiento y aprendizaje continuo. Me encuentro en un proceso de formación, con mucho foco en el dibujo y el entendimiento de la composición. He explorado la técnica del pastel y más recientemente la acuarela, muy efectiva para croquis de escenas o momentos fugaces.  No busco perfección ni hiper realismo, me gusta la informalidad, capturar impresiones  de momentos o situaciones. Preferentemente trabajo en “locación” o con el sujeto a vista, pero en ocasiones me entrego a la comodidad de trabajar estudio en base a fotografías o modelos. También he explorado el trabajo en series para desarrollar a fondo un motivo.
        </Accordion.Body>
      </Accordion.Item>
  
    </Accordion>
  );
}

export default AccordionComp;