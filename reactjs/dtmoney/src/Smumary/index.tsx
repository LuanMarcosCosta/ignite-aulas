import incomeImg from '../../src/assets/income.svg'
import outomeImg from '../../src/assets/outcome.svg'
import totalImg from '../../src/assets/total.svg'

import { Container } from "./styles";

export function Summary(){
    return (
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomeImg} alt="Entradas" />
               </header>
               <strong>2.500,00</strong>
           </div>

           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outomeImg} alt="Saídas" />
               </header>
               <strong>- 700,00</strong>
           </div>

           <div className="hightLight-backgound">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Total" />
               </header>
               <strong>1.800,00</strong>
           </div>
       </Container>
    );
}