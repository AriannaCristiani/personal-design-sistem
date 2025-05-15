import { GreenButton } from "../GreenButton/GreenButton";
import "./ProductCard.css";

export type ProductCardProps = {
  title: string;
  price: string;
  image: string;
  discount?: string;
  soldOut?: boolean;
  onAddToCart?: () => void;
};

export function ProductCard({ title, price, image, discount, soldOut, onAddToCart }: ProductCardProps) {
  return (
    <article className="product-card" aria-label={`Product: ${title}`}>
      <figure className="image-wrapper">
        <img src={image} alt={title} />
        {discount && <span className="badge" aria-label={`Discount: ${discount}`}>{discount}</span>}
        {soldOut && <span className="sold-out" aria-label="Sold Out">Sold Out</span>}
      </figure>
      <div className="content">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <div className="button-wrapper">
        <GreenButton
          label={soldOut ? "Unavailable" : "Add to cart"}
          disabled={soldOut}
          size="small"
          ariaLabel={`Pulsante ${soldOut ? "non disponibile" : "aggiungi al carrello"} per ${title}`}
          onClick={onAddToCart}
        />
        </div>
      </div>
    </article>
  );
}
