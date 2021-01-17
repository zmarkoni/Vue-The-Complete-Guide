<template>
  <base-card class="tabsButtons">
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    };
  },
  data() {
    return {
      selectedTab: 'stored-resources', //selectedTab will be an Component name
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official-guide',
          description: 'The official vue.js docs',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: link
      };

      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(
        res => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);

    }
  },
  computed: {
    // toggle active class for buttons
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'active';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'active';
    }
  }
};
</script>
