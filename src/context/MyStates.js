import React, { useState } from "react";
import MyContext from "./CreateContext";
import { database } from "../firebase-config";
import { collection, getDocs } from 'firebase/firestore';



const MyStates = (props) => {
    const [Email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [recommend, setRecommend] = useState([]);
    const [Disney, setDisney] = useState([]);
    const [Trending, setTrending] = useState([]);
    const [Orginals, setOrginals] = useState([]);
    const col = collection(database, "movies");
    let result = "";
    let b = [];
    let r = [];
    let t = [];
    let n = [];
    const MovieSetting = async () => {
         result = await getDocs(col)
        let a = result.docs.map(doc => { return ({ ...doc.data(), id: doc.id }) })
        
        a.forEach((val) => {
            if (val.type === "original") {
                b.push(val)
            }
            else if (val.type === "recommend") {
                r.push(val)


            }
            else if (val.type === "trending") {
                t.push(val)

            }
            else {
                n.push(val)

            }
        })
        setOrginals(b)
        setDisney(n)
        setTrending(t)
        setRecommend(r)
    }

    const setting = async (emails, names) => {

        setEmail(emails)
        setName(names)

    }
    return (
        <MyContext.Provider value={{ Email, Name, Disney, Orginals, recommend, Trending, setting, MovieSetting }}>
            <>{props.children}</>
        </MyContext.Provider>
    )
}


export default MyStates;