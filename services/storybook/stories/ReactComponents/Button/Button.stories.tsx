import "@h0onnn/react-components-button/style.css";
import { Button as _Button } from "@h0onnn/react-components-button";
import "@h0onnn/react-components-layout/style.css";
import { Text } from "@h0onnn/react-components-layout";
import { vars } from "@h0onnn/themes";
import { useButton } from "@h0onnn/react-hooks-button";

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

export const TextButtonStory = {
  render: () => {
    const { buttonProps } = useButton({
      elementType: "div",
      onClick: () => {
        console.log("ttt");
      },
    });

    return (
      <Text
        {...buttonProps}
        as="div"
        fontSize="md"
        color="green"
        style={{
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        텍스트 버튼입니다.
      </Text>
    );
  },
};
