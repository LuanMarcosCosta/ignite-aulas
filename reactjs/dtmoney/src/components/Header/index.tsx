import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface Headerprops {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: Headerprops) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="DT Money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}