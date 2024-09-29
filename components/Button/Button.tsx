import React from 'react';

type BackgroundColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'btn';
type FontColor = 'white' | 'black' | 'primary' | 'secondary' | 'btn';
type DarkFontColor = 'white' | 'black' | 'primary' | 'secondary' | 'btn';
const Button = ({
  children,
  className,
  backgroundColor = 'btn',
  fontColor,
  darkFontColor,
}: {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: BackgroundColor;
  fontColor?: FontColor;
  darkFontColor?: DarkFontColor;
}) => {
  const variant = {
    backgroundColor: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      tertiary: 'bg-tertiary',
      white: 'bg-white',
      btn: 'bg-btn',
    },
    fontColor: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      secondary: 'text-secondary',
      btn: 'text-btn',
    },
    darkFontColor: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
      secondary: 'text-secondary',
      btn: 'text-btn',
    },
  };

  return (
    <button
      className={` font-bold px-4 py-2 text-2xl hover:bg-gradient-to-r from-btn to-primary via-primary-light rounded-sm duration-300 transition-all hover:scale-95 tracking-wider dark:text-black  border-2 border-dashed dark:border-white border-black uppercase  translate-x-[-4px] translate-y-[-4px] hover:shadow-[4px_4px_0px_white] shadow-[4px_4px_0px_black] font-sf-regular dark:shadow-[4px_4px_0px_white] dark:hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none ${className} ${
        variant.backgroundColor[backgroundColor as BackgroundColor]
      } ${variant.fontColor[fontColor as FontColor]} dark:${
        variant.darkFontColor[darkFontColor as DarkFontColor]
      } `}
    >
      {children}
    </button>
  );
};

export default Button;
