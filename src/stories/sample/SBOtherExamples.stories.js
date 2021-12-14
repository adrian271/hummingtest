import OtherStories from "./Button.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Storybook Examples from other Companies",
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  template: `
  <ul>
    <li><a href='https://gamut.codecademy.com/?path=/docs/gamut--page'>CodeAcademy: Gamut Design System</a></li>
    <li><a href='https://gamut.codecademy.com/?path=/docs/gamut--page'>IBM: React Carbon</a></li>
  </ul>`,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {};

Primary.story = {
  parameters: {
    options: {
      // knobs: {
      disabled: true, // do not show the knobs addon on this story
      // },
    },
  },
};
