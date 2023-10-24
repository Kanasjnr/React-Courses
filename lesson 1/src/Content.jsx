import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = [
            'Ali', 'Dave', 'John'
        ]
        const int = Math.floor(Math.random() * 3)
        return names[int]
    }

    const handleClick = () => {
        console.log('you click it');
    }
    const handleClickOne = (names) => {
        console.log(`${names} was clicked`);
    }
    const handleClickTwo = (e) => {
        console.log(e.target.innerText);
    }

    return (
       <main>
    <p> 
        Hello {handleNameChange()}
    </p>

    <button onClick={handleClick()}>Click it</button>
    <button onClick={() => handleClickOne("Ali")}>Click it</button>
    <button onClick={(e) => handleClickTwo(e)}>Click Now</button>
       </main>
    )
}

export default Content
