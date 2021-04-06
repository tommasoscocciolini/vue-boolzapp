var app = new Vue({
  el: '#root',
  avatarURL: '',
  activeChat: 'active-conv',
  searchConv: '',
  data:{
    index: 0,
    isActive: '',
    newMsgTxt: '',
    search: '',
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

      if (messages.length) {
        const lastIndex = messages.length - 1;

        return messages[lastIndex].date.slice(11,16);
      } else {
        return '';
      }

    },
    getLastMsg: function(active){
      const messages = active.messages;
      const lastIndex = messages.length - 1;

      return messages[lastIndex].text;
    },
    showOpt: function(index){
      this.isActive.messages = this.isActive.messages.map((message, i) => {
        if (index == i) {
          //console.log(message);
          return {
            ...message,
            showOptions: true,
          }

        } else {
          return {
            ...message,
            showOptions: false,
          }
          console.log(message);
        }
      });
      // console.log(msg);
      // this.isActive.messages[i],
      //
      // console.log(this.isActive.messages[i]),
    },
    showOpt2: function(index){
      this.isActive.messages = this.isActive.messages.map((message, i) => {
        if (index == i) {
          console.log(message);
          return {
            ...message,
            showOptions2: true,
          }

        } else {
          return {
            ...message,
            showOptions2: false,
          }
          console.log(message);
        }
      });
      // console.log(msg);
      // this.isActive.messages[i],
      //
      // console.log(this.isActive.messages[i]),
    },
    deleteMsg: function(index) {
      //console.log(this.isActive.messages[index]);
      this.isActive.messages[index]
      this.isActive.messages.splice(index, 1);
    },
    closeTabs: function() {
      this.isActive.messages = this.isActive.messages.map((message, i) => {
        return {
          ...message,
          showOptions: false,
        }
      });
      this.isActive.messages = this.isActive.messages.map((message, i) => {
        return {
          ...message,
          showOptions2: false,
        }
      });
    },

},
  created: function(){
    this.isActive = this.contacts[0];
    //console.log('ok');
  },


})
