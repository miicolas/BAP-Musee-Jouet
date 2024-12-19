import { useEffect, useState } from "react";
import PlaymobilBackground from "../assets/images/bg-playmobil.png";
import SophieBackground from "../assets/images/bg-sophie.png";
import KikiBackground from "../assets/images/bg-kiki.png";

export const useAvatarTheme = (avatarId) => {
  const [theme, setTheme] = useState({
    background: null,
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    buttonTextColor: "",
    buttonBgColor: "",
    buttonBorderColor: "",
  });

  useEffect(() => {
    switch (avatarId) {
      case 1:
        setTheme({
          background: PlaymobilBackground,
          backgroundColor: "bg-customRedTitre",
          borderColor: "border-red-600",
          textColor: "text-red-900",
          buttonTextColor: "text-customRedTextButton",
          buttonBgColor: "bg-custom-Redgradient",
          buttonBorderColor: "border-customRedBorder",
        });
        break;
      case 2:
        setTheme({
          background: SophieBackground,
          backgroundColor: "bg-customYellowTitre",
          borderColor: "border-yellow-500",
          textColor: "text-customYellowTitre",
          buttonTextColor: "text-customYellowTexteButton",
          buttonBgColor: "bg-amber-300",
          buttonBorderColor: "border-customYellowBorder",
        });
        break;
      case 3:
        setTheme({
          background: KikiBackground,
          backgroundColor: "bg-customGreenTitre",
          borderColor: "border-emerald-600",
          textColor: "text-customGreenTitre",
          buttonTextColor: "text-green-800",
          buttonBgColor: "bg-custom-Greengradient",
          buttonBorderColor: "border-customGreenBorder",
        });
        break;
    }
  }, [avatarId]);

  return theme;
};
