(function() {
    const buttons = document.querySelectorAll('.btn')
    const storeImage =document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click',(e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImage.forEach((Item) => {
                if(filter ==='All') {
                    Item.style.display ='block'
                } else{
                    if(Item.classList.contains(filter)) {
                        Item.style.display ='block'
                    } else{
                        Item.style.display ='none'
                    }
                }
            })
        })
    })

})();