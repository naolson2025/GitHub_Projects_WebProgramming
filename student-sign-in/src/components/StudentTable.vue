<template>
    <div>
        <!-- Display section for students -->
        <div class="card student-list m-2 p-2">
            <h4 class="card-title">Student</h4>
            <div id="student-table">
                <table class="table">
                    <tr>
                        <th>Name</th>
                        <th>StarID</th>
                        <th>Present?</th>
                    </tr>

                    <!--use a for loop to add every student in the students data list to a table row-->
                    <tr v-for="student in students" v-bind:class="'present-' + student.present">
                        <td>{{ student.name }}</td>
                        <td>{{ student.starID }}</td>
                        <td> <input type="checkbox" v-model="student.present" v-on:change="checked(student)"> </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentTable",
        props: {
            students: Array
        },
        methods: {
            checked(student){
                this.$emit('student-present', student)
            }
        }
    }
</script>

<style scoped>
    #student-table{
        max-height: 500px;
        overflow: scroll;
    }

    .present-true{
        color: gray;
        font-style: italic;
    }

    .present-false{
        font-weight: bold;
    }
</style>