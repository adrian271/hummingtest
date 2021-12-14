import { withVuetify } from "@socheatsok78/storybook-addon-vuetify/dist/decorators";
import "../src/assets/css/document.css";
import "../src/assets/css/fonts.css";
import "../src/assets/css/material_styles.css";
import "../src/assets/css/normalize.css";
import "../src/assets/css/styles.css";
import "../src/assets/css/stylesheet.css";

export const decorators = [withVuetify];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "",
      order: ["Foundation", "Components", "Example"],
      locales: "",
    },
  },
  // controls: { disabled: true },
  // actions: { disabled: true },
};
