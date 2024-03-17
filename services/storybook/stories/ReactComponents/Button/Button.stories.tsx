import "@h0onnn/react-components-button/style.css";
import { Button as _Button } from "@h0onnn/react-components-button";
import { vars } from "@h0onnn/themes";

export default {
  title: "React Components/Button",
  component: _Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "select",
    },
    color: {
      options: Object.keys(vars.colors.$scale),
      control: "select",
    },
    variant: {
      options: ["solid", "outline", "ghost"],
      control: "select",
    },
  },
};

export const ButtonStory = {
  args: {
    children: "Button",
    size: "lg",
    variant: "outline",
    isDisabled: false,
    isLoading: true,
    leftIcon: "😍",
  },
};
