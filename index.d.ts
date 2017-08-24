import * as React from "react";

export interface StripeCheckoutProps {
  stripeKey: string;
  name?: string;
  description?: string;
  image?: string;
  token?: (token: string) => void;
  opened?: () => void;
  closed?: () => void;
  ComponentClass?: string;
  panelLabel?: string;
  amount?: number;
  currency?: string;
  locale?: string;
  email?: string;
  shippingAddress?: boolean;
  billingAddress?: boolean;
  zipCode?: boolean;
  alipay?: boolean;
  bitcoin?: boolean;
  allowRememberMe?: boolean;
  reconfigureOnUpload?: boolean;
  triggerEvent?: StripeTriggerEvent;
}

export type StripeTriggerEvent = "onTouchTap" | "onClick" | "onTouchStart";

export default class StripeCheckout extends React.Component<StripeCheckoutProps, any> {}
