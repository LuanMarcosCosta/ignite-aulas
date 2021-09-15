import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {

    const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal (){
        setIsNewTransactionOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionOpen(false);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money" />
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova Transação
                </button>

                <Modal 
                isOpen={isNewTransactionOpen}
                onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cdastrar uma nova transação</h2>
                </Modal>
            </Content>
        </Container>
    )
}