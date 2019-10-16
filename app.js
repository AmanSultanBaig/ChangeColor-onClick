document.getElementById('btn').addEventListener('click', getRandom);

    function getRandom() {
        var getRandomColor = '#' + Math.floor(Math.random() * (999 - 100 + 1) + 100);
        document.getElementById('change').style.backgroundColor = getRandomColor
    }
