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
    <v-navigation-drawer
        v-model="vmodel"
        :right="!$vuetify.breakpoint.xs"
        :hide-overlay="!$vuetify.breakpoint.xs"
        :clipped="!$vuetify.breakpoint.xs"
        disable-resize-watcher
        mobile-breakpoint="600"
        :height="vmodel ? '100%' : 0"
        class="ma-0 pb-0 px-0 hb-page-menu-wrapper"
        :class="oldWay ? 'hb-new-sidebar-styling-old' : ''"
        :bottom="$vuetify.breakpoint.xs"
        :app="$vuetify.breakpoint.xs"
        flat
        v-bind="$attrs"
        v-on="$listeners"
        >
        <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]><slot :name="slot"/></template>
    </v-navigation-drawer>
</template>

<script type="text/babel">

export default {
    name:'HbPageMenu',
    data(){
        return {

        }
    },
    computed: {
        vmodel: {
            get () {
                return this.$attrs.value
            },
            set (value) {
                this.$emit('input', value)
            }
        }
    },
    props: {
        oldWay:{
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>

.theme--light.v-navigation-drawer.hb-page-menu-wrapper {
    padding-top: 4px;
    background: #F9FAFB;
}

.theme--light.v-navigation-drawer.hb-page-menu-wrapper * {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
}

.hb-page-menu-wrapper .theme--light.v-list-item {
    padding-left: 24px;
}

.hb-page-menu-wrapper .theme--light.v-list {
    padding-bottom: 12px;
    min-height: 40px;
}

.hb-page-menu-wrapper .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #637381 !important;
}

.hb-page-menu-wrapper .v-navigation-drawer__content a.v-list-item--active {
    color: #101318;
    font-weight: 500;
    border: none;
}

.hb-page-menu-wrapper .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled):hover{
    color: #101318 !important;
    font-weight: normal;
}

.hb-page-menu-wrapper:not(.hb-new-sidebar-styling-old) .theme--light.v-list-item.v-list-item--active {
    padding-left: 20px;
    border-left: 4px solid #00848E;
}

.hb-page-menu-wrapper:not(.hb-new-sidebar-styling-old) .v-list-item--link::before {
    background: #47C1BF;
}

.hb-page-menu-wrapper.hb-new-sidebar-styling-old .v-list-item--link::before {
    background: none;
}

.hb-page-menu-wrapper .v-ripple__container {
    opacity: 0 !important;
}

.hb-page-menu-wrapper a:focus, .hb-page-menu-wrapper button:focus {
    outline: none;
    border: none;
}

</style>