import { Card, CardBody } from "reactstrap";
const Details = ({ question, answer }) => {
  return (
    <Card className="mt-4">
      <CardBody>
        <h5>{question}</h5>
        <h4>{answer}</h4>
      </CardBody>
    </Card>
  );
};

export default Details;
