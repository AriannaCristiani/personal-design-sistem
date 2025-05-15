import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import type { ProductCardProps } from "../components/ProductCard/ProductCard";
import { action } from "@storybook/addon-actions";
import greenCoffee from "../assets/coffee.png";
import arabicaCoffee from "../assets/coffee2.png";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  argTypes: {
    discount: { control: "text" },
    soldOut: { control: "boolean" },
    image: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "ProductCard è un componente UI compsto da: immagine, prezzo, badge con percentuale di sconto e bottone per aggiungere al carrello, questo può variare in base alla disponibilità dell'articolo.",
      },
    },
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<ProductCardProps>;

export const Default: Story = {
  args: {
    title: "Green Coffee Blend",
    price: "€12.90",
    discount: "-10%",
    soldOut: false,
    image: greenCoffee,
    onAddToCart: () => alert("✅ Hai cliccato sul Bottone!"),
  },
};

export const SoldOut: Story = {
  args: {
    title: "Arabica Coffee Blend",
    price: "€15.00",
    soldOut: true,
    image: arabicaCoffee,
    onAddToCart: action("add-to-cart clicked"),
  },
};
