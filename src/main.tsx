import { hydrate } from "preact";
import { DATA_ATTRIBUTE } from "../constants";
import Page from "./index";


  const widget = document.querySelector(`[${DATA_ATTRIBUTE}]`);
  if (!widget) throw new Error(`🚩 Element with property ${DATA_ATTRIBUTE} not found.`);

    hydrate(<Page />, widget);