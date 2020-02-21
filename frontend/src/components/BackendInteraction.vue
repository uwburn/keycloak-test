<template>
  <div>
    <div class="row">
      <div class="col">
        <q-btn @click="publicRequest">
          Public request
        </q-btn>
      </div>
      <div class="col">
        <q-btn @click="privateRequest">
          Private request
        </q-btn>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div>{{ status }} - {{ statusText }}</div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div>{{ response }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "",
      statusText: "",
      response: ""
    };
  },
  methods: {
    async request(path) {
      try {
        let res = await this.$axios.get(path);
        this.status = res.status;
        this.statusText = res.statusText;
        this.response = res.data;
      }
      catch(err) {
        this.status = err.status;
        this.statusText = err.statusText;
        this.response = err.data;
      }
    },
    async publicRequest() {
      await this.request("/public");
    },
    async privateRequest() {
      await this.request("/protect");
    }
  }
};
</script>
