"use client";
import { compose } from "~/shared/lib";
import { withApollo } from "./withApollo";

import { withTheme } from "./withTheme";
import { withErrorHandler } from "./withErrorHandler";

export const Providers = compose([withTheme, withErrorHandler, withApollo]);
