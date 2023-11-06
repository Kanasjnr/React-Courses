import { createContext, useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import UseWindowSize from "./hooks/useWindowSize";
import useAxiosFetch from "./hooks/useAxiosFetch";
import EditPost from "./EditPost";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={{

        }}>
            {children}
        </DataContext.Provider>
    )
}




export default DataContext