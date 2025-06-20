"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button_default,
  Card: () => Card_default,
  CardContainer: () => CardContainer_default,
  Header: () => Header_default,
  ThemeOverlay: () => ThemeOverlay,
  theme: () => theme_default
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_styled_components = __toESM(require("styled-components"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
var getThemeColors = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var StyledButton = import_styled_components.default.button`
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledButton, __spreadProps(__spreadValues({}, rest), { children: label }));
};
var Button_default = Button;

// src/components/Header/index.tsx
var import_react2 = require("react");
var import_styled_components5 = __toESM(require("styled-components"), 1);

// src/components/Header/components/hamburger.tsx
var import_styled_components2 = __toESM(require("styled-components"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var getThemeColors2 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var Bun = import_styled_components2.default.button`
    width: 2.8rem;
    height: 2.8em;
    display: flex;
    flex-flow: column nowrap;
    border-radius: 6px;
    z-index: 10;
    cursor: pointer;
`;
var Burger = import_styled_components2.default.div`
    width: ${({ $isOpen, $index }) => $isOpen && $index === 2 ? "0" : "2.5rem"};
    height: 0.4em;
    border-radius: 10px;
    background: ${getThemeColors2("secondary")};
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin: auto;
    transform: ${({ $isOpen, $index }) => $isOpen && ($index === 1 ? "rotate(45deg) translateX(5%);" : $index === 2 ? "translateX(0%)" : "rotate(-45deg) translateX(5%);")};
`;
var Hamburger = ({ isOpen }) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Bun, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Burger, { $isOpen: isOpen, $index: 1 }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Burger, { $isOpen: isOpen, $index: 2 }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Burger, { $isOpen: isOpen, $index: 3 })
] });
var hamburger_default = Hamburger;

// src/components/Header/components/desktopmenu.tsx
var import_react = require("react");
var import_styled_components3 = __toESM(require("styled-components"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
var getThemeColors3 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var MenuWrapper = import_styled_components3.default.div`
    background-color: ${getThemeColors3("primary")};
    height: 80%;
    align-self: end;
    position: relative;
    display: flex;
`;
var MenuItem = import_styled_components3.default.a`
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
var SubMenuItem = import_styled_components3.default.a`
    color: ${getThemeColors3("text")};
    padding: 16px;
    white-space: nowrap;
    transition: linear 0.3s;
    &:hover {
        background-color: ${getThemeColors3("hoverBackground")};
    }
`;
var SubMenuWrapper = import_styled_components3.default.div`
    background-color: ${getThemeColors3("primary")};
    position: absolute;
    top: 100%;
    left: 0;
    transition: linear 0.3s;
    z-index: 1000;
    display: grid;
`;
var DesktopMenu = (props) => {
  const [isDropdownVisible, setDropdownVisible] = (0, import_react.useState)(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const { page, menuWidth = 200 } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    MenuWrapper,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MenuItem, { $menuWidth: menuWidth, children: page.name }),
        isDropdownVisible && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SubMenuWrapper, { children: page.subPages && page.subPages.map((subPages, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SubMenuItem, { href: subPages.subLink, children: subPages.subName }, index)) })
      ]
    }
  );
};
var desktopmenu_default = DesktopMenu;

// src/components/Header/components/mobilemenu.tsx
var import_styled_components4 = __toESM(require("styled-components"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
var getThemeColors4 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var getProps = (prop) => (props) => props[prop];
var MobileMenuWrapper = import_styled_components4.default.div`
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
var MenuItem2 = import_styled_components4.default.a`
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
var SubMenuWrapper2 = import_styled_components4.default.div`
    margin-left: 1rem;
    background-color: ${getThemeColors4("primary")};
    position: relative;
    display: flex;
    flex-direction: column;
`;
var SubMenuItem2 = import_styled_components4.default.a`
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(MobileMenuWrapper, { $toggle: isOpen, $height: height, children: pages.map(({ iconComponent, name, link, subPages }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "grid" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(MenuItem2, { href: link, children: [
      iconComponent,
      name
    ] }, name),
    subPages && subPages.map((subPage) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SubMenuWrapper2, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SubMenuItem2, { href: subPage.subLink, children: subPage.subName }) }, subPage.subName))
  ] }, link)) });
};
var mobilemenu_default = MobileMenu;

// src/components/Header/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var getThemeColors5 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var getThemeWidth = (prop) => ({ theme: theme2 }) => theme2[prop];
var getThemeBreakpoints = (prop) => ({ theme: theme2 }) => theme2.breakpoints[prop];
var NavBarContainer = import_styled_components5.default.div`
    background-color: ${getThemeColors5("primary")};
    height: ${({ $height }) => $height}px;
    display: grid;
`;
var NavBarWrapper = import_styled_components5.default.div`
    justify-self: center;
    justify-items: end;
    display: grid;
    height: 100%;
    width: 100%;
    max-width: ${getThemeWidth("windowWidth")}px;
`;
var LogoWrapper = import_styled_components5.default.div`
    position: relative;
    height: 100%;
    width: auto;
`;
var MenuWrapper2 = import_styled_components5.default.div`
    display: none;
    @media (min-width: ${getThemeBreakpoints("desktop")}px) {
        display: grid;
        grid-template-columns: repeat(${({ $number }) => $number}, 1fr);
    }
`;
var Trigger = import_styled_components5.default.div`
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
var StyledImage = import_styled_components5.default.img`
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
  const [hamburgerOpen, setHamburgerOpen] = (0, import_react2.useState)(false);
  const theme2 = (0, import_styled_components5.useTheme)();
  const desktopBreakpoint = theme2.breakpoints.desktop;
  const toggleHamburger = (0, import_react2.useCallback)(
    () => setHamburgerOpen((prev) => !prev),
    []
  );
  (0, import_react2.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth >= desktopBreakpoint) {
        setHamburgerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopBreakpoint]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NavBarContainer, __spreadProps(__spreadValues({ $height: height }, rest), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(NavBarWrapper, { children: [
    logo && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(LogoWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StyledImage, { src: logo, alt }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Trigger, { onClick: toggleHamburger, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(hamburger_default, { isOpen: hamburgerOpen }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MenuWrapper2, { $number: pages.length, children: pages.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      desktopmenu_default,
      {
        page: item,
        menuWidth
      },
      index
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_styled_components6 = __toESM(require("styled-components"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var getThemeColors6 = (prop) => ({ theme: theme2 }) => theme2.colors[prop];
var CardWrapper = import_styled_components6.default.div`
    display: grid;
    grid-template-rows: 1fr 0.3fr;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    overflow: hidden;
`;
var ImgWrapper = import_styled_components6.default.div`
    grid-row: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
var StyledImg = import_styled_components6.default.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all linear 0.5s;
    &:hover {
        opacity: 70%;
        transform: scale(98%);
    }
`;
var StyledLink = import_styled_components6.default.a`
    text-decoration: none;
`;
var TextWrapper = import_styled_components6.default.div`
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(CardWrapper, { $height: height, $width: width, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ImgWrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledLink, { href: link, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledImg, { $height: height, src: imgSrc, alt }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(TextWrapper, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h1", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(StyledLink, { href: link, children: text }) }),
      subText && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: subText })
    ] })
  ] });
};
var Card_default = Card;

// src/components/CardContainer.tsx
var import_styled_components7 = __toESM(require("styled-components"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");
var CardContainerWrapper = import_styled_components7.default.div`
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CardContainerWrapper, { $columns: columns, style: __spreadValues({}, props), children });
};
var CardContainer_default = CardContainer;

// src/theme/elements/ThemeOverlay.tsx
var import_styled_components8 = require("styled-components");

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
var import_jsx_runtime8 = require("react/jsx-runtime");
function ThemeOverlay({
  theme: theme2 = theme_default,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_styled_components8.ThemeProvider, { theme: theme2, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card,
  CardContainer,
  Header,
  ThemeOverlay,
  theme
});
//# sourceMappingURL=index.cjs.map