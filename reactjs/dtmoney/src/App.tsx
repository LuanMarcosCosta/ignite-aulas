import { Header } from './components/Header';
import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';



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

