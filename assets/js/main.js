$(document).ready(function() {
  $('.I360').hide();
  $('.carousel').hide();
  
  
  
})

$('#desert').on('click',()=>{
  event.preventDefault();
  $(".pageHeader").hide();
  $('.row').hide();
  $('.I360').show();

  const url1 = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Desert-Sage/Images/adidas-Yeezy-Boost-350-V2-Desert-Sage/Lv2/img`
  const url2 = `.jpg?auto=format,compress&q=90&updated_at=1583162937&w=1000`
  loader(url1, url2);
  })

  $('#cinder').on('click',()=>{
    event.preventDefault();
    $(".pageHeader").hide();
    $('.row').hide();
    $('.I360').show();
    
      const url1 = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Cinder/Images/adidas-Yeezy-Boost-350-V2-Cinder/Lv2/img`
       
      const url2 = `.jpg?auto=format,compress&q=90&updated_at=1585357645&w=1000`
      loader(url1, url2);
  })

  $('#mist').on('click',()=>{
    event.preventDefault();
    $(".pageHeader").hide();
    $('.row').hide();
    $('.I360').show();
    
      const url1 = `https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow/Images/Adidas-Yeezy-Boost-350-V2-Semi-Frozen-Yellow/Lv2/img`
      
      const url2 = `.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000`
      loader(url1, url2);
  })

  $('#Zebra').on('click',()=>{
    event.preventDefault();
    $(".pageHeader").hide();
    $('.row').hide();
    $('.I360').show();
    
      const url1 = `https://stockx-360.imgix.net/Adidas-Yeezy-Boost-350-V2-Zebra/Images/Adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img`
      
      const url2 = `.jpg?auto=format,compress&q=90&updated_at=1578503931&w=1000`
      loader(url1, url2);
  })

  $('#wave').on('click',()=>{
    event.preventDefault();
    $(".pageHeader").hide();
    $('.row').hide();
    $('.I360').show();
    
      const url1 = `https://stockx-360.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Images/Adidas-Yeezy-Wave-Runner-700-Solid-Grey/Lv2/img`
      
      const url2 = `.jpg?auto=format,compress&q=90&updated_at=1538080256&w=1000`
      loader(url1, url2);
  })

  $('#tail').on('click',()=>{
    event.preventDefault();
    $(".pageHeader").hide();
    $('.row').hide();
    $('.I360').show();
    
      const url1 = `https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Tail-Light/Images/adidas-Yeezy-Boost-350-V2-Tail-Light/Lv2/img`
      
      const url2 = `.jpg?auto=format,compress&q=90&updated_at=1584757351&w=1000`
      loader(url1, url2);
  })


function loader(prev, next){
  $('.carousel').show();
  const slider = document.querySelector('#Slider')
  const canvas = document.querySelector('#canvas')
  slider.addEventListener('input', handleInputSlider)
  const ctx = canvas.getContext('2d')
  const images = []
  for (let i = 1; i <= 36; i += 1) {
    const number = i.toString().padStart(2, '00')
    const url = `${prev}${number}${next}`
    const image = new Image()
    image.src = url
    image.addEventListener('load', () => {
      images[i] = image
      if (i === 1) {
        loadImage(i)
      }
    })
  }
  function loadImage(index) {
    ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height)
  }
  function handleInputSlider() {
    loadImage(this.value)
  }
  
}


  




    
   

  
