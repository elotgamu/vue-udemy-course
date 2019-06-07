<template>
    <div>
        <div class="form-group">
            <label for="">First Name:</label>
            <input class="form-control" type="text" name="" id="" :value="first_name" v-on:input="nameChanged(true, $event)">
        </div>

        <div class="form-group">
            <label for="">First Name:</label>
            <input class="form-control" type="text" name="" id="" :value="last_name" v-on:input="nameChanged(false, $event)">
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        data() {
            return {
            }
        },
        methods: {
            nameChanged(isFirstName, event) {
                let name = ''
                if (isFirstName) {
                    name = event.target.value + ' ' + this.last_name
                } else {
                    name = this.first_name + ' ' +  event.target.value
                }
                this.value = name;
                this.$emit('input', name)
            }
        },
        computed: {
            first_name() {
                return this.value.split(' ')[0];
            },
            last_name() {
                return this.value.split(' ')[1];
            }
        },
    }
</script>

<style scoped>

</style>