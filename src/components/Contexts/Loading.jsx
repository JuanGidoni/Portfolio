
import React, { useContext, useState, useEffect } from "react"
import Loading from "../Atoms/Loading";

const LoadingContext = React.createContext();

export function useLoadingContext() {
 return useContext(LoadingContext);
}

export function LoadingProvider({ children, ...props }) {
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  if (loading) {
   setTimeout(() => {
    setLoading(!loading);
   }, 2000);
  }
 }, [loading])

 const value = {
  loading,
  setLoading
 }
 return (
  <LoadingContext.Provider value={value} props={props}>
   {loading ? <Loading /> : children}
  </LoadingContext.Provider>
 )
}