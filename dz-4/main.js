async function fetchData() {
    try {
        const response = await fetch('people.json');
        const data = await response.json();

        data.forEach((item) => {
            const div = document.createElement('div');
            div.innerHTML = `
        <h1>${item.name}</h1>
        <h1>${item.age}</h1>
      `;
            document.body.append(div);
        });
    } catch (error) {
        console.error(e);
    }
}

fetchData();
