const arrows = document.querySelectorAll('.arrow');
const movieLists = document.querySelectorAll('.movie-list-items');

arrows.forEach((arrow,i)=>{
    // console.log(movieLists[i].computedStyleMap().get('transform')[0].x.value);
    // console.log(movieLists[i].style);
     const itemsCount =  movieLists[i].querySelectorAll('img').length;
     let clickCounter = 0;
    arrow.addEventListener("click",()=>{
        clickCounter++;
        if (itemsCount - (5 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translate(${
                movieLists[i].computedStyleMap().get('transform')[0].x.value - 330}px)`;            
        }else{
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }

    });
});