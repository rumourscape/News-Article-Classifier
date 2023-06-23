<script setup lang="ts">
import { ref, onMounted } from 'vue'

    var url = ref("")
    var categories = ref([])
    var history = ref()
    
    function classify() {
        console.log(url.value)
        const fetchRes = fetch("/api/url", { method:'POST', 
            headers: {
                'Content-Type': 
                    'application/json;charset=utf-8'
            }, body:JSON.stringify({'url': url.value}) })
        fetchRes.then(res =>
            res.json()).then(d => {
                categories.value = d
                History()
                console.log(categories.value)
            })
    }

    function History() {
        const fetchRes = fetch("/api/history")
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d)
                history.value = d.reverse()
            })
    }

    onMounted(() => {
        History()
    })

</script>

<template>
<main id="Home" style="align-items: center;">
    <h1>News Article Classifier</h1>
    <div style="margin-top: 10%; display: block;">
        <h2>Search</h2>
        <input type="url" v-model=url placeholder="Paste link" style="display: block;"/>
        <fluent-button type="submit" @click="classify" appearance="accent" style="margin-top: 2%;">Go!</fluent-button>
    </div>
    <h2 v-if="categories.length>0 ">Category: {{ categories }}</h2>
    <div style="display: flex; margin-top: 5%; float: left;">
        <fluent-card style="height: 400px; width: 500px; padding: 20px; text-align: start;">
                <h2>Instructions</h2>
                <fluent-divider/>
                <p>1. Find an Article that you want to categorize</p>
                <p>2. Copy its web link</p>
                <p>3. Paste the link above and search</p>
        </fluent-card>
        <fluent-card class="outer-card">
            <h2>History</h2>
            <fluent-divider/>
            <div style="overflow-y: scroll; max-height: 250px; margin-top: 10px;">
                <fluent-card class="inner-card" v-for="item in history">
                    <p>Article: <a href="{{item.url}}">{{ item.url }}</a></p>
                    <p>Category: {{ item.category }}</p>
                </fluent-card>
            </div>
        </fluent-card>
    </div>
    
    <h3 style="color: lightgray;">&copy; Advait Joglekar</h3>
</main>
</template>

<style scoped>
.outer-card {
    width: 500px;
    margin-left: 20%;
    padding: 20px;
    height: 400px;
    text-align: start;
}
.inner-card {
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.input-container {
  position: relative;
}

input {
  height: 35px;
  width: 1000px;
  color: black;
  background-color: aliceblue;
  border: 1px solid #000000;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 5px;
}

</style>
