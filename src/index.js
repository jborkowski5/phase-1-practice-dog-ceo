const url = "https://dog.ceo/api/"
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDiv = document.querySelector('#dog-image-container')
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedDiv = document.querySelector('#dog-breeds')
const breedDropdown = document.querySelector('#breed-dropdown')
let breedArray = []


fetch(imgUrl)

.then(res => res.json())

.then(data => {
    data.message.forEach(img => {
    let el = document.createElement('img')
    el.src = img
    imgDiv.append(el)  
        })
})

fetch(breedUrl)

.then(res => res.json())
.then(data => {
    breedArray = Object.keys(data.message)
    breedArray.forEach(breed => {
        let li = document.createElement('li') 
        li.textContent = breed  
        li.addEventListener('click', (e) => {
            li.style.color = 'red'
    })
    
    breedDiv.append(li) 
})
})

breedDropdown.addEventListener('change', (e) => {
    console.log(breedArray)
    let value = e.target.value
    let filteredBreeds = breedArray.filter(breed => {
            return breed[0] === value
        })
            breedDiv.innerHTML = ''
            filteredBreeds.forEach(breed => {
                let li = document.createElement('li')
                li.textContent = breed
                li.addEventListener('click', (e) => {
                li.style.color ='yellow'
             })
        breedDiv.append(li)   

    })

})
