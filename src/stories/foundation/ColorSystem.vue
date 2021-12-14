<template>
  <table>
    <colgroup>
      <col class="" />
      <col class="" />
      <col class="" />
      <col class="" />
    </colgroup>
    <thead class="v-data-table-header">
      <tr>
        <th
          role="columnheader"
          scope="col"
          aria-label="CSS Class Name: Not sorted. Activate to sort ascending."
          aria-sort="none"
          class="text-start sortable"
        >
          <span>CSS Class Name </span
          ><i
            aria-hidden="true"
            class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
            style="font-size: 18px"
          >
          </i>
        </th>
        <th
          role="columnheader"
          scope="col"
          aria-label="Background Color: Not sorted. Activate to sort ascending."
          aria-sort="none"
          class="text-start sortable"
          style="width: 175px; min-width: 175px"
        >
          <span>Background Color </span
          ><i
            aria-hidden="true"
            class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
            style="font-size: 18px"
          >
          </i>
        </th>
        <th
          role="columnheader"
          scope="col"
          aria-label="CSS: Not sorted. Activate to sort ascending."
          aria-sort="none"
          class="text-start sortable"
        >
          <span>CSS </span
          ><i
            aria-hidden="true"
            class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
            style="font-size: 18px"
          >
          </i>
        </th>
        <th
          role="columnheader"
          scope="col"
          aria-label="Description: Not sorted. Activate to sort ascending."
          aria-sort="none"
          class="text-start sortable"
        >
          <span>Description </span
          ><i
            aria-hidden="true"
            class="v-icon notranslate v-data-table-header__icon material-icons theme--light"
            style="font-size: 18px"
          >
          </i>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="">
        <td class="text-start">.hb-primary-lighter</td>
        <td class="text-start">
          <div
            data-v-4357fa25=""
            class="hb-flex-all rectangle hb-primary-lighter"
          >
            <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
              >Lighter
            </span>
          </div>
        </td>
        <td style="background-color: #e0f5f5" class="text-start">
          background-color: #E0F5F5;
        </td>
        <td class="text-start">Selection Shading</td>
      </tr>
      <tr class="">
        <td class="text-start">.hb-primary-light</td>
        <td class="text-start">
          <div
            data-v-4357fa25=""
            class="hb-flex-all rectangle hb-primary-light"
          >
            <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
              >Light
            </span>
          </div>
        </td>
        <td style="background-color: #8de3e3" class="text-start">
          background-color: #8DE3E3;
        </td>
        <td class="text-start"></td>
      </tr>
      <tr class="">
        <td class="text-start">.hb-primary</td>
        <td class="text-start">
          <div data-v-4357fa25="" class="hb-flex-all rectangle hb-primary">
            <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
              >Primary
            </span>
          </div>
        </td>
        <td style="background-color: #47c0bf; color: white" class="text-start">
          background-color: #47C0BF;
        </td>
        <td class="text-start">Primary Button Gradient</td>
      </tr>
      <tr class="">
        <td class="text-start">.hb-primary-dark</td>
        <td class="text-start">
          <div data-v-4357fa25="" class="hb-flex-all rectangle hb-primary-dark">
            <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
              >Dark
            </span>
          </div>
        </td>
        <td
          style="background-color: #00848e; color: white !important"
          class="text-start"
        >
          background-color: #00848E;
        </td>
        <td class="text-start">CTA Color</td>
      </tr>
      <tr class="">
        <td class="text-start">.hb-primary-darkest</td>
        <td class="text-start">
          <div
            data-v-4357fa25=""
            class="hb-flex-all rectangle hb-primary-darkest"
          >
            <span data-v-4357fa25="" class="rectangle-center font-weight-medium"
              >Darkest
            </span>
          </div>
        </td>
        <td
          style="background-color: #003135; color: white !important"
          class="text-start"
        >
          background-color: #003135;
        </td>
        <td class="text-start">Header Color</td>
      </tr>
    </tbody>
  </table>
</template>
<script type="text/babel">
export default {
  name: "DesignSystemColorSystem",
  data: function () {
    return {
      headers: [
        { text: "CSS Class Name", value: "name" },
        { text: "Background Color", value: "color", width: 175 },
        { text: "CSS", value: "css" },
        { text: "Description", value: "description" },
      ],
      headers2: [
        { text: "CSS Class Name", value: "name" },
        { text: "Color", value: "color" },
        { text: "CSS", value: "css" },
        { text: "Description", value: "description" },
      ],
    };
  },
};
</script>

<style scoped>
.rectangle {
  min-width: 70px;
  height: 100px;
}

.v-application td,
.v-application th {
  border: 1px solid black;
  text-align: center;
  padding: 16px;
}
.v-application td span,
.v-application th span {
  text-align: center;
  display: block !important;
  vertical-align: center;
}
.v-application td div,
.v-application th div {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
