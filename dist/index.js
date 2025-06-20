var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/Button.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var getThemeColors = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var StyledButton = styled.button`
    background-color: ${getThemeColors("button")};
    color: ${getThemeColors("buttonText")};
    padding: 8px;
    border: 2px solid ${getThemeColors("button")};
    border-radius: 24px;
    cursor: pointer;
    &:hover {
        background-color: ${getThemeColors("buttonHover")};
        color: ${getThemeColors("buttonHoverText")};
        border: 2px solid ${getThemeColors("button")};
    }
`;
var Button = (_a) => {
  var _b = _a, { label } = _b, rest = __objRest(_b, ["label"]);
  return /* @__PURE__ */ jsx(StyledButton, __spreadProps(__spreadValues({}, rest), { children: label }));
};
var Button_default = Button;

// src/components/Header/index.tsx
import { useCallback, useEffect, useState as useState2 } from "react";
import styled5, { useTheme } from "styled-components";

// src/components/Header/components/hamburger.tsx
import styled2 from "styled-components";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var getThemeColors2 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var Bun = styled2.button`
    width: 2.8rem;
    height: 2.8em;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 6px;
    z-index: 10;
    cursor: pointer;
`;
var Burger = styled2.div`
    width: ${({ $isOpen, $index }) => $isOpen && $index === 2 ? "0" : "2.5rem"};
    height: 0.4em;
    border-radius: 10px;
    background: ${getThemeColors2("secondary")};
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin: auto;
    transform: ${({ $isOpen, $index }) => $isOpen && ($index === 1 ? "rotate(45deg) translateX(5%);" : $index === 2 ? "translateX(0%)" : "rotate(-45deg) translateX(5%);")};
`;
var Hamburger = ({ isOpen }) => /* @__PURE__ */ jsxs(Bun, { children: [
  /* @__PURE__ */ jsx2(Burger, { $isOpen: isOpen, $index: 1 }),
  /* @__PURE__ */ jsx2(Burger, { $isOpen: isOpen, $index: 2 }),
  /* @__PURE__ */ jsx2(Burger, { $isOpen: isOpen, $index: 3 })
] });
var hamburger_default = Hamburger;

// src/components/Header/components/desktopmenu.tsx
import { useState } from "react";
import styled3 from "styled-components";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var getThemeColors3 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var MenuWrapper = styled3.div`
    background-color: ${getThemeColors3("primary")};
    height: 80%;
    align-self: end;
    position: relative;
    display: flex;
`;
var MenuItem = styled3.a`
    cursor: pointer;
    width: ${({ $menuWidth }) => $menuWidth}px;
    color: ${getThemeColors3("text")};
    text-align: center;
    align-content: center;
    justify-content: center;
    padding: 8px;
    transition: linear 0.3s;
    &:hover {
        background-color: ${getThemeColors3("hoverBackground")};
    }
`;
var SubMenuItem = styled3.a`
    color: ${getThemeColors3("text")};
    padding: 16px;
    white-space: nowrap;
    transition: linear 0.3s;
    &:hover {
        background-color: ${getThemeColors3("hoverBackground")};
    }
`;
var SubMenuWrapper = styled3.div`
    background-color: ${getThemeColors3("primary")};
    position: absolute;
    top: 100%;
    left: 0;
    transition: linear 0.3s;
    z-index: 1000;
    display: grid;
`;
var DesktopMenu = (props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const { page, menuWidth = 200 } = props;
  return /* @__PURE__ */ jsxs2(
    MenuWrapper,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ jsx3(MenuItem, { $menuWidth: menuWidth, children: page.name }),
        isDropdownVisible && /* @__PURE__ */ jsx3(SubMenuWrapper, { children: page.subPages && page.subPages.map((subPages, index) => /* @__PURE__ */ jsx3(SubMenuItem, { href: subPages.subLink, children: subPages.subName }, index)) })
      ]
    }
  );
};
var desktopmenu_default = DesktopMenu;

// src/components/Header/components/mobilemenu.tsx
import styled4 from "styled-components";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var getThemeColors4 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var getProps = (prop) => (props) => props[prop];
var MobileMenuWrapper = styled4.div`
    visibility: ${({ $toggle }) => $toggle ? "visible" : "hidden"};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${getProps("height")}px;
    height: calc(100vh - ${getProps("height")}px);
    right: 0;
    background-color: ${getThemeColors4("primary")};
    width: 100%;
    max-width: 300px;
    overflow-y: auto;
    z-index: 1000;
`;
var MenuItem2 = styled4.a`
    margin-left: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    color: ${getThemeColors4("text")};
    font-weight: bold;
    transition: background-color 0.3s linear;
    &:hover {
        background-color: ${getThemeColors4("hoverBackground")};
    }
`;
var SubMenuWrapper2 = styled4.div`
    margin-left: 1rem;
    background-color: ${getThemeColors4("primary")};
    position: relative;
    display: flex;
    flex-direction: column;
`;
var SubMenuItem2 = styled4.a`
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: ${getThemeColors4("text")};
    font-weight: normal;
    transition: background-color 0.3s linear;
    &:hover {
        background-color: ${getThemeColors4("hoverBackground")};
    }
`;
var MobileMenu = (props) => {
  const { pages, height = 60, isOpen } = props;
  return /* @__PURE__ */ jsx4(MobileMenuWrapper, { $toggle: isOpen, $height: height, children: pages.map(({ iconComponent, name, link, subPages }) => /* @__PURE__ */ jsxs3("div", { style: { display: "grid" }, children: [
    /* @__PURE__ */ jsxs3(MenuItem2, { href: link, children: [
      iconComponent,
      name
    ] }, name),
    subPages && subPages.map((subPage) => /* @__PURE__ */ jsx4(SubMenuWrapper2, { children: /* @__PURE__ */ jsx4(SubMenuItem2, { href: subPage.subLink, children: subPage.subName }) }, subPage.subName))
  ] }, link)) });
};
var mobilemenu_default = MobileMenu;

// src/components/Header/index.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var getThemeColors5 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var getThemeWidth = (prop) => ({ theme: theme2 }) => theme2[prop];
var getThemeBreakpoints = (prop) => ({ theme: theme2 }) => theme2.breakpoints[prop];
var NavBarContainer = styled5.div`
    background-color: ${getThemeColors5("primary")};
    height: ${({ $height }) => $height}px;
    display: grid;
`;
var NavBarWrapper = styled5.div`
    justify-self: center;
    justify-items: end;
    display: grid;
    height: 100%;
    width: 100%;
    max-width: ${getThemeWidth("windowWidth")}px;
`;
var LogoWrapper = styled5.div`
    position: relative;
    height: 100%;
    width: auto;
`;
var MenuWrapper2 = styled5.div`
    display: none;
    @media (min-width: ${getThemeBreakpoints("desktop")}px) {
        display: grid;
        grid-template-columns: repeat(${({ $number }) => $number}, 1fr);
    }
`;
var Trigger = styled5.div`
    display: grid;
    height: 100%;
    width: fit-content;
    align-content: center;
    justify-self: end;
    padding: 0 1rem;
    @media (min-width: ${getThemeBreakpoints("desktop")}px) {
        display: none;
    }
`;
var StyledImage = styled5.img`
    justify-self: start;
    object-fit: contain;
    @media (min-width: ${getThemeBreakpoints("desktop")}px) {
        justify-self: center;
    }
`;
var Header = (props) => {
  const _a = props, {
    height = 60,
    logo,
    alt = "logo",
    menuWidth = 120,
    pages
  } = _a, rest = __objRest(_a, [
    "height",
    "logo",
    "alt",
    "menuWidth",
    "pages"
  ]);
  const [hamburgerOpen, setHamburgerOpen] = useState2(false);
  const theme2 = useTheme();
  const desktopBreakpoint = theme2.breakpoints.desktop;
  const toggleHamburger = useCallback(
    () => setHamburgerOpen((prev) => !prev),
    []
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= desktopBreakpoint) {
        setHamburgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopBreakpoint]);
  return /* @__PURE__ */ jsx5(NavBarContainer, __spreadProps(__spreadValues({ $height: height }, rest), { children: /* @__PURE__ */ jsxs4(NavBarWrapper, { children: [
    logo && /* @__PURE__ */ jsx5(LogoWrapper, { children: /* @__PURE__ */ jsx5(StyledImage, { src: logo, alt }) }),
    /* @__PURE__ */ jsx5(Trigger, { onClick: toggleHamburger, children: /* @__PURE__ */ jsx5(hamburger_default, { isOpen: hamburgerOpen }) }),
    /* @__PURE__ */ jsx5(MenuWrapper2, { $number: pages.length, children: pages.map((item, index) => /* @__PURE__ */ jsx5(
      desktopmenu_default,
      {
        page: item,
        menuWidth
      },
      index
    )) }),
    /* @__PURE__ */ jsx5(
      mobilemenu_default,
      {
        height,
        isOpen: hamburgerOpen,
        pages
      }
    )
  ] }) }));
};
var Header_default = Header;

// src/components/Card.tsx
import styled6 from "styled-components";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var getThemeColors6 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var CardWrapper = styled6.div`
    display: grid;
    grid-template-rows: 1fr 0.3fr;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    overflow: hidden;
`;
var ImgWrapper = styled6.div`
    grid-row: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
var StyledImg = styled6.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all linear 0.5s;
    &:hover {
        opacity: 70%;
        transform: scale(98%);
    }
`;
var StyledLink = styled6.a`
    text-decoration: none;
`;
var TextWrapper = styled6.div`
    grid-row: 2;
    color: ${getThemeColors6("text")};
    padding: 8px 0;
    h1 {
        margin: 0;
    }
    h2 {
        margin: 0;
        color: gray;
    }
`;
var Card = ({
  height = 500,
  width = 500,
  text = "Place Title Here",
  subText,
  link,
  imgSrc = "https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg",
  alt = "card image"
}) => {
  return /* @__PURE__ */ jsxs5(CardWrapper, { $height: height, $width: width, children: [
    /* @__PURE__ */ jsx6(ImgWrapper, { children: /* @__PURE__ */ jsx6(StyledLink, { href: link, children: /* @__PURE__ */ jsx6(StyledImg, { $height: height, src: imgSrc, alt }) }) }),
    /* @__PURE__ */ jsxs5(TextWrapper, { children: [
      /* @__PURE__ */ jsx6("h1", { children: /* @__PURE__ */ jsx6(StyledLink, { href: link, children: text }) }),
      subText && /* @__PURE__ */ jsx6("h2", { children: subText })
    ] })
  ] });
};
var Card_default = Card;

// src/components/CardContainer.tsx
import styled7 from "styled-components";
import { jsx as jsx7 } from "react/jsx-runtime";
var CardContainerWrapper = styled7.div`
    display: grid;
    grid-template-columns: repeat(${({ $columns }) => $columns}, max-content);
    background-color: ${({ theme: theme2 }) => theme2.colors.primary};
    border: 1px solid black;
    grid-gap: 32px;
    max-width: 1320px;
    justify-content: center;
    padding: 16px;
`;
var CardContainer = (_a) => {
  var _b = _a, {
    columns,
    children
  } = _b, props = __objRest(_b, [
    "columns",
    "children"
  ]);
  return /* @__PURE__ */ jsx7(CardContainerWrapper, { $columns: columns, style: __spreadValues({}, props), children });
};
var CardContainer_default = CardContainer;

// src/theme/elements/ThemeOverlay.tsx
import { ThemeProvider } from "styled-components";

// src/theme/elements/theme.ts
var theme = {
  colors: {
    primary: "#B6D0E2",
    secondary: "#B5C7EB",
    hoverBackground: "white",
    button: "#007bff",
    buttonText: "#000",
    buttonHover: "#0056b3",
    buttonHoverText: "#fff",
    text: "black",
    secondaryText: "black"
  },
  windowWidth: 1320,
  breakpoints: {
    desktop: 1366,
    tablet: 768,
    mobile: 360
  }
};
var theme_default = theme;

// src/theme/elements/ThemeOverlay.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function ThemeOverlay({
  theme: theme2 = theme_default,
  children
}) {
  return /* @__PURE__ */ jsx8(ThemeProvider, { theme: theme2, children });
}
export {
  Button_default as Button,
  Card_default as Card,
  CardContainer_default as CardContainer,
  Header_default as Header,
  ThemeOverlay,
  theme_default as theme
};
//# sourceMappingURL=index.js.map