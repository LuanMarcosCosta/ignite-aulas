import { Header } from './components/Header';
import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './Dashboard';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './NewTransactionModal';



export function App() {

  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal (){
      setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false);
  }

  return (
    <>
     <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

     <Dashboard/>

     <NewTransactionModal 
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
     />

     <GlobalStyle/>
    </>
  );
}

