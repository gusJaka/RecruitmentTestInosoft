<template>
    <div>
        <div class="h4 normal mx-3 pt-3 color-cyan">
            Cost Detail
            <div class="fa-solid fa-chevron-down"></div>
        </div>

        <table class="table my-0">
            <thead class="table-head text-light">
            <tr>
                <th width="12%">
                    <div class="d-inline-flex color-black normal">
                        Description
                    </div>
                </th>
                <th width="7%">
                    <div class="d-inline-flex color-black normal">
                        QTY
                    </div>
                </th>
                <th width="8%">
                    <div class="d-inline-flex color-black normal">
                        UOM
                    </div>
                </th>
                <th width="12%">
                    <div class="d-inline-flex color-black normal">
                        Unit Price
                    </div>
                </th>
                <th width="10%">
                    <div class="d-inline-flex color-black normal">
                        Discount (%)
                    </div>
                </th>
                <th>
                    <div class="d-inline-flex color-black normal">
                        VAT(%)
                    </div>
                </th>
                <th><div class="d-inline-flex"></div></th>
                <th width="10%">
                    <div class="d-inline-flex color-black normal">
                        Currency
                    </div>
                </th>
                <th width="10%" class="text-right">
                    <div class="d-inline-flex color-black normal">
                        VAT Amount
                    </div>
                </th>
                <th width="8%" class="text-right">
                    <div class="d-inline-flex color-black normal">
                        Sub Total
                    </div>
                </th>
                <th width="8%" class="text-right">
                    <div class="d-inline-flex color-black normal">
                        Total
                    </div>
                </th>
                <th width="14%">
                    <div class="d-inline-flex color-black normal">
                        Charge To
                    </div>
                </th>
                <th><div class="d-inline-flex"></div></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(cost, index) in costs" :key="index">
                <td><input id="desc" class="form-control" type="text" v-model="cost.description" placeholder="Enter Description"></td>
                <td><input id="qty" class="form-control" type="number" v-model="cost.qty" placeholder="Enter"></td>
                <td><select v-model="cost.shp" class="form-select">
                    <option selected>SHP</option>
                </select></td>
                <td><input id="unitPrice" class="form-control" type="text" v-model="cost.unitPrice" placeholder="Enter Unit Price"></td>
                <td><input id="discount" class="form-control" type="number" v-model="cost.discount" placeholder="0"></td>
                <td><input id="gst" class="form-control" type="number" v-model="cost.GST" placeholder="0"></td>
                <td class="icon-center"><i class="fas fa-arrow-right"></i></td>
                <td><select class="form-select" id="currency" v-model="cost.currency" >
                    <option selected disabled></option>
                    <option value="AED">AED</option>
                    <option value="USD">USD</option>
                </select></td>
                <td class="text-right text-middle">{{getVAT(index)}}</td>
                <td class="text-right text-middle">{{getSubTotal(index)}}</td>
                <td class="text-right text-middle">{{getTotal(index)}}</td>
                <td><select class="form-select" v-model="cost.mitme">
                    <option selected disabled>Select an Option</option>
                    <option value="MITME">MITME</option>
                    <option value="Customer">Customer</option>
                </select></td>
                <td><custom-button btn_class="btn h-auto" class="table-head" @btnClick="deleteCost(index, cost)" icon_class="fas fa-minus"/></td>
            </tr>

            <tr class="white-border">
                <td class="align-right" colspan="7" rowspan="2">Exchange Rate <b>1 USD = 3.6725 AED</b></td>
                <td><b>AED</b> (Total)</td>
                <td class="text-right">
                    <p class="text-right" v-if="costs.currency==='AED'">{{getVAT}}</p>
                    <p class="text-right" v-else-if="costs.currency==='USD'">{{currencyVAT}}</p>
                    <p class="text-right" v-else>0.00</p>
                </td>
                <td>
                    <p class="text-right" v-if="costs.currency==='AED'">{{getTotal}}</p>
                    <p class="text-right" v-else-if="costs.currency==='USD'">{{currencyResult}}</p>
                    <p class="text-right" v-else>0.00</p>
                </td>
                <td>
                    <p class="text-right" v-if="costs.currency==='AED'">{{getTotal}}</p>
                    <p class="text-right" v-else-if="costs.currency==='USD'">{{currencyResult}}</p>
                    <p class="text-right" v-else>0.00</p>
                </td>
                <td rowspan="2"></td>
                <td rowspan="2" class="icon-center"><custom-button @btnClick="addCost" btn_class="btn btn-info h-auto" icon_class="fas fa-plus"/></td>
            </tr>

            <tr class="white-border">
                <td><b>USD</b> (Total)</td>
                <td class="text-right">
                    <p class="text-right" v-if="costs.currency==='USD'">{{getVAT}}</p>
                    <p class="text-right" v-else-if="costs.currency==='AED'">{{currencyVAT}}</p>
                    <p class="text-right" v-else>0.00</p>
                </td>
                <td>
                    <p class="text-right">{{getAllSubTotal}}</p>
                </td>
                <td>
                    <p class="text-right" v-if="costs.currency==='USD'">{{getTotal}}</p>
                    <p class="text-right" v-else-if="costs.currency==='AED'">{{currencyResult}}</p>
                    <p class="text-right" v-else>0.00</p>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CustomButton from "./sub-components/CustomButton";
export default {
    components:{
        CustomButton,
    },
    name: "ComponentA",
    data(){
        return{
            description: "",
            uom: "",
            arrresult:[{res : 0}],
            costs:[
                {
                    description: "",
                    qty: 0,
                    shp: "SHP",
                    unitPrice: "",
                    discount: 0,
                    currency: "",
                    GST: 0,
                    mitme: "Select an Option",
                },
                {
                    description: "",
                    qty: 0,
                    shp: "SHP",
                    unitPrice: "",
                    discount: 0,
                    currency: "",
                    GST: 0,
                    mitme: "Select an Option",
                }
            ],
            result :0,
        }
    },
    methods: {
        onFileSelected(event){
            console.log(event)
        },
        onFileChange(e) {
            this.files = e.target.files;
            console.log(this.files);
        },
        currentDateTime() {
            const current = new Date();
            const date = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
            const time = current.getHours() + ":" + current.getMinutes();
            if (current.getHours() >= 12) {
                return date + " " + time + " PM";
            } else {
                return date + " " + time + " AM";
            }
        },
        deleteFile(index) {
            this.files = Array.prototype.slice.call(this.files)
            this.files.splice(index, 1);
        },
        deleteCost(index) {
            this.costs = Array.prototype.slice.call(this.costs)
            this.costs.splice(index, 1);
        },
        addCost() {
            this.costs.push({
                description: "",
                qty: 0,
                shp: "SHP",
                unitPrice: "",
                discount: 0,
                currency: "",
                GST: 0,
                mitme: "Select an Option",
            });
        },
    },
    computed:{
        getTotal(){
            return index => {
                const discount = ((this.costs[index].qty * (this.costs[index].unitPrice))*this.costs[index].discount/100)
                const gst = ((((this.costs[index].qty * (this.costs[index].unitPrice)) - discount)*this.costs[index].GST)/100)
                return (((this.costs[index].qty * (this.costs[index].unitPrice)) - discount)+gst).toFixed(2)
            }
        },
        getSubTotal(){
            return index => {
                const discount = ((this.costs[index].qty * (this.costs[index].unitPrice))*this.costs[index].discount/100)
                return ((this.costs[index].qty * (this.costs[index].unitPrice)) - discount).toFixed(2)
            }
        },
        getVAT(){
            return index => {
                const discount = ((this.costs[index].qty * (this.costs[index].unitPrice))*this.costs[index].discount/100)
                return ((((this.costs[index].qty * (this.costs[index].unitPrice)) - discount)*this.costs[index].GST)/100).toFixed(2)
            }
        },
        currencyResult() {
            return (this.getTotal * 3.6725).toFixed(2);
        },
        currencyVAT(){
            return (this.getVAT * 3.6725).toFixed(2);
        },
        getAllSubTotal(){
            let reslt = 0
            for (let i = 0; i < this.costs.length; i++) {
                if(this.costs[i].currency === ""){
                    reslt = 0
                }
                else if (this.costs[i].currency === "USD"){
                    const discount = ((this.costs[i].qty * (this.costs[i].unitPrice)) * this.costs[i].discount / 100)
                    reslt = ((this.costs[i].qty * (this.costs[i].unitPrice)) - discount)
                }
                else {
                    const discount = ((this.costs[i].qty * (this.costs[i].unitPrice)) * this.costs[i].discount / 100)
                    reslt = ((this.costs[i].qty * (this.costs[i].unitPrice)) - discount)
                }
            }
            // for (let i = 0; i < this.arrresult.length; i++){
            //     this.result = parseInt(this.result) + this.arrresult[i].res
            // }
            // console.log(this.arrresult)
            this.result += reslt
            return this.result.toFixed(2)
        }
    }
}
</script>

<style scoped>

.normal {
    font-weight: normal;
}
.table-head {
    background-color: #EEEEEE;
}

tbody {
    border-top: none !important;
}
.color-black{
    color: #1a1e21;
}

.color-cyan{
    color: #00FFFF;
}
.icon-center{
    text-align: center;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
}
.text-right{
    text-align: right;
}
.text-middle{
    vertical-align: middle;
}
</style>
