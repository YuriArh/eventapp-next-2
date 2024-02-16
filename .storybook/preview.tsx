import { themes } from "@storybook/theming";
import "../src/app/globals.css";
import type { Preview } from "@storybook/react";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const decorators: Preview["decorators"] = [
  (Story, { globals: { locale } }) => {
    const direction =
      // @ts-ignore
      locale && new Intl.Locale(locale)?.textInfo?.direction === "rtl"
        ? "rtl"
        : undefined;

    return (
      <NextUIProvider locale={locale}>
        <div className="bg-dark" lang={locale} dir={direction}>
          <Story />
        </div>
      </NextUIProvider>
    );
  },
];

const parameters: Preview["parameters"] = {
  darkMode: {
    current: "dark",
    stylePreview: true,
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    dark: {
      ...themes.dark,

      appBg: "#161616",
      barBg: "black",
      background: "black",
      appContentBg: "black",
      appBorderRadius: 14,
    },
    light: {
      ...themes.light,

      appBorderRadius: 14,
    },
  },

  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

const preview: Preview = {
  decorators,
  parameters,
};

export default preview;
