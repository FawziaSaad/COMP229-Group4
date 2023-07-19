// IIFE

// This is Typescript, but it is not liking it.  In the video he changes it to .js, not sure if he fixes it later...
// (() => {
//   function Start(): void

//   {
//     console.log('App started (TS function result)...');
//   }

//   window.addEventListener('load', Start);

// })();

// we may need to figure out how to add this stuff in typescript, but this JS works...

(function(){
    function Start()
    {
        console.log("Angular App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for ( button of deleteButtons)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are your sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/game-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();
