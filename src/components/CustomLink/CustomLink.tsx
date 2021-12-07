import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import type { LinkProps } from "react-router-dom";

const CustomLink = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <Link
            className={`menu-link ${match ? "active" : ""}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
