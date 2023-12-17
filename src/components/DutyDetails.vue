<template>
    <div class="duty-details">
      <h1>Duty Details</h1>
      <div v-if="duty" class="note-card">
        <div class="card-content">
          <div class="title-bar">
            <h2>{{ duty.duty }}</h2>
            <div class="button-container">
              <button @click="redirectToEditForm" class="edit-button">Edit Duty</button>
              <button @click="redirectDeleteConfirm" class="delete-button">Delete Duty</button>
            </div>
          </div>
          <p class="description">{{ duty.description }}</p>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
</template>
  
<!-- <script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
  
interface Duty {
    id: string;
    duty: string;
    description: string;
    // Add other properties as needed
}
  
export default defineComponent({
    name: 'DutyDetails',
    setup() {
      const route = useRoute();
      const router = useRouter();
      const dutyId = ref<string | null>(null);
      const duty = ref<Duty | null>(null);
  
      const fetchDutyDetails = async () => {
        dutyId.value = route.params.dutyId as string;
  
        try {
          const token = localStorage.token;
          if (!token) {
            console.error('Access token not found. Please login.');
            // Handle token absence, e.g., redirect to login page
            return;
          }
  
          const headers = {
            Authorization: `Bearer ${token}`,
            'Context-Type': 'application/json',
          };
  
          const response = await axios.get(`http://localhost:3000/api/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${dutyId.value}`, { headers });
          duty.value = response.data;
        } catch (error) {
          console.error('Error fetching duty details', error);
        }
      };
  
      onMounted(fetchDutyDetails);
  
      const redirectToEditForm = () => {
        if (duty.value) {
          const editDutyRoute = `/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${duty.value.id}/edit`;
          router.push(editDutyRoute);
        }
      };
  
      const redirectDeleteConfirm = () => {
        if (duty.value) {
          const deleteDutyRoute = `/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${duty.value.id}/delete`;
          router.push(deleteDutyRoute);
        }
      };
      

      return {
        duty,
        redirectToEditForm,
        redirectDeleteConfirm,
      };
    },
  });
</script> -->

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
  
interface Duty {
  id: string;
  duty: string;
  description: string;
  // Add other properties as needed
}

export default defineComponent({
  name: 'DutyDetails',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const dutyId = ref<string | null>(null);
    const duty = ref<Duty | null>(null);

    const fetchDutyDetails = async () => {
      dutyId.value = route.params.dutyId as string;
  
      try {
        const token = localStorage.token;
        if (!token) {
          console.error('Access token not found. Please login.');
          // Handle token absence, e.g., redirect to the login page
          return;
        }
  
        const headers = {
          Authorization: `Bearer ${token}`,
          'Context-Type': 'application/json',
        };
  
        const response = await axios.get(`http://localhost:3000/api/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${dutyId.value}`, { headers });
        
        duty.value = response.data;
      } catch (error) {
        console.error('Error fetching duty details', error);
        router.replace({ name: 'NotFound' });
      }
    };
  
    onMounted(fetchDutyDetails);

    const redirectToEditForm = () => {
        if (duty.value) {
          const editDutyRoute = `/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${duty.value.id}/edit`;
          router.push(editDutyRoute);
        }
      };
  
      const redirectDeleteConfirm = () => {
        if (duty.value) {
          const deleteDutyRoute = `/workshop/${route.params.id}/workers/${route.params.workerId}/duties/${duty.value.id}/delete`;
          router.push(deleteDutyRoute);
        }
      };

    return {
      duty,
      redirectToEditForm,
      redirectDeleteConfirm,
    };
  },
});
</script>
  
<style lang="scss" scoped>
// .duty-details {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 20px;
// }

// .note-card {
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   padding: 20px;
//   margin-top: 20px;
//   width: 70%; /* Adjust the width as needed */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// .card-content {
//   text-align: left;
// }

// h2 {
//   margin-bottom: 10px;
//   font-size: 1.5em;
// }

// p {
//   line-height: 1.6;
// }

.duty-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.note-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  width: 70%; /* Adjust the width as needed */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-content {
  text-align: left;
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

h2 {
  margin: 0; /* Reset margin */
  font-size: 1.5em;
}

.description {
  line-height: 1.6;
  margin-bottom: 20px; /* Space between description and buttons */
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

// .button-container {
//   display: flex;
//   flex-direction: column; /* Align buttons vertically */
//   justify-content: center; /* Align buttons vertically in the middle */
//   align-items: flex-end; /* Align buttons to the right */
//   height: 100%; /* Occupy full height of the container */
// }

.edit-button,
.delete-button,
.create-button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.edit-button:hover,
.delete-button:hover,
.create-button:hover {
  background-color: #000;
  color: #fff;
}
</style>