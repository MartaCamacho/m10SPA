
export default {
  name: 'ClientsComponent',
  data() {
    return {
      clientList: ['Luis', 'Marina', 'Londres', 'Josh']
    };
  },
  methods: {
    Show(clientId) {
      this.$router.push({
        name: 'details',
        params: {
          theId: clientId
        }
      });
    }
  }
}

