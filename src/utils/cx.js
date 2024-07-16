import { twMerge } from "tailwind-merge";
import classnames from "classnames";

export const cx = (...args) => twMerge(classnames(args));
