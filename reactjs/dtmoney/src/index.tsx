import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({

  models:{
    transaction: Model,
  }, 

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance Web',
          type: 'deposit',
          category: 'Dev',
          amount: '3500',
          createdAt: new Date('01.08.2021 12:35:15')
        },

        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Dev',
          amount: '1500',
          createdAt: new Date('2021-08-15 12:35:15')
        }
      ]
    })
  },


  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request ) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
