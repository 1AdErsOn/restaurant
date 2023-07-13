<script setup>
import { reactive, ref } from 'vue';
import OwnCard from '../OwnCard.vue'

const props = defineProps({
  isAdmin: {
    required: true,
    type: Boolean,
    default: false
  },
  userId: {
    required: false,
    type: Number,
    default: 0
  },
})
const fetchRoles = (permiso = false) => {
  if (permiso) {
    console.log('Fetch roles')
  }
}
fetchRoles(props.isAdmin)
const image = ref('')
const modelPass = reactive({
  curPass: '',
  newPass: '',
  confNewPass: ''
})
const modelUser = reactive({
  firstName: '',
  lastName: '',
  email: '',
  role: ''
})
const handleUpdatePass = () => {
  if (
    modelPass.curPass == '' ||
    modelPass.newPass == '' ||
    modelPass.confNewPass == ''
  ) {
    //alert 
    return
  } else if (modelPass.newPass !== modelPass.confNewPass) {
    //alert
    return
  }
  console.log(modelPass)
  //store and fetch to updatePass
}
const handleUpdateUser = () => {
  if (
    modelUser.firstName == '' ||
    modelUser.lastName == '' ||
    modelUser.email == '' ||
    modelUser.role == ''
  ) {
    //alert 
    return
  }
  console.log(modelUser)
  //store and fetch to updateUser
}
const handleDeleteUser = () => {
  console.log(props.userId)
  //store and fetch to deleteUser
}
</script>

<template>
  <div class="row">
    <div class="col-xl-4">
      <!-- Profile picture card-->
      <OwnCard>
        <template #head>Profile Picture</template>
        <template #body>
          <div class="text-center">
            <!-- Profile picture image-->
            <img
              class="img-account-profile rounded-circle mb-2"
              :src="image"
              alt=""
            />
            <!-- Profile picture help block-->
            <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
            <!-- Profile picture upload button-->
            <button class="btn btn-outline-primary" type="button">Upload new image</button>
          </div>
        </template>
      </OwnCard>
      <!-- Profile reset pass-->
      <OwnCard class="mt-3">
        <template #head>Change Password</template>
        <template #body>
          <div class="p-5">
            <div class="card-subtitle mb-4">New passwords must contain at least 8 characters.</div>
            <form @submit.prevent="handleUpdatePass">
              <div class="mb-2">
                <label for="curPass" class="form-label">Current Password</label>
                <input v-model="modelPass.curPass" type="password" class="form-control" id="curPass" />
              </div>
              <div class="mb-2">
                <label for="newPass" class="form-label">New Password</label>
                <input v-model="modelPass.newPass" type="password" class="form-control" id="newPass" />
              </div>
              <div class="mb-2">
                <label for="confNewPass" class="form-label">Confirm New Password</label>
                <input v-model="modelPass.confNewPass" type="password" class="form-control" id="confNewPass" />
              </div>
              <div class="text-end">
                <button class="btn btn-outline-primary" type="submit">Reset Password</button>
              </div>
            </form>
          </div>
        </template>
      </OwnCard>
    </div>
    <div class="col-xl-8">
      <!-- Account details card-->
      <OwnCard>
        <template #head>Account Details</template>
        <template #body>
          <form class="p-3" @submit.prevent="handleUpdateUser">
            <!-- Form Row-->
            <div class="row gx-3 mb-3">
              <!-- Form Group (first name)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputFirstName">First name</label>
                <input
                  v-model="modelUser.firstName"
                  class="form-control"
                  id="inputFirstName"
                  type="text"
                  placeholder="Enter your first name"
                />
              </div>
              <!-- Form Group (last name)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputLastName">Last name</label>
                <input
                  v-model="modelUser.lastName"
                  class="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <!-- Form Group (email address)-->
            <div class="mb-3">
              <label class="small mb-1" for="inputEmailAddress">Email address</label>
              <input
                v-model="modelUser.email"
                class="form-control"
                id="inputEmailAddress"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <!-- Form Group (Roles)-->
            <div class="mb-3" v-if="isAdmin">
              <label class="small mb-1">Role</label>
              <select v-model="modelUser.role" class="form-select">
                <option value="">Select a role:</option>
                <option value="admin">Administrator</option>
                <option value="user">Usuario</option>
                <option value="client">Cliente</option>
              </select>
            </div>
            <!-- Submit button-->
            <button class="btn btn-outline-primary" type="button">Save changes</button>
          </form>
        </template>
      </OwnCard>
      <!-- Delete Account card-->
      <OwnCard v-if="isAdmin" class="mt-3">
        <template #head>Delete Account</template>
        <template #body>
          <div class="p-5">
            <div class="card-subtitle mb-4">
              Deleting your account is a permanent action and cannot be undone. If you are sure you
              want to delete your account, select the button below.
            </div>
            <button class="btn btn-outline-danger" type="button" @click="handleDeleteUser">
              I understand, delete my account
            </button>
          </div>
        </template>
      </OwnCard>
    </div>
  </div>
</template>
