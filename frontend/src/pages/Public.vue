<template>
  <q-page class="flex flex-center">
    <div class="full-width text-center">
      <div class="row">
        <div class="col">
          <h4>Public</h4>
        </div>
      </div>

      <BackendInteraction />
    </div>
  </q-page>
</template>

<script>
import BackendInteraction from "../components/BackendInteraction";

export default {
  components: {
    BackendInteraction
  }
};
</script>
