// IIFE

(function(){
    function Start()
    {
        console.log("App Started...")

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for ( button of deleteButtons)
        {
            button.addEventListener('click', (event) => {
                if (!confirm("Are your sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();