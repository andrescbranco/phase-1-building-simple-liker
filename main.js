// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function handlelike () {

  let like = document.querySelectorAll('.like-glyph')
  like.forEach(element => element.addEventListener('click', (e)=>{
    mimicServerCall()
    .then ((res)=> {
      if (res === 'Pretend remote server notified of action!'){
        let heart = e.target
        heart.classList.toggle('activated-heart')
        if(heart.className === 'like-glyph activated-heart'){
          heart.textContent = FULL_HEART 
          } else {
          heart.textContent = EMPTY_HEART
        }
      }
    })
    .catch((error)=> {
      let errorModal = document.querySelector('#modal')
      errorModal.classList.remove('hidden')
      let p = document.querySelector('#modal-message')
      p.textContent = `${error}`
      setTimeout(function(){
        errorModal.className = 'hidden'
      },3000)
      
      return error
    })
    
  }))
  
  
}

handlelike()


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
