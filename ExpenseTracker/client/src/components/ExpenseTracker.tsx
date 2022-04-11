import { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import IItem from '../models/IItem';
import { getItems } from '../services/items';

const ExpenseTracker = () => {
    const [ items, setItems ] = useState<IItem[]>( [] );
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState<Error | null>( null );

    const fetchItems = async () => {
        setLoading( true );
        const items = await getItems();
        setItems( items );
        setLoading( false );
    };

    useEffect( 
        () => {
            fetchItems();
        },
        [] // effect function to run only on component load
    );

    return (
        <Container className="my-4">
            <h1>Expense Tracker</h1>
            <hr />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Payee</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        /* Exercise: Go through items and display a row for every expense item */
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ExpenseTracker;