<script>
import Vue from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { HummingtestSample } from "@/entry.esm";
import {
  HbButton,
  HbAutoComplete,
  HbBladeHeader,
  HbBottomActionBar,
  HbBreadcrumb,
  HbCard,
  HbCheckbox,
  HbCombobox,
  HbComboboxChip,
  HbDataTable,
  HbDataTableHeader,
  HbExpansionPanel,
  HbForm,
  HbHeader,
  HbHeaderActions,
  HbHeaderInfo,
  HbInfoCard,
  HbLink,
  HbMenu,
  HbModal,
  HbNotification,
  HbPageHeader,
  HbPageMenu,
  HbRadio,
  HbReportTooltip,
  HbStatus,
  HbStepper,
  HbSuccessError,
  HbSwitch,
  HbTabs,
  HbTooltip,
  HbUnitIcon,
} from "@/entry.esm";

export default Vue.extend({
  name: "ServeDev",
  components: {
    HummingtestSample,
    HbButton,
    HbAutoComplete,
    HbBladeHeader,
    HbBottomActionBar,
    HbBreadcrumb,
    HbCard,
    HbCheckbox,
    HbCombobox,
    HbComboboxChip,
    HbDataTable,
    HbDataTableHeader,
    HbExpansionPanel,
    HbForm,
    HbHeader,
    HbHeaderActions,
    HbHeaderInfo,
    HbInfoCard,
    HbLink,
    HbMenu,
    HbModal,
    HbNotification,
    HbPageHeader,
    HbPageMenu,
    HbRadio,
    HbReportTooltip,
    HbStatus,
    HbStepper,
    HbSuccessError,
    HbSwitch,
    HbTabs,
    HbTooltip,
    HbUnitIcon,
  },
});
</script>

<template>
  <div id="app" class="v-application">
    <hummingtest-sample />
    <HbButton />
    <HelloWorld />
  </div>
</template>
