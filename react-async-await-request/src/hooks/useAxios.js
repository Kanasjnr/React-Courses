import { useState, useEffect } from "react";

const useAxios = (configObj) => {
        const{
            axiosInstance,
            method,
            url,
            requestConfig = {}
        } = configObj
};
