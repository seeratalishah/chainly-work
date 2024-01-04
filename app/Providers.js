"use client"
import React from 'react';
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

const Providers = ({children}) => {
    const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      {children}
    </ThemeProvider>
  )
}

export default Providers
