

export const checkout = async (price: any) => {
  const p = price.map((e: any) => ({ price: e.id }));
  const data = await fetch("/api/getproducts",{
    method:"POST",
    body:JSON.stringify({
        price_id:p
    }),
    headers:{
        "Content-Type":"application/json"
    }

  }
  )
  const res=await data.json()
 console.log(res)
};
