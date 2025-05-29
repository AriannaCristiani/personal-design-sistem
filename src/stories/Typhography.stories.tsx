import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Atoms/Typography",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Coffee lovers",
    },
    textColor: {
      name: "Text Color",
      control: {
        type: "select",
      },
      options: [
        "var(--green-1)",
        "var(--green-2)",
        "var(--green-4)",
        "var(--green-6)",
        "var(--green-8)",
        "var(--beige-1)",
        "var(--beige-2)",
        "var(--beige-4)",
        "var(--beige-6)",
        "var(--beige-8)",
        "var(--brown-1)",
        "var(--brown-2)",
        "var(--brown-4)",
        "var(--brown-6)",
        "var(--brown-8)",
      ],
      defaultValue: "var(--green-4)",
    },
  },
};

export default meta;

type Story = StoryObj<{ children: string; textColor: string }>;

export const Default: Story = {
  args: {
    children: "Coffee lovers",
    textColor: "var(--green-6)",
  },
  render: ({ children, textColor }) => (
    <>
      <style>{`
        .container {
          display: flex;
          flex-direction: column;
          border: 1px solid grey;
          border-radius: 5px;
        }
        .col {
          border-bottom: 1px solid grey;
          padding: var(--spacing-sm) var(--spacing-md);
        }
      `}</style>

      <div className="container" style={{ color: textColor }}>
        <div className="col">
          <span className="font-size-hero">HERO – {children}</span>
        </div>
        <div className="col">
          <h1>H1 – {children}</h1>
        </div>
        <div className="col">
          <h2>H2 – {children}</h2>
        </div>
        <div className="col">
          <h3>H3 – {children}</h3>
        </div>
        <div className="col">
          <h4>H4 – {children}</h4>
        </div>
        <div className="col">
          <h5>H5 – {children}</h5>
        </div>
        <div className="col">
          <h6>H6 – {children}</h6>
        </div>
        <div className="col">
          <span className="font-size-body">BODY – {children}</span>
        </div>
        <div className="col">
          <span className="font-size-sm">SMALL – {children}</span>
        </div>
        <div className="col">
          <span className="font-size-xs">EXTRA-SMALL – {children}</span>
        </div>
      </div>
    </>
  ),
};
