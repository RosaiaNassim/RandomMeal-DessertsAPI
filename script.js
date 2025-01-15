const mealApiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
        const dessertApiUrl = "https://api.spoonacular.com/recipes/complexSearch?query=dessert&apiKey=YOUR_API_KEY";

        document.getElementById("loadData").addEventListener("click", () => {
            loadMeal();
            loadDesserts();
        });

        async function loadMeal() {
            try {
                const response = await fetch(mealApiUrl);
                const data = await response.json();
                const meal = data.meals[0];
                document.getElementById("meal").innerHTML = `
                    <strong>${meal.strMeal}</strong><br>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" style="max-width: 100%; height: auto; border-radius: 8px;">
                    <p>${meal.strInstructions}</p>
                `;
            } catch (error) {
                console.error("Error fetching meal data:", error);
            }
        }

        async function loadDesserts() {
            try {
                const response = await fetch(dessertApiUrl);
                const data = await response.json();
                const desserts = data.results;
                const dessertList = document.getElementById("dessertList");
                dessertList.innerHTML = "";

                desserts.forEach(dessert => {
                    const dessertDiv = document.createElement("div");
                    dessertDiv.classList.add("dessert");
                    dessertDiv.innerHTML = `
                        <strong>${dessert.title}</strong><br>
                        <img src="${dessert.image}" alt="${dessert.title}" style="max-width: 100%; height: auto; border-radius: 8px;">
                    `;
                    dessertList.appendChild(dessertDiv);
                });
            } catch (error) {
                console.error("Error fetching dessert data:", error);
            }
        }