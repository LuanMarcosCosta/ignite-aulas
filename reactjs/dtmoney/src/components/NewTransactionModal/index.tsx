import closeImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import Modal from 'react-modal'
import { useState } from "react";
import { Container, TransactionTypeContainer, RadioBox } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, SetType] = useState('deposit')
    
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
                    <RadioBox
                        type="button"
                        onClick={() => {SetType('deposit')}}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entradas</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => {SetType('withdraw')}}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={OutcomeImg} alt="Saídas" />
                        <span>Saídas</span>
                    </RadioBox>
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