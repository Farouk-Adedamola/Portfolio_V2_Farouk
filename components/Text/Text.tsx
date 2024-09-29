import React from 'react'


type Weight =  "normal" | "medium" | "bold" | "semibold";

type Color = "primary" | "secondary" | "primary-light" | "primary-dark" | "secondary-light" | "secondary-dark";

type Font = "sf-regular" | "sf-medium" | "product-sans";
    


const Text = ({ children, className, weight = "normal", color = "primary", font = "sf-regular" }: {
    children: React.ReactNode;
    className?: string;
    weight?: Weight;
    color?: Color;
    font?: Font;
}) => {
    
   const variant = {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      "primary-light": "text-primary-light",
      "primary-dark": "text-primary-dark",
      "secondary-light": "text-secondary-light",
      "secondary-dark": "text-secondary-dark",
    },
    weight: {
      normal: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
        medium: "font-medium",
    },
    font: {
        "sf-regular": "font-sf-regular",
        "sf-medium": "font-sf-medium",
        "product-sans": "font-product-sans",
    }
  };

  return (
          <p className={`${className} ${variant.color[color]} ${variant.font[font] ?? ""} ${variant.weight[weight] ?? ""} `}>{children}</p>
  )
}

export default Text;