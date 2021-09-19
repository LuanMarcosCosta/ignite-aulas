import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable(){

useEffect(() => {
    api('transactions')
         .then(response => console.log(response.data))
}, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Remuneração</td>
                        <td className="deposit">2.500,00</td>
                        <td>Salário</td>
                        <td>03/09/2021</td>
                    </tr>

                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - 700,00</td>
                        <td>Conta Fixa</td>
                        <td>06/09/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}