let counter = 0;

        function count () {
            counter++;
            document.querySelector('h1').innerHTML = counter; 

            counter % 10 === 0 ? alert(`Count is now ${counter}`): null
        }
        document.addEventListener('DOMContentLoaded', function () {
            document.querySelector('button').addEventListener('click',count);
        })