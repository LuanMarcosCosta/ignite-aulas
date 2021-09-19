
import { Summary } from "../Smumary";
import { TransactionTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard(){
    return (
        <Container>
            <Summary></Summary>
            <TransactionTable/>
        </Container>
    );
}