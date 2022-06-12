import React from "react";
import {
  Accordion,
  Badge,
  Button,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";
import { data } from "../../Data/Data";
import "./MyNotes.css";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "white", border: "none" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
    }
  };
  return (
    <MainScreen title="Welcome Hasanuzzaman Hasan...">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {""}
      {data.map((d) => (
        <Accordion>
          <Card style={{ margin: 10 }} key={d._id}>
            <Card.Header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <CustomToggle eventKey="0">{d.guid}</CustomToggle>

              <div>
                <Button variant="outline-info">
                  <Link to={`/note/${d._id}`}>Edit</Link>{" "}
                </Button>
                <Button
                  onClick={() => deleteHandler(d._id)}
                  variant="danger"
                  className="mx-2"
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4 className="mb-2">
                  <Badge variant="success" className="my-2">
                    Category - {d.index}
                  </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <footer className="blockquote-footer">
                    Created on <cite title="Source Title">{d.isActive}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
