<template>
    <div>
        <div class="col-12 p-3">
            <h4 class="px-3">3rd Party Instruction</h4>
            <div class="card mx-3 my-3">
                <!--Component A to be called in the card header-->
                <div class="card-header bg-white p-0">
                    <component-a/>
                </div>
                <!--Component B to be called in the card body-->
                <div class="card-body bg-white p-0">
                    <component-b/>
                </div>
                <!--Button form-->
                <form method="POST" @submit.prevent="submitInstruction()">
                    <div class="row mx-0 my-3">
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <custom-button class="icon-center" btn_class="btn py-2" label="Cancel"/>
                            <custom-button class="button-size icon-center" btn_class="btn border py-2" label="Save As Draft"/>
                            <button type="submit" class="button-size icon-center btn btn-info text-light p-0 px-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import ComponentA from "../components/ComponentA";
    import ComponentB from "../components/ComponentB";
    import CustomButton from "../components/sub-components/CustomButton";
    export default {
        components: {ComponentB,CustomButton,ComponentA},
        methods:{
            //Action when submitting
            submitInstruction(){
                axios.post('./api/task', {
                    description: "",
                    qty: 0,
                    shp: "SHP",
                    unitPrice: "",
                    discount: 0,
                    currency: "",
                    GST: 0,
                    mitme: "Select an Option",
                })
                alert('Adding Data');
            }
        }

    }

</script>

<style scoped>
tbody {
    border-top: none !important;
}

.icon-center{
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
}
.button-size{
    height: 100%;
    width: 10%;
}
</style>
