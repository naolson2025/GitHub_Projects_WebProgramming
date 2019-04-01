<template>
    <div>
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <!-- Data entry section for students-->
        <div class="card add-student m-2 p-2">
            <form>
                <h4 class="card-title">Add a new student</h4>

                <div class="form-group">
                    <!-- Name entry for student, trim the extra white spaces from user entry -->
                    <label for="name">Name</label>
                    <input id="name" class="form-control" v-model.trim="newStudentName">
                </div>

                <div class="form-group">
                    <!-- StarID entry for student, trim the extra white space from user entry -->
                    <label for="starID">Star ID</label>
                    <input id="starID" class="form-control" v-model.trim="newStarID">
                </div>

                <button class="btn btn-primary" v-on:click.prevent="addStudent">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewStudentForm",
        data(){
            return {
                newStudentName: '',
                newStarID: '',
                errors: []
            }
        },
        methods: {
            // Adds a student to the display grid when the method is called
            addStudent() {
                this.errors = [];
                if (this.newStudentName && this.newStarID) {
                    let student = {name: this.newStudentName, starID: this.newStarID, present: false};
                    this.$emit('student-added', student);
                    // make the newStudentName and newStarID blank after entry
                    this.newStudentName = '';
                    this.newStarID = '';
                } else {
                    this.errors.push('Name and StarID are required.')
                }
            }
        }
    }
</script>

<style scoped>

</style>