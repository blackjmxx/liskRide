import React from 'react'
import Loadable from "react-loadable";

export const LoadableGoogleLogin = Loadable({
    loader: (props) => import("./GoogleLogin"),
    loading: () => <div>...</div>
});

export const LoadableFacebookLogin = Loadable({
    loader: () => import("./FacebookLogin"),
    loading: () => <div>...</div>
});

