const { createApp } = Vue

createApp({
  data() {
    return {
        searchInput : "",
        currentChat: 0,
        bell: true,
        messaggioRisposta: {
            data:'10/01/2020 15:30:5',
            message : 'OK!',
            status: 'received'
        },
        nuovoMessaggio: {
            data:'10/01/2020 15:30:5',
            message : '',
            status: 'sent'
        },
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ]
        
        
    }
  },
  methods: {
    // al click di ogni chat apre la corrispondente sulla destra
    chatClick(i){
        this.currentChat = i
    },
    // in base allo status del messaggio imposta a destra o sinistra il messaggio
    messageStatus(messaggio){
       return ( messaggio.status == 'sent') ? 'flexEnd' : 'flexStart'
    },
    // al click sulla campanella toglie lo slash o lo aggiunge
    bells(){
        return (this.bell === true) ? 'fa-solid fa-bell' : 'fa-solid fa-bell-slash'
    },
    bellSlash(){
        this.bell = !this.bell 
    },
    // aggiunge il messaggio inviato in chat
    aggiungiInChat(){
        let messaggioInserito = {...this.nuovoMessaggio}
        this.contacts[this.currentChat].messages.push(messaggioInserito)
        this.nuovoMessaggio.message = ""
    },
    // aggiunge un messaggio ricevuto in chat dopo un secondo dal messaggio inviato
    messageAnswer(){
        setTimeout(() => {
            let rispostaUtente = {...this.messaggioRisposta}
            this.contacts[this.currentChat].messages.push(rispostaUtente)
            console.log(this.messaggioRisposta);
          }, "1000");
    },
    // funzione per cercare il nome dell'utente tramite input
    searchName(){
       for (let i = 0; i < this.contacts.length; i++) {
        const contactsEle =  this.contacts[i];
        let nameSearched = contactsEle.name.toLowerCase()
        //console.log(this.searchInput);
        if(nameSearched.toLowerCase().includes(this.searchInput.toLowerCase())){
            contactsEle.visible = true
        }else{
            contactsEle.visible = false
        }

       }
    }

  }
}).mount('#app')
