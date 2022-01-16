import HbButton from "../lib-components/HbButton.vue";
import HbButtonDocs from "./HbButtonDocs.js";

let snippetCreate = (str) => {
  var newStr = str.replace(/>/g, "&gt;");
  newStr = newStr.replace(/</g, "&lt;");
  newStr = newStr.replace(/"/g, "&quot;");
  newStr = newStr.replace(/'/g, "&apos;");
  //newStr = newStr.replace( /&/g,'&amp;');
  return newStr;
};

let compCode = '<hb-button v-bind="$props">{{label}}</hb-button>';
let snippet = `<hr style="margin:4rem 0"/><code style="padding: 2rem;">${snippetCreate(
  compCode
)}</code>`;

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Hb-Button",
  component: HbButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
    Size: {
      control: { type: "select" },
      options: ["x-small", "small", "default", "large"],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HbButton },
  template: `<div>${compCode}${snippet}${HbButtonDocs}</div>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  color: "primary",
  label: "Change Me in the panel below!",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  label: "Change Me in the panel below!",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
