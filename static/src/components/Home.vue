<script setup lang="ts">

</script>

<template>
<main style="align-items: center;">
    <h1>News Article Classifier</h1>
    <div style="margin-top: 10%; display: block;">
        <fluent-text-field type="url" placeholder="Paste link" style="display: block;">
            <h2>Search</h2>
        </fluent-text-field>
        <fluent-button type="submit" appearance="accent" style="margin-top: 2%;">Go!</fluent-button>
    </div>
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
            <div style="overflow-y: scroll; max-height: 300px; margin-top: 10px;">
                <fluent-card class="inner-card">
                    <p>Article: </p>
                    <p>Category: </p>
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
</style>
