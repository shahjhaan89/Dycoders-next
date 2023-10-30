"use client";

import { useEffect } from "react";

export const MyProvider = ({ children }: any) => {

    useEffect(() => {
        require('preline');
    }, []);

    return children
};