import { useState } from "react";
import { Form, Row, Col, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from 'react-router';
import { getTableById } from "../../../redux/tablesRedux";
import shortid from 'shortid';

const Table = () => {
    const { tableId } = useParams();
    const selectedTable = useSelector(state => getTableById(state, tableId));

    const [status, setStatus] = useState(selectedTable.status);
    const [peopleAmount, setPeopleAmount] = useState(selectedTable.peopleAmount);
    const [maxPeopleAmount, setMaxPeopleAmount] = useState(selectedTable.maxPeopleAmount);
    const [bill, setBill] = useState(selectedTable.bill);

    const statusOptions = ["Free", "Busy", "Reserved", "Cleaning"];

    return (
        <Form>
            <h1 className="my-3">Table {selectedTable.id}</h1>

            <Form.Group as={Row} controlId="status" className="px-0 py-2">
                <Form.Label column xs={2} className="fw-bold">Status:</Form.Label>
                <Col xs={4}>
                    <Form.Select
                        value={status}
                        onChange={e => setStatus(e.target.value)}>
                        {statusOptions.map(status => <option key={shortid()}>{status}</option>)}
                    </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="people" className="px-0 py-2">
                <Stack direction="horizontal">
                    <Form.Label column xs={2} className="fw-bold">People:</Form.Label>
                    <Col xs={2}>
                        <Form.Control
                            value={peopleAmount}
                            type="number"
                            min="0"
                            max={maxPeopleAmount}
                            onChange={e => setPeopleAmount(e.target.value)}>
                        </Form.Control>
                    </Col>
                    <span className="mx-1">/</span>
                    <Col xs={2}>
                        <Form.Control
                            value={maxPeopleAmount}
                            type="number"
                            min="0"
                            max="10"
                            onChange={e => setMaxPeopleAmount(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Stack>
            </Form.Group>

            <Form.Group as={Row} controlId="bill" className={status !== "Busy" ? "d-none" : "px-0 py-2"}>
                <Stack direction="horizontal">
                    <Form.Label column xs={2} className="fw-bold">Bill:</Form.Label>
                    <span className="mx-1">$</span>
                    <Col xs={2}>
                        <Form.Control
                            value={bill}
                            type="number"
                            onChange={e => setBill(e.target.value)}>
                        </Form.Control>
                    </Col>
                </Stack>
            </Form.Group>
        </Form>
    )
}

export default Table;