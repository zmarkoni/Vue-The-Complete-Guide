<template>
  <div>
    <base-dialog
      v-if="inputIsInvalid"
      title="Invalid Input"
      @close="confirmError"
    >
      <template #default>
        <p>Input value is not valid</p>
        <p>Please check all inputs and add some characters!</p>
      </template>
      <template #actions>
        <button @click="confirmError">OK</button>
      </template>
    </base-dialog>

    <base-card>
      <form @submit.prevent="submitData">
        <div class="form-control">
          <label for="title">Title</label>
          <input id="title" name="title" type="text" ref="enteredTitle" />
        </div>
        <div class="form-control">
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            row="3"
            ref="enteredDesc"
          />
        </div>
        <div class="form-control">
          <label for="link">Link</label>
          <input id="link" name="link" type="url" ref="enteredLink" />
        </div>
        <div>
          <base-button type="submit">Add Resource</base-button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: { BaseDialog },
  emits: ['set-data'],
  inject: ['addResource'],
  data() {
    return {
      inputIsInvalid: false
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.enteredTitle.value;
      const desc = this.$refs.enteredDesc.value;
      const link = this.$refs.enteredLink.value;

      if (title.trim() === '' || desc.trim() === '' || link.trim() === '') {
        this.inputIsInvalid = true;
        return;
      }
      this.addResource(title, desc, link);
    },
    confirmError() {
      this.inputIsInvalid = false;
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
