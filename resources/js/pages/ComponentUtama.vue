<template>
    <div>
        <cost-detail/>
        <div>
            <button>Cancel</button>
            <button>Save as Draft</button>
            <button>Submit</button>
        </div>
    </div>
</template>

<script>
    import CostDetail from "../components/ComponentB";
    export default {
        components: {CostDetail},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
