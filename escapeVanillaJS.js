document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts?
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        function findIntersection(set1, set2) {
            return new Set([...set1].filter(item => set2.has(item)));
        }
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
document.getElementById("solveRoom3").addEventListener("click", async () => {
    try {
        const response = await fetch('directions.json');
        const directions = await response.json();
        const message = await navigateLabyrinth(directions);
        document.getElementById("room3Result").textContent = message;
    } catch (error) {
        console.error('Failed to navigate the labyrinth:', error);

        document.getElementById("room3Result").textContent = 'Error: could not load directions. ';
    }
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set();

    for (const elem of setA){
        
        if (setB.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}


// ### Debugging Tasks:

// 1. **Correct the ID used in the event listener for Room 1**.
// 2. **Use the correct element ID when displaying results for Room 1**.
// 3. **Add missing keyword to the JS concepts set**.
// 4. **Correct the function call to find the intersection of `jsConcepts` and `reactConcepts` for Room 2**.
// 5. **Ensure asynchronous operations are handled correctly in Room 3, particularly awaiting the `navigateLabyrinth` function if needed**.
// 6. **Adjust the `findMostRecentBook` function to correctly compare dates and find the most recent book**.
// 7. **Fix the `findIntersection` function to correctly determine the intersection of two sets**.
// 8. **Add the `await` keyword before `new Promise` in `navigateLabyrinth` to ensure the'
})