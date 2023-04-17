let cell1 = document.getElementById('00')
        let cell2 = document.getElementById('01')
        let cell3 = document.getElementById('02')
        let cell4 = document.getElementById('10')
        let cell5 = document.getElementById('11')
        let cell6 = document.getElementById('12')
        let cell7 = document.getElementById('20')
        let cell8 = document.getElementById('21')
        let cell9 = document.getElementById('22')
        let scoreBoard = document.querySelector('.score-board')
        let resetButton = document.querySelector('.reset-button')
        const body = document.querySelector('body')
        let board = document.querySelector('.container')
        let switched = 1

        const cellOne = () => {
            if(switched == 1){
                cell1.value = 'O'
                cell1.classList.add('disabledbutton')
                switched = 0
            }else{
                cell1.value = 'X'
                cell1.classList.add('disabledbutton')
                switched = 1
            }
            return cell1.value
        }
        console.log(cell1.value)

        const cellTwo = () => {
            if(switched == 1){
                cell2.value = 'O'
                cell2.classList.add('disabledbutton')
                switched = 0
            }else{
                cell2.value = 'X'
                cell2.classList.add('disabledbutton')
                switched = 1
            }
            return cell2.value
        }

        const cellThree = () => {
            if(switched == 1){
                cell3.value = 'O'
                cell3.classList.add('disabledbutton')
                switched = 0
            }else{
                cell3.value = 'X'
                cell3.textContent = 'X'
                cell3.classList.add('disabledbutton')
                switched = 1
            }
            return cell3.value
        }
        const cellFour = () => {
            if(switched == 1){
                cell4.value = 'O'
                cell4.classList.add('disabledbutton')
                switched = 0
            }else{
                cell4.value = 'X'
                cell4.classList.add('disabledbutton')
                switched = 1
            }
            return cell4.value
        }
        const cellFive = () => {
            if(switched == 1){
                cell5.value = 'O'
                cell5.classList.add('disabledbutton')
                switched = 0
            }else{
                cell5.value = 'X'
                cell5.classList.add('disabledbutton')
                switched = 1
            }
            return
        }
        const cellSix = () => {
            if(switched == 1){
                cell6.value = 'O'
                cell6.classList.add('disabledbutton')
                switched = 0
            }else{
                cell6.value = 'X'
                cell6.classList.add('disabledbutton')
                switched = 1
            }
            return
        }
        const cellSeven = () => {
            if(switched == 1){
                cell7.value = 'O'
                cell7.classList.add('disabledbutton')
                switched = 0
            }else{
                cell7.value = 'X'
                cell7.classList.add('disabledbutton')
                switched = 1
            }
            return
        }
        const cellEight = () => {
            if(switched == 1){
                cell8.value = 'O'
                cell8.classList.add('disabledbutton')
                switched = 0
            }else{
                cell8.value = 'X'
                cell8.classList.add('disabledbutton')
                switched = 1
            }
            return
        }
        const cellNine = () => {
            if(switched == 1){
                cell9.value = 'O'
                cell9.classList.add('disabledbutton')
                switched = 0
            }else{
                cell9.value = 'X'
                cell9.classList.add('disabledbutton')
                switched = 1
            }
            return
        }
      
        function winning () {
            if(cell1.value == 'O' && cell2.value == 'O' && cell3.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell1.classList.add('winner')
                cell2.classList.add('winner')
                cell3.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }else if(cell4.value == 'O' && cell5.value == 'O' && cell6.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell4.classList.add('winner')
                cell5.classList.add('winner')
                cell6.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            } 
            else if(cell7.value == 'O' && cell8.value == 'O' && cell9.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell7.classList.add('winner')
                cell8.classList.add('winner')
                cell9.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell1.value == 'O' && cell4.value == 'O' && cell7.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell1.classList.add('winner')
                cell4.classList.add('winner')
                cell7.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell1.value == 'O' && cell5.value == 'O' && cell9.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell1.classList.add('winner')
                cell5.classList.add('winner')
                cell9.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell3.value == 'O' && cell6.value == 'O' && cell9.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell3.classList.add('winner')
                cell6.classList.add('winner')
                cell9.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell2.value == 'O' && cell5.value == 'O' && cell8.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell2.classList.add('winner')
                cell5.classList.add('winner')
                cell8.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            
            else if(cell3.value == 'O' && cell5.value == 'O' && cell7.value == 'O'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell3.classList.add('winner')
                cell5.classList.add('winner')
                cell7.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }


            if(cell1.value == 'X' && cell2.value == 'X' && cell3.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell1.classList.add('winner')
                cell2.classList.add('winner')
                cell3.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }else if(cell4.value == 'X' && cell5.value == 'X' && cell6.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell4.classList.add('winner')
                cell5.classList.add('winner')
                cell6.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            } 
            else if(cell7.value == 'X' && cell8.value == 'X' && cell9.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell7.classList.add('winner')
                cell8.classList.add('winner')
                cell9.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell1.value == 'X' && cell4.value == 'X' && cell7.value == 'X'){
                scoreBoard.textContent = 'Player O Won!'
                board.classList.add('winningdisabledbutton')
                cell1.classList.add('winner')
                cell4.classList.add('winner')
                cell7.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell1.value == 'X' && cell5.value == 'X' && cell9.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell1.classList.add('winner')
                cell5.classList.add('winner')
                cell9.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell3.value == 'X' && cell6.value == 'X' && cell9.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell3.classList.add('winner')
                cell6.classList.add('winner')
                cell9.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            else if(cell2.value == 'X' && cell5.value == 'X' && cell8.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell2.classList.add('winner')
                cell5.classList.add('winner')
                cell8.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
            
            else if(cell3.value == 'X' && cell5.value == 'X' && cell7.value == 'X'){
                scoreBoard.textContent = 'Player X Won!'
                board.classList.add('winningdisabledbutton')
                cell3.classList.add('winner')
                cell5.classList.add('winner')
                cell7.classList.add('winner')
                body.style.backgroundColor = 'white'
                return
            }
        }

        const reset = () =>{
            location.reload()
            cell1.value = ''
            cell2.value = ''
            cell3.value = ''
            cell4.value = ''
            cell5.value = ''
            cell6.value = ''
            cell7.value = ''
            cell8.value = ''
            cell9.value = ''
        }
        

       
            resetButton.addEventListener('click', reset)
            cell1.addEventListener('click', () =>{
                cellOne();
                winning()
            })
            cell2.addEventListener('click', () =>{
                cellTwo();
                winning()
            })
            cell3.addEventListener('click', () =>{
                cellThree();
                winning()
            })
            cell4.addEventListener('click', () =>{
                cellFour();
                winning()
            })
            cell5.addEventListener('click', () =>{
                cellFive();
                winning()
            })
            cell6.addEventListener('click', () =>{
                cellSix();
                winning()
            })
            cell7.addEventListener('click', () =>{
                cellSeven();
                winning()
            })
            cell8.addEventListener('click', () =>{
                cellEight();
                winning()
            })
            cell9.addEventListener('click', () =>{
                cellNine();
                winning()
            })
