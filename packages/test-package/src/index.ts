// import dotenv from 'dotenv';
// dotenv.config({path: '../../.env'})

import React, { useEffect } from "react";

// console.log('hello', process.env.IDK)
export const greeting: string = 'hello';

export const usePackage = () => {
  useEffect(() => {
    console.log('hello from package');
  }, [])
}