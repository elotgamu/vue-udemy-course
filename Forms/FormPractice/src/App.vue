<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- <div class="form-group">
                        <label for="">First Name: </label>
                        <input class="form-control" type="text" name="" id="" v-model="first_name">
                    </div>

                    <div class="form-group">
                        <label for="">Last Name:</label>
                        <input class="form-control" type="text" name="" id="" v-model="last_name">
                    </div> -->

                    <FullName v-model="full_name"></FullName>

                    <div class="form-group">
                        <label for="">Email:</label>
                        <input type="text" class="form-control" name="" id="" v-model="email">
                    </div>

                    
                    <div class="form-group">
                        <label for="">Password:</label>
                        <input type="password" class="form-control" name="" id="" v-model="password">
                    </div>

                    <div class="form-group">
                        <label for="">Store data:</label>
                        Yes <input type="radio" value="true" v-model="storedata">
                        No <input type="radio" value="false" v-model="storedata">
                    </div>

                    <div>
                        <button class="btn-primary" type="submit" v-on:click.prevent="submit()">Submit data</button>
                    </div>


                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <!-- <p>Full Name: {{first_name}} {{last_name}}</p> -->
                        <p>Full Name: {{full_name}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storedata}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import FullName from './components/FullName.vue'
    export default {
        components: {
            FullName
        },
        data() {
            return {
                // first_name: '',
                // last_name: '',
                full_name: 'Eleazar Gaitan',
                email: '',
                password: '',
                storedata: false,
                submitted: false
            }
        },
        methods: {
            submit() {
                this.submitted = true
            }
        },
    }
</script>

<style>
</style>
