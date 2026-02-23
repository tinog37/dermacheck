"use client";

import { ReactNode } from "react";

interface HeaderProps {
    children?: ReactNode;
    title?: string;
    showBack?: boolean;
}

export default function Header({ children }: HeaderProps) {
    // If children are provided, render them (custom header content like Dashboard)
    if (children) {
        return (
            <header className="app-header">
                {children}
            </header>
        );
    }

    return null;
}
