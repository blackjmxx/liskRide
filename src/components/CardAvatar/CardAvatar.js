import React from "react";
import { Image, ImageLoader } from "./styles";
import Skeleton from "react-skeleton-loader";

export const CardAvatar = ({ imageUrl, onClick, cardAvatarRef }) => (<div ref={cardAvatarRef}>
    <ImageLoader src={imageUrl}>
        <Image
            src={imageUrl}
            wrapped
            onClick={onClick}
        />
        <div>Error!</div>
        <Skeleton count={1} width="50%" />
    </ImageLoader>
</div>);