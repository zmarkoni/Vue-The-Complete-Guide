<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiances">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && errorMessage">{{errorMessage}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">No stored experiances found, start adding some Survey results!</p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  //props: ['results'],
  data() {
    return {
      results:[],
      isLoading: false,
      errorMessage: null
    };
  },
  components: {
    SurveyResult,
  },
  methods: {
    loadExperiances() {
      this.isLoading = true;
      this.errorMessage = null;
      // for GET we don't need any configuration since everything is set by default
      const fetchData = fetch('https://vue-http-demo-5c552-default-rtdb.firebaseio.com/surveys.json');
      fetchData.then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        //console.log(data);
        const resultsTemp = [];
        for(const id in data) {
          resultsTemp.push({
            id: id, 
            name: data[id].name,
            rating: data[id].rating,
            });
        }
        this.results = resultsTemp;
        this.isLoading = false;
      }).catch((error) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to fetch data with message: ' + error.message;
      });
    }
  }, 
  mounted() {
    this.loadExperiances();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>