<template>
    <div>
        <div class="row">
            <div class="col-12 row">
                <div class="col-lg-2">
                    <div class="btn-group" role="group">
                        <custom-button btn_class="btn btn-white h-auto border m-2 py-2" v-model="instruction" data-bs-toggle="dropdown" aria-expanded="false" icon_class="fas fa-truck" label="Logistic Instruction" />
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <li>
                                <custom-button btn_class="btn" icon_class="fas fa-truck" label=" Logistic Instruction" />
                            </li>
                            <li>
                                <custom-button btn_class="btn" icon_class="fas fa-wrench" label="Service Instruction" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-1 text-middle mt-3">
                <span class="badge color-grey text-black border rounded-pill instruction-badge normal" style="display: inline-block; width: 150px">
                    Draft
                </span>
                </div>
            </div>
        </div>
        <form>
            <div class="row mx-0 my-3">
                <!-- baris kosong -->
                <div class="col-lg-2" />
                <!-- baris tengah -->
                <div class="col-lg-8" style="padding-right:20px; border-right: 1px solid #ccc;">
                    <div class="row">
                        <div class="col-3">
                            <label>Assigned Vendor</label>
                            <select class="form-select" v-model="vendor">
                                <option selected disabled>Enter Vendor</option>
                                <option value="Co Ltd">Amarit & Asociates Co ltd</option>
                                <option value="Logistic">Amarit & Asociates Logistic Co ltd</option>
                                <option value="Alphatrans">Alphatrans Pte Ltd</option>
                            </select>
                        </div>

                        <div class="col-3">
                            <label for="attention">Attention Of</label>
                            <input id="attention" v-model="attention" class="form-control" type="text" placeholder="Enter Attention Of">
                        </div>
                        <div class="col-3">
                            <label for="quotation">Quotation Of</label>
                            <input id="quotation" v-model="quotation" class="form-control" type="text" placeholder="Enter Quotation Of">
                        </div>
                        <div class="col-3">
                            <label>Invoice To</label>
                            <select class="form-select" v-model="invoice">
                                <option selected disabled>Select an Option</option>
                                <option value="LLS">Marubeni-Itochu Tubulars Middle East Pipes L.L.S (MITME)</option>
                                <option value="PLC">Marubeni-Itochu Tubulars Europe Plc (MITME)</option>
                            </select>
                        </div>

                        <div class="col-12">
                            <label>Vendor Address</label>
                            <select class="form-select" v-model="address">
                                <option selected disabled>Enter Vendor Address</option>
                                <option value="address">Sesetan, Denpasar, Bali, Indonesia</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="col-12">
                        <label>Customer - Contract</label>
                        <select class="form-select" v-model="contract">
                            <option selected disabled>Select Customer</option>
                            <option value="Hail & Ghasha">Hail & Ghasha</option>
                            <option value="OFFSHORE">OFFSHORE</option>
                            <option value="ONSHORE">ONSHORE</option>
                            <option value="Sour Gas">Sour Gas</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="po">Customer PO No.</label>
                        <input id="po" class="form-control" v-model="poNo" type="text" placeholder="Enter Customer PO">
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import CustomButton from "../components/sub-components/CustomButton";
export default {
    name: "ComponentA",
    components: {
        CustomButton,
    },
    data(){
        return{
            instruction: "Service Instruction",
            vendor: "Enter Vendor",
            attention: "",
            quotation: "",
            invoice: "Select an Option",
            address: "Enter Vendor Address",
            contract: "Select Customer",
            poNo: "",
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
.normal {
    font-weight: normal;
}
.color-grey {
    background-color: #EEEEEE;
}
.text-middle{
    vertical-align: middle;
}
</style>
