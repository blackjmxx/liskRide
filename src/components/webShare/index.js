import React, { Component } from "react";

export const share = (config) =>
  (navigator).share(config.params) // tslint:disable-line:no-any
    .then(config.onShareSuccess)
    .catch(config.onShareError);

const webshare = (WrappedComponent) => (
  class ExtendedComponent extends Component{
    render() {
      const { config, ...passedProps } = this.props; // tslint:disable-line:no-any
      const isSupported = (navigator).share !== undefined; // tslint:disable-line:no-any
      const supportedProps = isSupported && config
        ? { isSupported, share: () => share(config) }
        : { isSupported };
      
      return <WrappedComponent {...passedProps} {...supportedProps} />;
    }
  }
);

export default webshare;