import Modal from 'react-modal'
import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type="button"
                onClick={onRequestClose}
                className="react-modal-close">
                <img src={closeImg} alt="Fechar Modal" />
            </button>

            <Container>
                <h2>Cadastrar uma nova transação</h2>

                <input
                    placeholder="Títtulo"
                />

                <input
                    type="number"
                    placeholder="Valor"
                />

                <TransactionTypeContainer> 
                    <button
                        type="button"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entradas</span>
                    </button>

                    <button
                        type="button"
                    >
                        <img src={OutcomeImg} alt="Saídas" />
                        <span>Saídas</span>
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}