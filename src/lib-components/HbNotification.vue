<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<!-- PLEASE DO NOT EDIT THIS FILE -->
<template>
    <span style="width:100%;" class="hb-text-night">
        <v-row v-model="notification" class="pl-3 ma-0 hb-default-font-size" :class="notificationColorClass">
            <v-col class="ma-0 px-0 d-flex" :class="{ 'py-2' : type !== 'quick-actions' , 'hb-quick-action-title' : type === 'quick-actions' }">
                <hb-icon :color="iconColor" class="ml-0 mr-2 d-flex align-start">{{ notificationIcon }}</hb-icon>
                <span>
                    <span class="font-weight-medium text-subtitle-1">{{ notificationTitle }}</span>
                    <span class="pl-1 font-weight-regular hb-default-font-size">
                        <slot></slot>
                    </span>
                </span>
            </v-col>
            <v-col class="ma-0 px-0" :cols="$vuetify.breakpoint.lgAndUp ? '1' : '2'"></v-col>
            <v-col :cols="colsRight" :xs="xsColsRight" :md="mdColsRight" class="ma-0 pa-0 d-flex justify-end">
                <span class="font-weight-regular hb-default-font-size" :class="{ 'hb-quick-action-slot' : type === 'quick-actions' , 'px-1' : $vuetify.breakpoint.sm , 'pr-3' : notDismissable }">
                    <slot name="actions"></slot>
                </span>
                <span class="mr-0" :class="{ 'pt-1' : type === 'quick-actions' }" v-if="!notDismissable">
                    <hb-btn icon tooltip="Close" active-state-off :hover-background-color="closeHoverColor" @click="close">mdi-close</hb-btn> 
                </span>
            </v-col>
        </v-row>
    </span>
</template>
<script type="text/babel">

    import HbButton from './HbButton.vue';
    import HbIcon from './HbIcon.vue';

    export default {
        name: "HbNotification",
        data: function() {
            return {
                show: true,
                buttonGroup: null,
            };
        },
        components: {
            HbButton,
            HbIcon
        },
        computed: {
            notification: {
                get () {
                    return this.value
                },
                set (value) {
                    this.$emit('input', value)
                }
            },
            colsLeft(){
                if(!this.hasActionsSlot){
                    return 9;
                }
                if(this.type === 'quick-actions'){
                    return 3;
                }
                if(this.type === 'auction'){
                    return 5;
                }
                else {
                    return 6;
                }
            },
            colsRight(){
                if(!this.hasActionsSlot){
                    return 1;
                }
                if(this.type === 'quick-actions'){
                    return 7;
                }
                if(this.type === 'auction'){
                    return 5;
                }
                else {
                    return 4;
                }
            },
            xsColsLeft(){
                if(!this.hasActionsSlot){
                    return 9;
                }
                if(this.type === 'quick-actions'){
                    return 3;
                }
                if(this.type === 'auction'){
                    return 6;
                }
                else {
                    return 7;
                }
            },
            xsColsRight(){
                if(!this.hasActionsSlot){
                    return 1;
                }
                if(this.type === 'quick-actions'){
                    return 7;
                }
                if(this.type === 'auction'){
                    return 4;
                }
                else {
                    return 3;
                }
            },
            mdColsLeft(){
                if(!this.hasActionsSlot){
                    return 9;
                }
                if(this.type === 'quick-actions'){
                    return 3;
                }
                if(this.type === 'auction'){
                    return 7;
                }
                else {
                    return 8;
                }
            },
            mdColsRight(){
                if(!this.hasActionsSlot){
                    return 1;
                }
                if(this.type === 'quick-actions'){
                    return 7;
                }
                if(this.type === 'auction'){
                    return 3;
                }
                else {
                    return 3;
                }
            },
            hasActionsSlot(){
                return !!this.$slots['actions'];
            },
            notificationColorClass(){
                if(this.type === 'caution'){
                    return 'hb-notification-caution';
                }
                else if(this.type === 'warning' || this.type === 'auction'){
                    return 'hb-notification-warning';
                }
                else if(this.type === 'success'){
                    return 'hb-notification-success';
                }
                else if(this.type === 'quick-actions'){
                    return 'hb-notification-quick-actions';
                }
                else if(this.type === 'info'){
                    return 'hb-notification-info'
                }
                else {
                    return '';
                }
            },
            notificationIcon(){
                if(this.type === 'caution'){
                    return 'mdi-alert';
                }
                else if(this.type === 'warning'){
                    return 'mdi-close-circle';
                }
                else if(this.type === 'success'){
                    return 'mdi-check'
                }
                else if(this.type === 'quick-actions'){
                    return 'mdi-flash-circle';
                }
                else if(this.type === 'auction') {
                    return 'gavel';
                }
                else if(this.type == 'info') {
                    return 'mdi-information';
                }
                else {
                    return '';
                }
            },
            iconColor(){
                if(this.type === 'caution'){
                    return '#FFD600';
                }
                else if(this.type === 'warning' || this.type === 'auction'){
                    return '#FB4C4C';
                }
                else if(this.type === 'success'){
                    return '#02AD0F';
                }
                else if(this.type === 'quick-actions'){
                    return '#101318';
                }
                else if(this.type === 'info'){
                    return '#306fb6';
                }
                else {
                    return '';
                }
            },
            closeHoverColor(){
                if(this.type === 'caution'){
                    return '#F5EBB7';
                }
                else if(this.type === 'warning'){
                    return '#EFCFCC';
                }
                else if(this.type === 'success'){
                    return '#C5EDC9';
                }
                else if(this.type === 'quick-actions'){
                    return '#C6E5E2';
                }
                else {
                    return '';
                }
            },
            notificationTitle(){
                if(this.haveTitle == false) {
                    return '';
                } 
                if(this.title){
                    return this.title;
                }
                if(this.type === 'caution'){
                    return 'Caution:';
                }
                else if(this.type === 'warning'){
                    return 'Warning:';
                }
                else if(this.type === 'success'){
                    return 'Success:'
                }
                else if(this.type === 'quick-actions'){
                    return 'Quick Actions:';
                }
                else {
                    return '';
                }
            }
        },
        methods: {
            close(){
                this.notification = false;
                this.$emit('close');
            }
        },
        props: {
            type:{
                type: String
            },
            title:{
                type: String
            },
            haveTitle: {
                type: Boolean,
                default: true
            },
            notDismissable:{
                type: Boolean,
                default: false
            },
            value:{
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

.hb-notification-caution {
  background-color: #FFF9DA;
  border: 1px solid #FFD600;
  border-radius: 5px;
}
.hb-notification-info {
  background-color: #e9f3ff;
  border: 1px solid #306fb6;
  border-radius: 5px;
}
.hb-notification-warning {
  background-color: #F8E5E1;
  border: 1px solid #f96060;
  border-radius: 5px;
}
.hb-notification-success {
  background-color: #E1FAE3;
  border: 1px solid #72d479;
  border-radius: 5px;
}
.hb-notification-quick-actions {
  background-color: #E0F5F5;
  border: 1px solid #b3dee0;
  border-radius: 5px;
}
.hb-quick-action-title {
  margin: 3px 0;
}
.hb-quick-action-slot {
  padding-top: 6px;
}

</style>