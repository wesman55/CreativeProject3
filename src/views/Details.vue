<template>
<div class="body">
    <h1 v-if="this.$root.$data.current != null"> {{this.$root.$data.current.name }} </h1>
    <div class="columns">
        <div class="columnitem pic">
            <img v-if="this.$root.$data.current != null" :src="'/images/' + this.$root.$data.current.image">
        </div>
        <div class= "columnitem">
            <h2>Current Ranking: {{ranked()}} of 50 </h2>
            <h2>Average Rating:  {{this.$root.$data.current.rating}} of 10 </h2>
            <h2>Num of Current Votes: {{this.$root.$data.current.numvoters}} </h2>
            <div class="bottom">
                <h2>Give a Rating: </h2>
                <star-rating @rating-selected ="setRating" :increment="0.5" :max-rating="10" text-class="stars"></star-rating>
            </div>    
        </div>
    </div>
    
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'Details',
  components: {
      StarRating
  },
  methods: {
      ranked() {
          const copy = [...this.$root.$data.products]
          copy.sort(function(a,b) {
              return parseFloat(b.rating)-parseFloat(a.rating)
          })
          return copy.findIndex((element) => element == this.$root.$data.current) + 1
      },
      setRating(rating) {
          if (this.$root.$data.current.votes == null) {
            this.$root.$data.current.votes = [];
            for (var i = 0; i < parseInt(this.$root.$data.current.numvoters); ++i) {
                this.$root.$data.current.votes.push(this.$root.$data.current.rating)
            }
          }
          this.$root.$data.current.votes.push(rating)
          var total = 0;
          for (i = 0; i < this.$root.$data.current.votes.length; ++i) {
                total += this.$root.$data.current.votes[i]
          }
          this.$root.$data.current.rating = (total/(this.$root.$data.current.votes.length)).toFixed(2)
          this.$root.$data.current.numvoters += 1
          
      }
  }
  
}

</script>

<style scoped>
.body {
    text-align: center;
}

.columns {
    display: flex;
}

img {
    max-width:100%;
    object-fit: cover;
}

.columnitem {
    text-align: center;
    width: 50%;
    align-items: center;
}

.pic {
    display:flex;
}

.bottom {
    margin-top: 100px;
}

b {
    font-weight: bold;
}

.stars {
    display:flex;
    flex-wrap: wrap;
}
</style>