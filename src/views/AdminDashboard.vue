<template>
    <div class="dashboard">
        <h1>Admin Dashboard</h1>
        <router-link to="/registeradmin" class="button">Register Admin User</router-link>
        <RouterLink to="/admin/createWorkshop" class="button">Create a workshop</RouterLink>
        <RouterLink to="/admin/editWorkshop" class="button">Update existing workshop</RouterLink>
      <!-- Other admin functionalities -->

        <WorkshopList @workshopSelected="onWorkshopSelected" v-if="showWorkshopList" />
    
        <!-- EditWorkshop component to edit the selected workshop -->
        <EditWorkshop v-if="showEditWorkshop" :workshopId="selectedWorkshopId" />
    </div>
</template>
  
<script>
import WorkshopList from '@/components/WorkshopList.vue'; // Import WorkshopList component
import EditWorkshop from '@/components/AdminEditWorkshop.vue';

  export default {
    name: 'AdminDashboard',
    components: {
        WorkshopList,
        EditWorkshop,
    },
    data() {
        return {
        showWorkshopList: false,
        showEditWorkshop: false,
        selectedWorkshopId: null,
        };
    },
    methods: {
        onWorkshopSelected(workshopId) {
        this.selectedWorkshopId = workshopId;
        this.showEditWorkshop = true;
        },
  },
};
</script>
  
<style lang="scss" scoped>
h1 {
  text-align: center;
  margin-top: 50px; 
  font-size: 2.5rem; 
}
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding-top: 20px; 
  text-align: center;
}

.button {
  display: block;
  width: 200px; 
  margin-bottom: 10px; 
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  text-align: center;
}

.button:hover {
  background-color: #000;
  color: #fff;
}

</style>