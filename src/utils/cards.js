import { colors } from "./color";
import { imagePath } from "./imagePath";

export const cards = [
    {
      text: 'Silver',
      source:imagePath.SILVER,
      color1: colors.silver_dark,
      color2: colors.silver_light,
      textColor:colors.silver_txt,
    },
    {
      text: 'Gold',
      source:imagePath.GOLD,
      color1: colors.gold_dark,
      color2: colors.gold_light,
      textColor: colors.gold_txt,
    },
    {
      text: 'Platinum',
      source:imagePath.PLATINUM,
      color1: colors.platinum_dark  ,
      color2: colors.platinum_light,
      textColor: colors.platinum_txt,
    },
  ];