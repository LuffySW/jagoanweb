import { useState,useEffect } from "react"
import app, { storage } from "../base"
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";


export default function Test(){
    const [food,setFood] = useState([]);
    const [image,setImage] = useState(null)
    const [imageList,setImageList] = useState([])
    const data = app.firestore().collection("food")
    const imageListRef = ref(storage,"food/")

    const getData = () =>{
        data.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc)=>{
                items.push(doc.data())
            })
            setFood(items)
        })
    }

    const imageUpload = () =>{
        if (image == null) return;
        const imageref = ref(storage,`food/${image.name}`);
        uploadBytes(imageref,image).then((res)=>{
            getDownloadURL(res.ref).then((url)=>{
                setImageList((prev) => [...prev, url])
            })

        })

    }

    useEffect(()=>{
        getData()
        listAll(imageListRef).then((res)=>{
            res.items.forEach((item)=>{
                getDownloadURL(item).then((url) =>{
                    setImageList((prev) => [...prev, url])
                    console.log(url)
                })
            })
        })
    },[])



    return(
        <div className="container-m">
            {food.map((item)=>{
                return(
                    <div key={item.id}>
                        <p>{item.name}</p>
                    </div>
                )
            })}
            {imageList.map((item)=>{
                return(
                    <div className="container" key={item.name}>
                        <img src={item} alt="" />
                    </div>
                )
            })}
            <input type="file" onChange={(e) => {setImage(e.target.files[0])}} name="" id="" />
            <button onClick={imageUpload}>upload</button>
        </div>
    )
}