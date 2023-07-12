<script setup>
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
  }
})
const fetchRoles = (permiso = false) => {
  if (permiso) {
    console.log('Fetch roles')
  }
}
fetchRoles(props.isAdmin)
</script>

<template>
  <div class="row">
    <div class="col-xl-4">
      <!-- Profile picture card-->
      <div class="card mb-4 mb-xl-0">
        <div class="card-header">Profile Picture</div>
        <div class="card-body text-center">
          <!-- Profile picture image-->
          <img
            class="img-account-profile rounded-circle mb-2"
            src="assets/img/illustrations/profiles/profile-1.png"
            alt=""
          />
          <!-- Profile picture help block-->
          <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
          <!-- Profile picture upload button-->
          <button class="btn btn-primary" type="button">Upload new image</button>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          <div class="card-title">Change Password</div>
        </div>
        <div class="card-body p-5">
          <div class="card-subtitle mb-4">New passwords must contain at least 8 characters.</div>
          <form>
            <div class="mb-2">
              <label for="curPass" class="form-label">Current Password</label>
              <input type="password" class="form-control" id="curPass" />
            </div>
            <div class="mb-2">
              <label for="newPass" class="form-label">New Password</label>
              <input type="password" class="form-control" id="newPass" />
            </div>
            <div class="mb-2">
              <label for="confNewPass" class="form-label">Confirm New Password</label>
              <input type="password" class="form-control" id="confNewPass" />
            </div>
            <div class="text-end">
              <button class="btn btn-primary" type="submit">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-xl-8">
      <!-- Account details card-->
      <div class="card mb-4">
        <div class="card-header">Account Details</div>
        <div class="card-body">
          <form>
            <!-- Form Row-->
            <div class="row gx-3 mb-3">
              <!-- Form Group (first name)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputFirstName">First name</label>
                <input
                  class="form-control"
                  id="inputFirstName"
                  type="text"
                  placeholder="Enter your first name"
                  value="Valerie"
                />
              </div>
              <!-- Form Group (last name)-->
              <div class="col-md-6">
                <label class="small mb-1" for="inputLastName">Last name</label>
                <input
                  class="form-control"
                  id="inputLastName"
                  type="text"
                  placeholder="Enter your last name"
                  value="Luna"
                />
              </div>
            </div>
            <!-- Form Group (email address)-->
            <div class="mb-3">
              <label class="small mb-1" for="inputEmailAddress">Email address</label>
              <input
                class="form-control"
                id="inputEmailAddress"
                type="email"
                placeholder="Enter your email address"
                value="name@example.com"
              />
            </div>
            <!-- Form Group (Roles)-->
            <div class="mb-3" v-if="isAdmin">
              <label class="small mb-1">Role</label>
              <select class="form-select" aria-label="Default select example">
                <option value="">Select a role:</option>
                <option value="administrator">Administrator</option>
                <option value="registered">Usuario</option>
                <option value="edtior">Cliente</option>
              </select>
            </div>
            <!-- Submit button-->
            <button class="btn btn-primary" type="button">Save changes</button>
          </form>
        </div>
      </div>
      <div class="card" v-if="isAdmin">
        <div class="card-header"><div class="card-title">Delete Account</div></div>
        <div class="card-body p-5">
          <div class="card-subtitle mb-4">
            Deleting your account is a permanent action and cannot be undone. If you are sure you
            want to delete your account, select the button below.
          </div>
          <button class="btn btn-outline-danger" type="button">
            I understand, delete my account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
