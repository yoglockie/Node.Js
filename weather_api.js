
async function fetchData() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Beawar,in&appid=5d9c2f77d47d6d4e3ac2c5955f34a343")
        if (!response.ok) {
            throw new Error("N/w respose failed")
        }
        const data = await response.json()
        console.log(data)
        return `${data.main.temp}`
    } catch (error) {
        console.log("Error",error)
    }
    
}


fetchData()