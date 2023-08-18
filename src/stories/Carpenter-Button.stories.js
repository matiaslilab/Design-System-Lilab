import { CarpenterButton } from "./carpenter-button";

export default {
  title: 'Carpenter/Button',
  component: CarpenterButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export const CarpenterButtonPrimary = {
  args: {
    label: 'Guardar',
    enabled: true,
  },
};
