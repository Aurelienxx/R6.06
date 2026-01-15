<script setup>
  import { useRouter } from 'vue-router';
  import footerComponent from './components/essentials/footer/footer.vue';
  import headerComponent from './components/essentials/header/header.vue';

const router = useRouter();
</script>

<template>
    <headerComponent />
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footerComponent />
</template>


<style scoped>

.main-content {
  display: flex;
  justify-content: center;  
  align-items: center;      
  
  min-height: calc(100vh - 80px - 60px);
  margin: 0 auto;
  padding: 20px;            
  box-sizing: border-box;
}
</style>
