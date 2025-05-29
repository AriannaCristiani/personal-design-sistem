import type { Meta, StoryObj } from "@storybook/react";
import { GreenButton } from "../components/GreenButton/GreenButton";
import type { GreenButtonProps } from "../components/GreenButton/GreenButton";

const meta: Meta<typeof GreenButton> = {
  title: "Components/GreenButton",
  component: GreenButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    ariaLabel: { control: "text" },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "GreenButton è un componente UI che supporta gli stati `hover`, `focus`, `disabled`, è accessibile via `aria-label`, e può essere riutilizzato nel design system.",
      },
    },
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<GreenButtonProps>;

export const Default: Story = {
  args: {
    label: "Button",
    ariaLabel: "Button",
    onClick: () => alert("✅ Hai cliccato il bottone!"),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    ariaLabel: "Disabled",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
    onClick: () => alert("✅ Hai cliccato il bottone!"),
  },
};

export const Medium: Story = {
  args: {
    label: "Button",
    size: "medium",
    onClick: () => alert("✅ Hai cliccato il bottone!"),
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
    onClick: () => alert("✅ Hai cliccato il bottone!"),
  },
};
