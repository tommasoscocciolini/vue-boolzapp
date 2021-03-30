var app = new Vue({
  el: '#root',
  avatarURL: '',
  activeChat: 'active-conv',
  searchConv: '',
  data:{
    index: 0,
    isActive: '',
    newMsgTxt: '',
    contacts: [
    	{
    		name: 'Michele',
    		avatar: '_1',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Fabio',
    		avatar: '_2',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: '_3',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Luisa',
    		avatar: '_4',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			}
    		],
    	},
    ]

  },

  methods:{
    getAvatar: function (contact) {
      let imgSrc = String("./img/avatar" + contact.avatar + ".jpg")
      return String(imgSrc)
    },
    getId: function (contact) {
      let id = String("conv-" + contact.name)
      return String(id)
    },
    activeConv2: function(contact){
      this.isActive = contact;
    },
    getDate: function(date) {
      let data = new Date(date);
      let hours = data.getHours();
      let minutes = data.getMinutes();

      return `${hours}:${minutes}`
    },
    getDateITA: function(mydate) {
      //console.log(mydate);
      let dateMsg = mydate.slice(11,16)
      return dateMsg
    },
    getActiveAvatar: function(active) {
      //console.log(active.avatar);
      if (active.avatar==undefined) {
        return "img/avatar_1.jpg"
      } else return "img/avatar"+active.avatar+".jpg";
    },
    firstActive: function() {
      isActiveAssign();
    },
    newMessageFn: function() {
      if (this.newMsgTxt != "") {
        const currentSelected = this.isActive.messages;
        let newMsgTxt = this.newMsgTxt;
        let newobj = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          text: newMsgTxt,
          status: 'sent',
        }
        currentSelected.push(newobj);
        this.newMsgTxt = "";

        setTimeout(() => {
          let newobjAnsw = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            text: 'ok',
            status: 'received',
          };

          currentSelected.push(newobjAnsw);
        }, 1000);
      }
    },
    getLastAccess: function(active){
      const messages = active.messages;
      const lastIndex = messages.length - 1;

      return messages[lastIndex].date;
    }

},
  created: function(){
    this.isActive = this.contacts[0];
    //console.log('ok');
  },

computed:{

}

})
