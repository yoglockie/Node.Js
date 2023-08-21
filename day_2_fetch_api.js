

async function fetchData() {
       try { 
            
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if(!response.ok)
        {
            throw new Error("N/w respose failed")
        }
        const data= await response.json()
        console.log(data)

       } 
       catch (error) {
           console.error("Error fetching data ",error)
       }
}


fetchData()