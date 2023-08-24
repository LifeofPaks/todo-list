import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const useAxiosFetch = (dataUrl) => {
    const [data, setdata] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{

        let isMounted = true
        const source = axios.CancelToken.source()
        const fetchData = async (url) =>{

            try{
                setIsLoading(true)
                const resp = await axios.get(url, {
                    cancelToken : source.cancel()
                })
                if (isMounted){
                    setdata(resp.data)
                    setFetchError(null)
                }
            }
            catch(err){
                if(isMounted){
                    setdata([])
                    setFetchError(err.message)
                }
            }

            finally{
                isMounted && setIsLoading(false)
            }
        }

        fetchData(dataUrl)

        return ()=> {isMounted = false; source.cancel()}

    }, [dataUrl])

    return {data, isLoading, fetchError}
}
