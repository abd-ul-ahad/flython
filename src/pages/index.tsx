"use client";
import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/store/slices/UserSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const flightssearch = useSelector((state: RootState) => state.flightssearch);
  const dispatch = useDispatch();

  
  
  useEffect(() => {
    
    console.log("flights", flightssearch);
  }, [])


  return <></>;
}
