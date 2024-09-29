import React from 'react'


type BackgroundColor = "primary" | "secondary" | "tertiary" | "white" | "btn";
type FontColor = "white" | "black" | "primary" | "secondary" | "tertiary";

const Button = ({ children, className, backgroundColor="btn", fontColor }: { children: React.ReactNode, className?: string, backgroundColor?: BackgroundColor, fontColor?: FontColor }) => {

    const variant = {
        backgroundColor: {
            primary: "bg-primary",
            secondary: "bg-secondary",
            tertiary: "bg-tertiary",
            white: "bg-white",
            btn: "bg-btn",
        },
        fontColor: {
            white: "text-white",
            black: "text-black",
            primary: "text-primary",
            secondary: "text-secondary",
            tertiary: "text-tertiary",
        },
    }

  return (
      <button className={`font-mono px-4 py-2 text-2xl hover:bg-gradient-to-r from-btn to-primary via-primary-light rounded-sm duration-300 transition-all hover:scale-110 tracking-wider dark:text-black  border-2 border-dashed dark:border-white border-black  uppercase  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className} ${variant.backgroundColor[backgroundColor as BackgroundColor]} ${variant.fontColor[fontColor as FontColor]}`}>
          {children}</button>
  )
}

export default Button